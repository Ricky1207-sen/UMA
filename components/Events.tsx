
import React from 'react';
import { EventItem } from '../types';

const MOCK_EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Mahalaya Celebration',
    date: 'Oct 01, 2025',
    description: 'Awakening of the Goddess with Mahishasura Mardini recital and community songs.',
    category: 'Cultural',
    image: 'https://thumbs.dreamstime.com/b/happy-mahalaya-easy-to-edit-vector-illustrationface-goddess-durga-message-33916041.jpg?w=992',
    imagePosition: 'top'
  },
  {
    id: '2',
    title: 'Durga Puja - Saptami to Dashami',
    date: 'Oct 09 - Oct 12, 2025',
    description: 'Experience the Divine Radiance. The biggest celebration of the year with rituals, bhog, and vibrant dhunuchi naach.',
    category: 'Puja',
    image: 'https://www.hindustantimes.com/ht-img/img/2024/10/05/550x309/navratri_2024_maa_durga_weapons_1728109547675_1728109547940.png'
  },
  {
    id: '3',
    title: 'Utsav Cultural Night',
    date: 'Nov 15, 2025',
    description: 'An evening showcasing local talent in music, dance, and drama from across Melbourne.',
    category: 'Community',
    image: 'https://www.utsavmelbourneassociation.org/images/1600922761.jpg',
    imagePosition: 'top'
  }
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative light effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-200/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-100/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-100/50 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
            <span className="text-red-700 font-bold text-[10px] tracking-[0.3em] uppercase">The Festive Calendar</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-montserrat font-extrabold text-[#800000] mb-6 tracking-tight">
            Upcoming <span className="italic font-light text-red-600">Celebrations</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-saffron to-yellow-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MOCK_EVENTS.map((event) => (
            <div 
              key={event.id} 
              className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_-20px_rgba(128,0,0,0.2)] transition-all duration-500 transform hover:-translate-y-3 border border-black/[0.03]"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  style={{ objectPosition: event.imagePosition || 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur shadow-xl px-4 py-1.5 rounded-full">
                  <span className="text-[10px] font-black text-[#800000] uppercase tracking-widest">
                    {event.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 md:p-10 relative">
                <div className="flex items-center text-red-600 font-bold text-xs mb-4 tracking-wider uppercase">
                  <div className="w-8 h-[1px] bg-red-600/30 mr-3" />
                  {event.date}
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-[#800000] mb-4 leading-tight group-hover:text-red-700 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-500 mb-8 line-clamp-2 text-sm leading-relaxed font-medium">
                  {event.description}
                </p>
                
                <button className="relative overflow-hidden w-full py-4 border-2 border-[#800000]/10 rounded-2xl text-[#800000] font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#800000] hover:text-white hover:border-[#800000] group/btn">
                  <span className="relative z-10 flex items-center justify-center">
                    Event Details
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="group relative px-16 py-5 bg-white border-2 border-[#800000] text-[#800000] font-black text-sm uppercase tracking-[0.3em] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(128,0,0,0.15)]">
            <div className="absolute inset-0 w-0 bg-[#800000] transition-all duration-300 group-hover:w-full" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Full Cultural Calendar
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
