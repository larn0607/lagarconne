import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Catalog from './pages/Catalog'
import Collections from './pages/Collections'
import Detail from './pages/Detail'
import DesignersIndex from './pages/DesignersIndex'
import ScrollToTop from './components/ScrollToTop'
import Editoral from './pages/editoral/Editoral'
import Collection from './pages/editoral/Blog'

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='collections' element={<Collections />}>
          <Route path=':path' element={<Catalog />} />
          <Route path=':path/:id' element={<Detail />} />
        </Route>
        <Route path='designers' element={<DesignersIndex />} />
        <Route path='editoral' element={<Editoral />}>
          <Route path=":blog" element={<Collection />} />
        </Route>
      </Route>
    </Routes>
    </>
  )
}

export default App;
