import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import HenLaGi from './pages/HenLaGi.jsx'
import XuTriTaiNha from './pages/XuTriTaiNha.jsx'
import CapCuuKhanCap from './pages/CapCuuKhanCap.jsx'
import VeSinhKeHoach from './pages/VeSinhKeHoach.jsx'
import CachSuDungDungCuHit from './pages/CachSuDungDungCuHit.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hen-la-gi" element={<HenLaGi />} />
          <Route path="/xu-tri-tai-nha" element={<XuTriTaiNha />} />
          <Route path="/cap-cuu-khan-cap" element={<CapCuuKhanCap />} />
          <Route path="/ve-sinh-ke-hoach" element={<VeSinhKeHoach />} />
          <Route path="/cach-su-dung-dung-cu-hit" element={<CachSuDungDungCuHit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}
