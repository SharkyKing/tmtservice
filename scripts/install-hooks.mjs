/**
 * Installs the pre-commit secret check. Runs automatically on `npm install`
 * (package.json "prepare"); harmless outside a git checkout.
 *
 * Two things this file does not assume, because getting either wrong makes it report
 * success while installing nothing:
 *
 *   1. **Where the hooks live.** In a worktree `.git` is a *file* pointing elsewhere, so
 *      building `.git/hooks` by hand fails there — which is exactly where work happens
 *      day to day. The path is asked of git instead, and git answers with the shared
 *      hooks directory, so one install covers the main checkout and every worktree.
 *   2. **Where this script lives.** The companion checker is found relative to this file
 *      and written into the hook as a repo-relative path, so the pair can be dropped into
 *      a repo that keeps its scripts in `tools/` just as well as one that uses `scripts/`.
 */
import { chmodSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const git = (...args) =>
  execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();

let hooks;
let root;
try {
  hooks = resolve(git('rev-parse', '--path-format=absolute', '--git-path', 'hooks'));
  root = resolve(git('rev-parse', '--show-toplevel'));
} catch {
  process.exit(0); // not a git checkout — nothing to install into
}

const checker = resolve(dirname(fileURLToPath(import.meta.url)), 'check-secrets.mjs');
if (!existsSync(checker)) {
  console.warn('! check-secrets.mjs is not beside install-hooks.mjs — hook not installed.');
  process.exit(0);
}
// replaceAll, not a regex: an escaped backslash inside a character class is one slip
// away from matching only '/', which silently leaves a Windows path in a /bin/sh hook.
const rel = relative(root, checker).replaceAll('\\', '/');

mkdirSync(hooks, { recursive: true });
const path = resolve(hooks, 'pre-commit');

/**
 * One hooks directory serves every worktree of the repository, but the checker is a file
 * inside the branch being committed. So the hook must not name a single fixed path: a
 * worktree on a branch that predates the checker, or one that keeps its scripts in the
 * other directory, would otherwise fail every commit with "cannot find module" — which is
 * how a security tool teaches people to reach for --no-verify.
 *
 * It therefore looks for the checker, runs it if it is there, and says plainly when it is
 * not. A skipped scan that announces itself is recoverable; a broken commit is not.
 */
writeFileSync(
  path,
  `#!/bin/sh
# Installed by ${rel.replace('check-secrets', 'install-hooks')} — refuses commits that contain secrets.
for f in tools/check-secrets.mjs scripts/check-secrets.mjs; do
  [ -f "$f" ] && exec node "$f"
done
echo "pre-commit: check-secrets.mjs is not in this worktree - secret scan SKIPPED." >&2
`,
);
try {
  chmodSync(path, 0o755);
} catch {
  /* windows */
}
console.log(`pre-commit hook installed -> ${path} (runs ${rel})`);
