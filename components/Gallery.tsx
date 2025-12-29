
import React, { useEffect, useRef, useState, useCallback } from 'react';

const GALLERY_IMAGES = [
  {
    url: 'https://www.utsavmelbourneassociation.org/images/1697627464.JPG',
    caption: 'Divine Grace',
    category: 'The Idol'
  },
  {
    url: 'https://www.utsavmelbourneassociation.org/images/1697625219.JPG',
    caption: 'Evening Aarti',
    category: 'Rituals'
  },
  {
    url: 'https://www.utsavmelbourneassociation.org/images/1600874045.jpg',
    caption: 'Traditions Preserved',
    category: 'Culture'
  },
  {
    url: 'https://www.utsavmelbourneassociation.org/images/1600874100.jpg',
    caption: 'Community Gathering',
    category: 'Unity'
  },
  {
    url: 'https://www.utsavmelbourneassociation.org/images/1600874182.jpg',
    caption: 'Sacred Rituals',
    category: 'Devotion'
  },
  {
    url: 'https://www.utsavmelbourneassociation.org/images/1697626699.JPG',
    caption: 'Festive Joy',
    category: 'Celebration'
  }
];

// Double images for seamless loop
const INFINITE_IMAGES = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const manualPauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Wrap Logic: When user or auto-scroll reaches midpoint, jump back instantly
  const handleScrollWrap = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth } = el;
    const halfWidth = scrollWidth / 2;

    // If we've scrolled past the first set, jump back to identical position in first set
    if (scrollLeft >= halfWidth) {
      el.scrollTo({ left: scrollLeft - halfWidth, behavior: 'auto' });
    } else if (scrollLeft <= 0) {
      // If we scroll backward (manual) past start, jump to second set
      el.scrollTo({ left: halfWidth, behavior: 'auto' });
    }
  }, []);

  const triggerScroll = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    const { clientWidth } = el;
    const scrollAmount = clientWidth * 0.45; // Amount to move per slide
    
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }, []);

  // Autoplay Effect
  useEffect(() => {
    if (!isPaused) {
      autoplayTimerRef.current = setInterval(() => {
        triggerScroll('right');
      }, 4500); // Sliding every 4.5 seconds
    }
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isPaused, triggerScroll]);

  // Scroll listener for wrapping
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScrollWrap, { passive: true });
    }
    return () => el?.removeEventListener('scroll', handleScrollWrap);
  }, [handleScrollWrap]);

  const handleManualAction = (direction: 'left' | 'right') => {
    // Clear any existing manual resume timers
    if (manualPauseTimerRef.current) clearTimeout(manualPauseTimerRef.current);
    
    setIsPaused(true);
    triggerScroll(direction);

    // Resume autoplay after 10 seconds of no interaction
    manualPauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FFFBF5] relative overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Gallery Header */}
        <div className="px-6 md:px-16 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="h-[1px] w-8 bg-red-700/30"></span>
              <span className="text-red-700 font-bold text-[10px] uppercase tracking-[0.5em]">
                Infinite Exhibition
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-montserrat font-extrabold text-[#800000] tracking-tight leading-[1.1]">
              A Journey of <br />
              <span className="italic font-light text-red-600/80">Eternal Traditions</span>
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => handleManualAction('left')}
              className="w-14 h-14 rounded-full border border-[#800000]/10 flex items-center justify-center bg-white shadow-sm hover:bg-[#800000] hover:text-white transition-all duration-500 hover:scale-110 active:scale-95"
              aria-label="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => handleManualAction('right')}
              className="w-14 h-14 rounded-full border border-[#800000]/10 flex items-center justify-center bg-white shadow-sm hover:bg-[#800000] hover:text-white transition-all duration-500 hover:scale-110 active:scale-95"
              aria-label="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* The Sliding Canvas */}
        <div 
          className="group/slider relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollRef}
            className="flex space-x-4 md:space-x-10 overflow-x-auto scrollbar-hide pb-12 cursor-grab active:cursor-grabbing md:px-16"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch' 
            }}
          >
            {INFINITE_IMAGES.map((img, i) => (
              <div 
                key={`${img.caption}-${i}`} 
                className="flex-shrink-0 w-[85vw] md:w-[48vw] lg:w-[42vw] group/card relative"
              >
                <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-[2rem] bg-gray-100 border border-black/[0.03] transition-all duration-700 ease-in-out shadow-sm group-hover/card:shadow-[0_40px_80px_-20px_rgba(128,0,0,0.25)] group-hover/card:border-red-600/10">
                  <img 
                    src={img.url} 
                    alt={img.caption} 
                    className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover/card:scale-[1.1]"
                    loading="lazy"
                  />
                  
                  {/* Premium Interactive Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/90 via-black/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 pointer-events-none">
                    <div className="transform translate-y-8 group-hover/card:translate-y-0 transition-transform duration-700 ease-out">
                      <span className="text-saffron font-bold text-[10px] uppercase tracking-[0.6em] mb-3 block">
                        {img.category}
                      </span>
                      <h4 className="text-white font-montserrat font-bold text-2xl md:text-3xl mb-4 leading-tight">
                        {img.caption}
                      </h4>
                      <div className="h-[1.5px] w-16 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Autoplay Pulse Indicator */}
          <div className="flex justify-center mt-4">
            <div className={`flex space-x-2 transition-opacity duration-500 ${isPaused ? 'opacity-20' : 'opacity-100'}`}>
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 h-1 rounded-full bg-[#800000] animate-pulse" 
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        #gallery:focus {
          outline: none;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
