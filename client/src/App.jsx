import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedBrands from './components/FeaturedBrands';
import Services from './components/Services';
import DisassemblyCanvas from './components/DisassemblyCanvas';
import RepairTimeline from './components/RepairTimeline';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import StoreLocation from './components/StoreLocation';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FAQPage from './pages/FAQPage';
import TermsPage from './pages/TermsPage';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#/faq') return 'faq';
    if (hash === '#/terms') return 'terms';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/faq') {
        setCurrentPage('faq');
        window.scrollTo(0, 0);
      } else if (hash === '#/terms') {
        setCurrentPage('terms');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
        // Scroll to hash element if applicable
        if (hash && !hash.startsWith('#/')) {
          const id = hash.substring(1);
          const element = document.getElementById(id);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 150); // Small buffer to ensure home page elements are mounted
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initialize check on mount
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {/* Dynamic Header */}
      <Navbar currentPage={currentPage} />

      {/* Main Home Page Sections */}
      {currentPage === 'home' && (
        <>
          {/* Hero Presentation */}
          <Hero />

          {/* Infinite Brands Marquee */}
          <FeaturedBrands />

          {/* Services Grid */}
          <Services />

          {/* Cinematic Frame Scrubbing Teardown */}
          <DisassemblyCanvas />

          {/* Stepper Timeline */}
          <RepairTimeline />

          {/* Neumorphic Counters */}
          <WhyChooseUs />

          {/* Testimonials Marquee */}
          {/* <Testimonials /> */}

          {/* Location Details and Google Map */}
          <StoreLocation />

          {/* Contact Forms & WhatsApp Actions */}
          <ContactForm />
        </>
      )}

      {/* Standalone FAQ Page */}
      {currentPage === 'faq' && <FAQPage />}

      {/* Standalone Terms Page */}
      {currentPage === 'terms' && <TermsPage />}

      {/* Wave Footer */}
      <Footer currentPage={currentPage} />
    </>
  );
}

