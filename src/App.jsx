import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import HenLaGi from './pages/HenLaGi.jsx'
import XuTriTaiNha from './pages/XuTriTaiNha.jsx'
import CapCuuKhanCap from './pages/CapCuuKhanCap.jsx'
import VeSinhKeHoach from './pages/VeSinhKeHoach.jsx'
import EquipmentGuidePage from './pages/EquipmentGuidePage.jsx'
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
          <Route
            path="/cach-su-dung-dung-cu-hit"
            element={<Navigate to="/su-dung-buong-dem" replace />}
          />
          <Route
            path="/su-dung-mat-na"
            element={<EquipmentGuidePage pageKey="su-dung-mat-na" />}
          />
          <Route
            path="/su-dung-may-khi-dung"
            element={<EquipmentGuidePage pageKey="su-dung-may-khi-dung" />}
          />
          <Route
            path="/su-dung-buong-dem"
            element={<EquipmentGuidePage pageKey="su-dung-buong-dem" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}
