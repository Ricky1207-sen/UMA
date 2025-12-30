import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className={`fixed top-0 left-0 w-full z-[100] flex justify-center px-4 transition-all duration-500 pointer-events-none ${isScrolled ? 'pt-2' : 'pt-6'}`}>
      <div className="relative w-full max-w-7xl pointer-events-auto">
        
        {/* THE PILL CONTAINER: Updated to be fully opaque */}
        <nav 
          className={`relative z-20 w-full rounded-full transition-all duration-500 ease-in-out overflow-hidden flex items-center justify-between px-6 md:px-10 ${
            isScrolled 
              ? 'shadow-[0_15px_40px_rgba(0,0,0,0.18)] py-2' 
              : 'shadow-[0_8px_25px_rgba(0,0,0,0.1)] py-4'
          }`}
        >
          {/* Background Layer inside the pill: Full Opaque Saffron/Gold palette */}
          <div className="absolute inset-0 z-0">
            {/* Removed the translucency (90-95% opacity) to make it fully opaque */}
            <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-r from-[#FDB813] via-[#FF9933] to-[#FDB813]`} />
            
            {/* Pattern Layer: Maintained for cultural texture */}
            <div 
              className="absolute inset-0 opacity-[0.07] pointer-events-none" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L35 25 L60 30 L35 35 L30 60 L25 35 L0 30 L25 25 Z' fill='%23800000' fill-opacity='1'/%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px'
              }} 
            />
            
            {/* Subtle gloss overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
            
            {/* Defining border */}
            <div className="absolute inset-0 border border-white/30 rounded-full" />
          </div>

          {/* Logo & Brand */}
          <div className="relative z-10 flex items-center space-x-3 cursor-pointer group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center p-0.5 border-2 border-red-600/30 transition-transform group-hover:scale-110 shadow-md">
              <img 
                src="https://www.utsavmelbourneassociation.org/images/home-logo.jpg" 
                alt="UMA Logo" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-lg font-montserrat font-extrabold text-[#800000] tracking-tight leading-none uppercase">
                Utsav Melbourne Association
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 relative z-10">
            <div className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-[#800000] font-bold text-xs uppercase tracking-[0.15em] group transition-all"
                >
                  {link.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-red-700/80 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-[#800000] focus:outline-none transition-transform hover:scale-110 relative z-20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </nav>

        {/* MOBILE DROPDOWN */}
        <div 
          className={`lg:hidden absolute top-[70%] left-0 w-full transition-all duration-300 ease-out origin-top z-10 ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-4 pointer-events-auto' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="mx-2 shadow-2xl rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#FDB813] to-[#FF9933]" />
            <div 
              className="absolute inset-0 opacity-[0.06] pointer-events-none" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L35 25 L60 30 L35 35 L30 60 L25 35 L0 30 L25 25 Z' fill='%23800000' fill-opacity='1'/%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px'
              }} 
            />
            
            <div className="relative z-10 flex flex-col p-8 pt-10 space-y-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#800000] font-black text-xl uppercase tracking-widest border-b border-[#800000]/10 pb-3 transition-colors hover:text-red-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;