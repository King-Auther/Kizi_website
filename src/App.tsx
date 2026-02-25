import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import BrandRecog from './sections/BrandRecog';
import LeadershipSection from './sections/LeadershipSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import InvestorPortal from './pages/InvestorPortal';
import Contact from './pages/Contact';

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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investor-portal" element={<InvestorPortal />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;