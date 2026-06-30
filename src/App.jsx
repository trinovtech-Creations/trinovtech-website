import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ScrollProgress from './components/ScrollProgress.jsx'
import PageLoader from './components/PageLoader.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'
import Home from './pages/Home.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import SolutionsPage from './pages/SolutionsPage.jsx'
import WorkPage from './pages/WorkPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import SolutionDetail from './pages/SolutionDetail.jsx'
import TechDetail from './pages/TechDetail.jsx'
import CaseStudyDetail from './pages/CaseStudyDetail.jsx'
import IndustryDetail from './pages/IndustryDetail.jsx'
import AboutPillarDetail from './pages/AboutPillarDetail.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import { IconDefs } from './components/Icon.jsx'

// On navigation: scroll to the hashed section if present, otherwise to the top.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Wait a frame so the target section is mounted before scrolling.
      requestAnimationFrame(() => {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(true)

  // Show the branded loader on first load and on every page (pathname) change.
  // Hash-only changes (in-page anchors) keep the same pathname, so they don't trigger it.
  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 650)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <div className="app">
      <IconDefs />
      <PageLoader show={loading} />
      <ScrollProgress />
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/technologies/:slug" element={<TechDetail />} />
          <Route path="/work/:slug" element={<CaseStudyDetail />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/about/:slug" element={<AboutPillarDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
