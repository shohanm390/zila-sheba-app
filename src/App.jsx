import React from 'react';
import GlowBackground from './components/GlowBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Services from './components/Services';
import Security from './components/Security';
import EmergencyCTA from './components/EmergencyCTA';
import AppDownload from './components/AppDownload';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PlatformFeatures from './components/PlatformFeatures';

function App() {
  return (
    <div className="antialiased selection:bg-primary selection:text-white">
      <GlowBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <PlatformFeatures/>
        <Features />
        <Services />
        <Security />
        <EmergencyCTA />
        <AppDownload />
        <Partners />
        <Testimonials />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;