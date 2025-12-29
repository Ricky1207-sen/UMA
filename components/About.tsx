
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#FFFBF5] to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              {/* Dynamic offset background */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-100 to-saffron/10 rounded-[2rem] rotate-2 transition-all duration-700 group-hover:rotate-0 group-hover:scale-105" />
              
              <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_30px_60px_-15px_rgba(128,0,0,0.15)] aspect-[4/3] bg-gray-100 border-4 border-white">
                <img 
                  src="https://www.utsavmelbourneassociation.org/images/1697623515.JPG" 
                  alt="Community Celebration at Utsav Melbourne" 
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Subtle inner shadow for depth */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block animate-float">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Growing</p>
                    <p className="text-xl font-black text-[#800000]">1000+ Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              <span className="text-red-700 font-black text-[10px] tracking-[0.2em] uppercase">Our Identity</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold text-[#800000] mb-8 leading-[1.15]">
              A Vibrant Community <br />
              <span className="text-saffron italic">Rooted in Excellence</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Utsav Melbourne Association (UMA) is a vibrant Bengali/Indian Not for Profit Community and a registered charity. Originating from the western and north-western suburbs of Melbourne, we bring together like-minded individuals from diverse professional walks of life.
            </p>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
              Our members come from backgrounds in Engineering, Medicine, Banking, IT, and Academics, united by a shared passion for our heritage and a commitment to fostering a strong, connected Bengali community in Australia.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group flex items-start space-x-5 p-6 rounded-2xl bg-[#FFFBF5] border border-transparent transition-all duration-300 hover:border-saffron/20 hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-saffron group-hover:text-white transition-colors duration-300">
                  <svg className="w-7 h-7 text-[#FDB813] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#800000] text-lg mb-1">Registered Charity</h4>
                  <p className="text-sm text-gray-500 leading-snug">Operating with transparency and a focus on community welfare.</p>
                </div>
              </div>
              
              <div className="group flex items-start space-x-5 p-6 rounded-2xl bg-[#FFFBF5] border border-transparent transition-all duration-300 hover:border-red-600/10 hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-7 h-7 text-red-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#800000] text-lg mb-1">Professional Focus</h4>
                  <p className="text-sm text-gray-500 leading-snug">A network of experts dedicated to cultural and social growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
