import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import HenLaGi from './pages/HenLaGi.jsx'
import XuTriTaiNha from './pages/XuTriTaiNha.jsx'
import CapCuuKhanCap from './pages/CapCuuKhanCap.jsx'
import VeSinhKeHoach from './pages/VeSinhKeHoach.jsx'
import EquipmentGuidePage from './pages/EquipmentGuidePage.jsx'
import InhalerGuidePage from './pages/InhalerGuidePage.jsx'
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
            path="/su-dung-khi-dung"
            element={<EquipmentGuidePage pageKey="su-dung-khi-dung" />}
          />
          <Route
            path="/huong-dan-dung-cu-hit"
            element={<Navigate to="/huong-dan-dung-cu-hit/ong-ngam" replace />}
          />
          <Route path="/huong-dan-dung-cu-hit/:tab" element={<InhalerGuidePage />} />
          <Route
            path="/cach-su-dung-dung-cu-hit"
            element={<Navigate to="/huong-dan-dung-cu-hit/ong-ngam" replace />}
          />
          <Route
            path="/su-dung-mat-na"
            element={<Navigate to="/huong-dan-dung-cu-hit/mat-na" replace />}
          />
          <Route
            path="/su-dung-may-khi-dung"
            element={<Navigate to="/su-dung-khi-dung" replace />}
          />
          <Route
            path="/su-dung-buong-dem"
            element={<Navigate to="/huong-dan-dung-cu-hit/ong-ngam" replace />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}
