import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20 py-12 px-[140px]">
      <div className="w-full max-w-[1720px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="text-xl font-bold text-gray-300 flex items-center gap-2 mb-4 grayscale opacity-70">
              <span className="p-1 bg-gray-300 text-white rounded-md flex items-center justify-center w-8 h-8">
                <i className="fas fa-shield-alt text-sm"></i>
              </span>
              NH농협손해보험
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              서울특별시 서대문구 충정로 13 (충정로3가) NH농협손해보험<br />
              사업자등록번호 220-88-00000<br />
              Copyright © NH농협손해보험. All rights reserved.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-bold mb-4 text-gray-900">보험상품</h5>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">자동차보험</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">상해보험</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">화재/재물보험</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold mb-4 text-gray-900">고객지원</h5>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">전자민원접수</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">금융소비자보호</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold mb-4 text-gray-900">SNS</h5>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-blue-600 transition-colors text-xl"><i className="fab fa-youtube"></i></a>
              <a href="#" className="hover:text-blue-600 transition-colors text-xl"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-100 text-[10px] font-bold text-gray-400">
          <a href="#" className="text-gray-900 hover:underline">개인정보처리방침</a>
          <a href="#" className="hover:underline">신용정보활용체제</a>
          <a href="#" className="hover:underline">전자민원처리</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;