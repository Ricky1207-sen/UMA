
import React, { useEffect, useRef, useState } from 'react';
import { MandalaIcon } from '../constants';

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/utsavmelbourneassociation/',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCYi56gQdmmkLHPSg6N5JjXQ/featured',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  // Geometric Star Pattern SVG from User Reference
  const starPattern = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 C42 30 50 38 80 40 C50 42 42 50 40 80 C38 50 30 42 0 40 C30 38 38 30 40 0' fill='%23ffffff' fill-opacity='0.15'/%3E%3C/svg%3E")`;

  return (
    <footer 
      id="contact" 
      ref={footerRef}
      className="relative bg-gradient-to-b from-[#FDB813] via-[#E23D28] to-[#800000] text-white pt-24 pb-12 overflow-hidden"
    >
      {/* Faded Geometric Star Background Layer */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: starPattern,
          backgroundSize: '120px 120px'
        }} 
      />
      
      {/* Mandala accent overlays */}
      <MandalaIcon className="absolute -top-20 -left-20 w-[40rem] h-[40rem] text-white/10 opacity-15 pointer-events-none" />
      <MandalaIcon className="absolute -bottom-40 -right-40 w-[50rem] h-[50rem] text-white/10 opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          {/* Brand Card */}
          <div 
            className={`bg-white/15 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/20 shadow-xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 bg-white rounded-full p-1 border-2 border-[#800000]/20 shadow-sm">
                <img 
                  src="https://www.utsavmelbourneassociation.org/images/home-logo.jpg" 
                  alt="Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <h4 className="text-xl font-montserrat font-extrabold uppercase tracking-tighter leading-tight text-[#800000]">
                Utsav <br /> Melbourne
              </h4>
            </div>
            <p className="text-white leading-relaxed text-sm mb-10 font-medium opacity-90">
              A vibrant Bengali Not for Profit Community and registered charity, fostering cultural heritage and community connection in Melbourne.
            </p>
            <div className="flex space-x-3">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 text-[#800000] rounded-full flex items-center justify-center hover:bg-[#800000] hover:text-white transition-all duration-300 hover:scale-110 group"
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="transform transition-transform duration-300 group-hover:rotate-6">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Card */}
          <div 
            className={`bg-white/10 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/20 shadow-xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <h4 className="text-sm font-montserrat font-black mb-8 text-[#800000] tracking-[0.3em] uppercase opacity-80">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Cultural Calendar', 'Media Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="text-white hover:text-white group flex items-center text-sm font-semibold transition-colors opacity-80 hover:opacity-100">
                    <span className="w-1.5 h-1.5 bg-[#800000] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="border-b border-transparent group-hover:border-white/40 pb-0.5">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div 
            className={`bg-white/10 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/20 shadow-xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <h4 className="text-sm font-montserrat font-black mb-8 text-[#800000] tracking-[0.3em] uppercase opacity-80">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-[#800000] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span className="text-sm font-medium text-white leading-tight opacity-90">Melbourne, Victoria <br /> Australia</span>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-[#800000] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <a href="mailto:utsavmelbourneassociation@gmail.com" className="text-sm font-medium text-white break-all hover:text-white transition-colors opacity-90 hover:opacity-100">
                  utsav@melbourne.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Card */}
          <div 
            className={`bg-white/20 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/30 shadow-xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <h4 className="text-sm font-montserrat font-black mb-6 text-[#800000] tracking-[0.3em] uppercase opacity-80">Newsletter</h4>
            <p className="text-white text-xs font-semibold mb-8 leading-relaxed opacity-90">Stay updated on our vibrant festivals and community meetups.</p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-5 py-3 bg-white/20 border border-white/20 rounded-2xl text-sm placeholder:text-white/60 focus:outline-none transition-all text-white font-medium"
              />
              <button className="w-full py-3 bg-[#800000] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-red-900 transition-all active:scale-[0.98] shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/50 text-[9px] font-bold uppercase tracking-[0.4em]">
          <p>© 2025 Utsav Melbourne Association. All Rights Reserved.</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
