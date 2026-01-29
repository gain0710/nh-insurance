import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-9 gap-[20px]">
      {/* Main Banner - Spans 6 columns */}
      <div className="lg:col-span-6 relative overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-10 text-white h-[400px] flex flex-col justify-start pt-12 shadow-lg group">
        <h2 className="text-3xl font-bold mb-4 leading-tight relative z-10">
          해외여행보험 보험료,<br />기존 대비 최대 20% 인하
        </h2>
        <p className="text-blue-100 text-base relative z-10">여행만 다녀와도 10% NH포인트 지급!</p>
        
        {/* Clay Object SVG */}
        <div className="absolute bottom-4 right-4 opacity-80 drop-shadow-xl transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:rotate-3">
          <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="100" height="100" rx="20" fill="white" fillOpacity="0.15" />
            <rect x="70" y="30" width="100" height="100" rx="20" fill="white" fillOpacity="0.3" />
            <rect x="60" y="40" width="100" height="100" rx="20" stroke="white" strokeOpacity="0.2" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Side Banner - Spans 3 columns */}
      <div className="lg:col-span-3 relative overflow-hidden bg-[#2d3436] rounded-3xl p-10 text-white h-[400px] flex flex-col justify-start pt-12 shadow-lg group">
        <h3 className="text-3xl font-bold mb-4 leading-tight relative z-10">맞춤 컨설팅<br />NH 헬스케어</h3>
        <p className="text-gray-400 text-base relative z-10">보험 가입부터 건강 관리까지!</p>
        
        {/* Clay Object SVG */}
        <div className="absolute bottom-4 right-4 drop-shadow-xl transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:rotate-6">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="white" fillOpacity="0.1"/>
            <circle cx="50" cy="50" r="30" fill="white" fillOpacity="0.2"/>
            <path d="M50 20 L50 80 M20 50 L80 50" stroke="#ff4757" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;