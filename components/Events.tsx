import React from 'react';

const FEATURED_EVENT = {
  id: '2',
  title: 'Durga Puja – Saptami to Dashami',
  date: 'Oct 09 - Oct 12, 2025',
  location: 'Fraser Rise, Melbourne',
  description: 'Experience the Divine Radiance. The biggest celebration of the year with traditional rituals, sacred bhog, and vibrant dhunuchi naach. Join us in welcoming Maa Durga to our community home.',
  category: 'FEATURED CELEBRATION',
  image: 'https://i.pinimg.com/736x/16/df/fd/16dffd060025d04d8b6e238df33d1659.jpg'
};

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-100/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-50 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
            <span className="text-red-700 font-bold text-[10px] tracking-[0.3em] uppercase">Upcoming</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold text-[#800000] mb-6 tracking-tight">
            Our Cultural <span className="italic font-light text-red-600">Highlights</span>
          </h2>
          <div className="w-16 h-1 bg-[#800000]/10 mx-auto rounded-full" />
        </div>

        {/* Horizontal Feature Card */}
        <div className="max-w-6xl mx-auto">
          <div className="group bg-[#FFFDF8] rounded-[3rem] overflow-hidden border border-black/[0.03] shadow-[0_30px_70px_-20px_rgba(93,14,14,0.08)] transition-all duration-700 hover:shadow-[0_40px_90px_-25px_rgba(93,14,14,0.12)] hover:-translate-y-1 flex flex-col lg:flex-row min-h-[500px]">
            
            {/* Visual Zone (Left) */}
            <div className="lg:w-[58%] relative overflow-hidden">
              <img 
                src={FEATURED_EVENT.image} 
                alt={FEATURED_EVENT.title} 
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/20 via-transparent to-transparent opacity-60" />
              
              {/* Soft pattern overlay */}
              <div 
                className="absolute inset-0 opacity-[0.04] pointer-events-none" 
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z' fill='%23800000' /%3E%3C/svg%3E")`,
                  backgroundSize: '80px 80px'
                }} 
              />
            </div>
            
            {/* Content Zone (Right) */}
            <div className="lg:w-[42%] p-8 md:p-12 lg:p-14 flex flex-col justify-center relative">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-red-600/5 text-red-700 font-bold text-[10px] tracking-[0.25em] uppercase rounded-full mb-6">
                  {FEATURED_EVENT.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-montserrat font-extrabold text-[#800000] mb-6 leading-tight">
                  {FEATURED_EVENT.title}
                </h3>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-[#800000]/70 font-bold text-xs uppercase tracking-widest">
                    <svg className="w-4 h-4 mr-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {FEATURED_EVENT.date}
                  </div>
                  <div className="flex items-center text-[#800000]/70 font-bold text-xs uppercase tracking-widest">
                    <svg className="w-4 h-4 mr-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {FEATURED_EVENT.location}
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 font-medium opacity-80">
                  {FEATURED_EVENT.description}
                </p>
                
                <button className="group/btn relative overflow-hidden inline-flex items-center px-10 py-4 bg-[#800000] text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-red-900 shadow-lg hover:shadow-red-900/20 active:scale-95">
                  <span className="relative z-10">Event Details</span>
                  <svg 
                    className="w-4 h-4 ml-3 transition-transform duration-300 group-hover/btn:translate-x-1.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              {/* Decorative corner mandala */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 text-[#800000]/5 pointer-events-none rotate-45">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;