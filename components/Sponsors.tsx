
import React, { useEffect, useRef, useState } from 'react';

const SPONSORS = [
  {
    id: 'gov-1',
    name: 'Victorian Multicultural Commission',
    logo: 'https://www.utsavmelbourneassociation.org/images/1600757098.jpg',
  },
  {
    id: 'comm-1',
    name: 'Community Supporter One',
    logo: 'https://www.utsavmelbourneassociation.org/images/1609859198.jpg',
  },
  {
    id: 'comm-2',
    name: 'Community Supporter Two',
    logo: 'https://www.utsavmelbourneassociation.org/images/1629540928.png',
  },
  {
    id: 'comm-3',
    name: 'Community Supporter Three',
    logo: 'https://www.utsavmelbourneassociation.org/images/1602673011.jpg',
  }
];

const Sponsors: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-[#FAF9F6] relative overflow-hidden border-t border-black/5"
    >
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header - Highly Compacted */}
        <div className={`text-center mb-10 max-w-xl mx-auto transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-gray-400 font-bold text-[9px] uppercase tracking-[0.4em] mb-2 block">
            Institutional Support
          </span>
          <h2 className="text-2xl md:text-3xl font-montserrat font-extrabold text-[#800000] mb-2">
            Our Proud Supporters
          </h2>
          <div className="h-0.5 w-8 bg-saffron/40 mx-auto rounded-full" />
        </div>

        {/* Logo Grid - Optimized for "Filled" Logo Appearance */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SPONSORS.map((sponsor, i) => (
            <div 
              key={sponsor.id}
              className={`group bg-white rounded-2xl h-28 md:h-32 flex items-center justify-center p-4 md:p-6 border border-black/5 shadow-sm transition-all duration-500 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } hover:shadow-xl hover:border-saffron/20 hover:scale-[1.05] hover:z-10`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="max-h-16 md:max-h-20 w-auto max-w-full object-contain filter transition-all duration-500 group-hover:brightness-105"
                  loading="lazy"
                />
              </div>
              
              {/* Soft Inner Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-saffron/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Minimal Bottom Line */}
        <div className="mt-12 text-center">
          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em] opacity-60">
            A Registered Charity & Non-Profit Organization
          </p>
        </div>
      </div>
      
      {/* Subtle bottom fade transition */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
    </section>
  );
};

export default Sponsors;
