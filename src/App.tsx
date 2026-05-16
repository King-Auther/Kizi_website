import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import BrandRecog from './sections/BrandRecog';
import LeadershipSection from './sections/LeadershipSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import Contact from './pages/Contact';

const InvestorPortal = lazy(() => import('./pages/InvestorPortal'));

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BrandRecog />
      <LeadershipSection />
      <ContactSection />
    </>
  );
};

const PageLoader = () => (
  <div className="min-h-[40vh] flex items-center justify-center text-gray-600">Loading…</div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/investor-portal" element={<InvestorPortal />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
