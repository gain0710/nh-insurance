import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 h-[80px] flex items-center px-[140px]">
      <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2 cursor-pointer shrink-0">
          <span className="text-blue-600 text-2xl flex items-center justify-center">
            <i className="fas fa-shield-alt"></i>
          </span>
          <span className="text-xl font-bold text-[#1e2330] tracking-tight">NH농협손해보험</span>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-10 xl:gap-14 font-bold text-[#1e2330] text-[17px]">
          {['온라인창구', '보험상품', '보상서비스', '대출서비스', '고객서비스'].map((item) => (
            <a key={item} href="#" className="hover:text-blue-600 transition-colors">
              {item}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="hidden md:block bg-[#f3f4f6] hover:bg-gray-200 text-[#1e2330] px-5 py-2.5 rounded-full text-sm font-bold transition-colors">
            로그인
          </button>
          <button className="hidden md:block bg-[#f3f4f6] hover:bg-gray-200 text-[#1e2330] px-5 py-2.5 rounded-full text-sm font-bold transition-colors">
            계약조회
          </button>
          
          <div className="w-px h-4 bg-gray-300 mx-1 hidden md:block"></div>
          
          <button className="w-10 h-10 flex items-center justify-center text-[#1e2330] text-xl hover:text-blue-600 transition-colors">
            <i className="fas fa-search"></i>
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-[#1e2330] text-xl hover:text-blue-600 transition-colors">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;