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
 * inside the branch being committed — so the hook looks for it rather than naming one
 * fixed path.
 *
 * When it does not find it, the hook STOPS THE COMMIT. The first version of this file let
 * the commit through with a warning on stderr, reasoning that "a skipped scan that
 * announces itself is recoverable; a broken commit is not". That reasoning was wrong, and
 * this repo is the proof: the checker sat on an unmerged branch (saugumas/apsauga) for the
 * whole of main's history, every commit printed the warning into the noise of a normal
 * `git commit`, and every commit went unscanned while the hook file on disk looked like
 * working protection. A commit that stops tells you in one second what a skipped scan
 * hides for weeks — 30-patterns/apsauga-irodoma-ja-paleidus.md.
 *
 * The message says how to get the checker back, so the way out of a branch that predates
 * it is to restore the protection rather than to reach for --no-verify.
 */
writeFileSync(
  path,
  `#!/bin/sh
# Installed by ${rel.replace('check-secrets', 'install-hooks')} — refuses commits that contain secrets.
for f in tools/check-secrets.mjs scripts/check-secrets.mjs; do
  [ -f "$f" ] && exec node "$f"
done
echo "pre-commit: check-secrets.mjs is not in this worktree - COMMIT REFUSED." >&2
echo "  Without it the commit cannot be scanned for secrets, and an unscanned commit" >&2
echo "  must not look like a scanned one. Restore the scanner, then commit again:" >&2
echo "    git checkout main -- ${rel}" >&2
exit 1
`,
);
try {
  chmodSync(path, 0o755);
} catch {
  /* windows */
}
console.log(`pre-commit hook installed -> ${path} (runs ${rel})`);
