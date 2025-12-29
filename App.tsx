
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000', 'ease-out');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative font-poppins selection:bg-red-200 selection:text-red-900 bg-[#FFFBF5]">
      <Navbar />
      <Hero />
      
      <main>
        <div className="animate-on-scroll">
          <About />
        </div>
        
        <div className="animate-on-scroll">
          <Events />
        </div>
        
        {/* Institutional Partners Section */}
        <Sponsors />

        {/* Gallery Section */}
        <Gallery />
      </main>
      
      <Footer />

      {/* Back to Top Toggle */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 p-4 bg-[#800000] text-white rounded-full shadow-2xl hover:bg-red-900 transition-all hover:scale-110 active:scale-95"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" /></svg>
      </button>
    </div>
  );
}

export default App;
