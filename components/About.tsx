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
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              <span className="text-red-700 font-black text-[10px] tracking-[0.2em] uppercase">Our Identity</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-montserrat font-extrabold text-[#800000] mb-8 leading-[1.15]">
              About <span className="text-saffron italic">us</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Utsav Melbourne Association (UMA) is a vibrant Bengali/Indian Not for Profit Community and a registered charity. Originating from the western and north-western suburbs of Melbourne, we bring together like-minded individuals from diverse professional walks of life.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Our members come from backgrounds in Engineering, Medicine, Banking, IT, and Academics, united by a shared passion for our heritage and a commitment to fostering a strong, connected Bengali community in Australia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;