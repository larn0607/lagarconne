import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="main__layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout