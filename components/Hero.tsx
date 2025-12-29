import React, { useEffect, useState } from 'react';
import { MandalaIcon } from '../constants';

const HangingDiya: React.FC<{ className?: string; delay?: string; height?: string }> = ({ className, delay = '0s', height = '150px' }) => (
  <div 
    className={`absolute pointer-events-none flex flex-col items-center ${className}`}
    style={{ 
      animation: `subtle-sway 8s ease-in-out infinite alternate`,
      animationDelay: delay,
      top: 0
    }}
  >
    {/* Hanging String */}
    <div 
      className="w-[1px] bg-black/10" 
      style={{ height }}
    />
    
    {/* Diya SVG Container */}
    <div className="relative -mt-1 flex flex-col items-center">
      
      {/* Outer Radiance - Intense Reddish Glow */}
      <div 
        className="absolute -top-12 w-24 h-24 bg-red-600/60 blur-3xl rounded-full"
        style={{ 
          animation: `pulse-glow-outer 4s ease-in-out infinite`,
          animationDelay: delay 
        }}
      />
      
      {/* Inner Core Glow - Vibrant Red Heat */}
      <div 
        className="absolute -top-8 w-12 h-12 bg-red-500/90 blur-xl rounded-full"
        style={{ 
          animation: `pulse-glow-inner 3s ease-in-out infinite`,
          animationDelay: delay 
        }}
      />
      
      <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
        {/* Flame - Changed to Reddish Heat */}
        <path 
          d="M16 8C16 8 12 4 16 0C20 4 16 8 16 8Z" 
          fill="#FF3D3D"
          style={{ 
            animation: `pulse-glow-inner 3s ease-in-out infinite`,
            animationDelay: delay,
            transformOrigin: 'bottom',
            filter: 'drop-shadow(0 0 2px #FF0000)'
          }}
        />
        {/* Bowl */}
        <path d="M4 10C4 16.6274 9.37258 22 16 22C22.6274 22 28 16.6274 28 10H4Z" fill="#800000" />
        <path d="M4 10C4 12 9.37258 14 16 14C22.6274 14 28 12 28 10H4Z" fill="#A52A2A" opacity="0.5" />
      </svg>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pt-32 lg:pt-20">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#FDB813] via-[#FF9933] to-white/30" />
      
      {/* Pattern Layer */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none alpana-bg" />
      
      {/* Hanging Diyas Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <HangingDiya className="left-[5%] hidden lg:flex" height="120px" delay="0s" />
        <HangingDiya className="left-[15%] hidden xl:flex" height="180px" delay="1.2s" />
        <HangingDiya className="right-[5%] hidden lg:flex" height="140px" delay="0.5s" />
        <HangingDiya className="right-[12%] hidden lg:flex" height="220px" delay="1.8s" />
        <HangingDiya className="right-[25%] hidden xl:flex" height="100px" delay="2.5s" />
        <HangingDiya className="left-[10%] lg:hidden" height="80px" delay="0.8s" />
        <HangingDiya className="right-[10%] lg:hidden" height="110px" delay="1.5s" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col lg:flex-row items-center justify-between z-10 py-8 lg:py-0">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 transform transition-all duration-1000 translate-y-0 opacity-100 mt-8 lg:mt-0">
          <div className="inline-block px-4 py-1 mb-4 lg:mb-6 rounded-full bg-red-600/10 text-red-700 font-bold text-xs uppercase tracking-widest border border-red-600/20">
            Tradition meets Modernity
          </div>
          <h1 className="text-5xl md:text-7xl font-montserrat font-black text-[#800000] leading-tight mb-6">
            Utsav <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              Melbourne
            </span> <br />
            Association
          </h1>
          <p className="text-lg md:text-2xl text-gray-800 font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed opacity-90">
            Celebrating Durga Puja, Bengali Culture & Vibrant Community in the Heart of Melbourne.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#events" 
              className="group relative overflow-hidden w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(226,61,40,0.4)] flex items-center justify-center"
            >
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
              <span className="relative z-10">Explore Events</span>
              <svg className="relative z-10 w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a 
              href="#gallery" 
              className="group relative overflow-hidden w-full sm:w-auto px-10 py-4 bg-white/20 backdrop-blur-md border-2 border-white/60 text-[#800000] rounded-2xl font-bold text-lg transition-all duration-500 hover:bg-white/40 hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-white/20 to-transparent" />
              <span className="relative z-10">View Gallery</span>
              <div className="relative z-10 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Artistic Hero Image */}
        <div className="w-full lg:w-1/2 relative h-[500px] md:h-[650px] lg:h-[800px] flex items-center justify-center p-4">
          <MandalaIcon 
            className="absolute w-[120%] h-[120%] text-white/40 animate-spin-slow pointer-events-none" 
            style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
          />
          
          <div 
            className="relative w-[85%] h-[85%] z-10 transition-transform duration-300"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            <div className="w-full h-full overflow-hidden shadow-2xl rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-4 border-white/50 relative">
              <img 
                src="https://www.utsavmelbourneassociation.org/banner_image/21762774569.jpg" 
                alt="Maa Durga Utsav Melbourne" 
                className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-1000 grayscale-[0.1] hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-saffron/30 to-transparent pointer-events-none" />
            </div>

            <div className="absolute top-4 right-4 w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl animate-bounce z-20">
              <div className="text-center">
                <span className="block text-[10px] md:text-xs font-bold uppercase">Puja</span>
                <span className="block text-lg md:text-xl font-black">2025</span>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-4 bg-white p-4 rounded-2xl shadow-2xl hidden md:flex items-center space-x-4 max-w-[200px] z-20">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" /></svg>
              </div>
              <span className="text-xs font-bold text-gray-700">Experience the Joy of Utsav</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-12 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58,112.55,123.67,112.18,181.39,94.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        @keyframes pulse-glow-inner {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes pulse-glow-outer {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 0.8; transform: scale(1.4); }
        }
        @keyframes subtle-sway {
          0% { transform: rotate(-1.5deg) translateX(-2px); }
          100% { transform: rotate(1.5deg) translateX(2px); }
        }
        .group:hover .group-hover\\:animate-shine {
          animation: shine 0.8s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;