import React from 'react';

const AIBanner: React.FC = () => {
  return (
    <section className="bg-gray-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group">
      <div className="z-10 text-center md:text-left">
        <h4 className="text-xl font-bold mb-1 text-gray-900">AI 맞춤 보험 추천</h4>
        <p className="text-gray-500 text-xs">고객님의 라이프 스타일에 맞는 보험상품을 추천해드립니다.</p>
      </div>
      <button className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors z-10 shadow-sm border border-gray-200">
        지금 시작하기 <i className="fas fa-chevron-right text-[10px]"></i>
      </button>
      
      {/* Subtle background decoration */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gray-200 rounded-full opacity-50 z-0"></div>
      <div className="absolute right-20 top-0 w-20 h-20 bg-blue-50 rounded-full opacity-50 z-0"></div>
    </section>
  );
};

export default AIBanner;