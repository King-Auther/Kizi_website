import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import PerformanceSection from './sections/PerformanceSection';
import OpportunitiesSection from './sections/OpportunitiesSection';
import LeadershipSection from './sections/LeadershipSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import InvestorPortal from './pages/InvestorPortal';

function App() {
  const [showPortal, setShowPortal] = React.useState(false);

  useEffect(() => {
    // Update page title
    document.title = 'Kizi Apparels - Investor Relations';
    
    // Check if we should show the portal
    const hash = window.location.hash;
    setShowPortal(hash === '#investor-portal');

    // Listen for hash changes
    const handleHashChange = () => {
      setShowPortal(window.location.hash === '#investor-portal');
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (showPortal) {
    return <InvestorPortal />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <PerformanceSection />
      <OpportunitiesSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;