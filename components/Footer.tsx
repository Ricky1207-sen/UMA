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
  {
    name: 'WhatsApp',
    href: '#',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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

  const alpanaPattern = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z' fill='%23800000' fill-opacity='0.03'/%3E%3C/svg%3E")`;

  return (
    <footer 
      id="contact" 
      ref={footerRef}
      className="relative bg-gradient-to-b from-[#FFF9E7] via-[#FDB813] to-[#E67E22] pt-24 pb-12 overflow-hidden selection:bg-[#800000]/10 selection:text-[#800000]"
    >
      {/* Visual Depth Layers */}
      <div 
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{ 
          backgroundImage: alpanaPattern,
          backgroundSize: '150px 150px'
        }} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#B45309]/10 to-transparent pointer-events-none" />
      
      {/* Ceremonial Mandala Overlays */}
      <MandalaIcon className="absolute -top-32 -left-32 w-[45rem] h-[45rem] text-[#800000]/5 pointer-events-none" />
      <MandalaIcon className="absolute -bottom-48 -right-48 w-[55rem] h-[55rem] text-[#800000]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          
          {/* Card 1: UTSAV MELBOURNE ASSOCIATION */}
          <div 
            className={`bg-white/20 backdrop-blur-sm rounded-[2.5rem] p-8 border border-amber-900/5 shadow-[0_20px_50px_rgba(93,14,14,0.12)] transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-white/60 rounded-full p-1 border border-amber-900/10 shadow-sm flex items-center justify-center">
                <img 
                  src="https://www.utsavmelbourneassociation.org/images/home-logo.jpg" 
                  alt="Logo" 
                  className="w-full h-full object-contain rounded-full opacity-90"
                />
              </div>
              <h4 className="text-sm font-montserrat font-black text-[#5D0E0E] tracking-[0.05em] uppercase leading-tight">
                UTSAV MELBOURNE <br /> ASSOCIATION
              </h4>
            </div>
            <p className="text-[#78350F] leading-relaxed text-sm mb-10 font-medium">
              Utsav Melbourne Association (UMA) is a registered not-for-profit Bengali-Indian community and charity based in Melbourne, dedicated to celebrating our rich heritage and fostering strong community connections through cultural events and social initiatives.
            </p>
            <div className="flex space-x-3">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/40 text-[#5D0E0E] rounded-full flex items-center justify-center hover:bg-[#5D0E0E] hover:text-white transition-all duration-300 shadow-sm"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Card 2: QUICK LINK */}
          <div 
            className={`bg-white/15 backdrop-blur-sm rounded-[2.5rem] p-8 border border-amber-900/5 shadow-[0_20px_50px_rgba(93,14,14,0.12)] transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <h4 className="text-sm font-montserrat font-black mb-8 text-[#5D0E0E] tracking-[0.25em] uppercase opacity-80 border-b border-[#5D0E0E]/10 pb-2">QUICK LINK</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Events', href: '#events' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact Us', href: '#contact', special: true }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={`text-[#78350F] hover:text-[#5D0E0E] flex items-center text-sm font-semibold transition-all group ${link.special ? 'text-[#5D0E0E]' : ''}`}>
                    <span className={`w-1.5 h-1.5 rounded-full mr-3 group-hover:bg-[#5D0E0E] transition-colors ${link.special ? 'bg-[#5D0E0E]' : 'bg-[#5D0E0E]/20'}`} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: SUPPORT */}
          <div 
            className={`bg-white/15 backdrop-blur-sm rounded-[2.5rem] p-8 border border-amber-900/5 shadow-[0_20px_50px_rgba(93,14,14,0.12)] transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <h4 className="text-sm font-montserrat font-black mb-8 text-[#5D0E0E] tracking-[0.25em] uppercase opacity-80 border-b border-[#5D0E0E]/10 pb-2">SUPPORT</h4>
            <ul className="space-y-4">
              {['FAQ', 'Privacy Policy', 'Terms & Conditions', 'Disclaimer'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#78350F] hover:text-[#5D0E0E] flex items-center text-sm font-semibold transition-all group">
                    <span className="w-1.5 h-1.5 bg-[#5D0E0E]/20 rounded-full mr-3 group-hover:bg-[#5D0E0E] transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* STANDALONE MAP SECTION */}
          <div 
            className={`relative transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-amber-900/10 shadow-[0_20px_50px_rgba(93,14,14,0.15)] bg-white/10 group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.417244917036!2d144.7176211!3d-37.7111003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad68d7e974916a9%3A0xc619f5a044b70956!2s58%20Mount%20Way%2C%20Fraser%20Rise%20VIC%203336!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '260px', filter: 'sepia(0.2) contrast(0.9) brightness(1.05)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md py-2 px-4 rounded-xl text-[10px] text-[#5D0E0E] font-bold uppercase tracking-widest text-center shadow-sm pointer-events-none border border-amber-900/5">
                58 Mount Way, Fraser Rise, VIC
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 border-t border-amber-900/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[#5D0E0E]/60 text-[10px] font-bold uppercase tracking-[0.3em]">
          <p>© 2025 Utsav Melbourne Association. All Rights Reserved.</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-[#5D0E0E] transition-colors underline decoration-[#5D0E0E]/20 underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:text-[#5D0E0E] transition-colors underline decoration-[#5D0E0E]/20 underline-offset-4">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;