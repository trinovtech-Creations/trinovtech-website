import { useCallback, useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { WarpContext } from './warp.js'
import ScrollProgress from './components/ScrollProgress.jsx'
import PageLoader from './components/PageLoader.jsx'
import SEO from './components/SEO.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'
import Home from './pages/Home.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import SolutionsPage from './pages/SolutionsPage.jsx'
import WorkPage from './pages/WorkPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import WhyDetail from './pages/WhyDetail.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import FeatureDetail from './pages/FeatureDetail.jsx'
import SolutionDetail from './pages/SolutionDetail.jsx'
import TechDetail from './pages/TechDetail.jsx'
import CaseStudyDetail from './pages/CaseStudyDetail.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import ProcessDetail from './pages/ProcessDetail.jsx'
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
  // App-level page-transition overlay: a transparent pixel zoom that plays
  // over the destination page (so the next screen shows through it).
  const [warp, setWarp] = useState(false)
  const startWarp = useCallback(() => {
    setWarp(false)
    requestAnimationFrame(() => setWarp(true))
  }, [])

  // Show the branded loader on first load and on every page (pathname) change.
  // Hash-only changes (in-page anchors) keep the same pathname, so they don't trigger it.
  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 650)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <WarpContext.Provider value={startWarp}>
    <div className="app">
      {warp && <div className="warp" aria-hidden="true" onAnimationEnd={() => setWarp(false)} />}
      <IconDefs />
      <SEO />
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
          <Route path="/why-choose-us/:slug" element={<WhyDetail />} />
          <Route path="/how-we-work/:slug" element={<ProcessDetail />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/services/:slug/:feature" element={<FeatureDetail />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/technologies/:slug" element={<TechDetail />} />
          <Route path="/work/:slug" element={<CaseStudyDetail />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
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
    </WarpContext.Provider>
  )
}
