import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Gateway from './pages/Gateway'
import Robotics from './pages/Robotics'
import Home from './pages/Home'
import Services from './pages/Services'
import ControlUnits from './pages/ControlUnits'
import ControlUnitsGallery from './pages/ControlUnitsGallery'
import ControlUnitsPrices from './pages/ControlUnitsPrices'
import Welding from './pages/Welding'
import Contact from './pages/Contact'
import HowToFind from './pages/HowToFind'
import NotFound from './pages/NotFound'

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
      <Routes>
        <Route path="/" element={<Gateway />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route element={<Layout />}>
          <Route path="autoservisas" element={<Home />} />
          <Route path="pradzia" element={<Navigate to="/autoservisas" replace />} />
          <Route path="autoserviso-paslaugos" element={<Services />} />
          <Route path="valdymo-bloku-remontas" element={<ControlUnits />} />
          <Route path="valdymo-bloku-remontas/galerija" element={<ControlUnitsGallery />} />
          <Route path="valdymo-bloku-remontas/kainos" element={<ControlUnitsPrices />} />
          <Route path="metalo-suvirinimas" element={<Welding />} />
          <Route path="kontaktai" element={<Contact />} />
          <Route path="kontaktai/kaip-mus-rasti" element={<HowToFind />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
