import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'
import ScrollProgress from './ScrollProgress'

export default function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollProgress />
      <Header />
      <main className="site-main" id="main-content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
