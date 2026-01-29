import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');

  return (
    <div className="sticky top-28 bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-[#1e2330] mb-3">보험료 간편하게 계산하기</h3>
        <p className="text-gray-500 text-sm">몇 가지 정보만으로 예상 보험료를 확인해 보세요.</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-bold text-[#1e2330] mb-2">이름</label>
          <input 
            type="text" 
            placeholder="이름을 입력하세요" 
            className="w-full bg-[#f8f9fa] rounded-xl px-4 py-4 text-[#1e2330] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all text-sm font-medium"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#1e2330] mb-2">생년월일</label>
          <input 
            type="text" 
            placeholder="예: 19900101" 
            className="w-full bg-[#f8f9fa] rounded-xl px-4 py-4 text-[#1e2330] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all text-sm font-medium"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#1e2330] mb-2">성별</label>
          <div className="flex gap-3">
            <button 
              type="button"
              onClick={() => setGender('male')}
              className={`flex-1 py-3.5 rounded-xl font-bold text-sm transition-all border ${
                gender === 'male' 
                  ? 'border-blue-200 bg-[#eef6ff] text-blue-600' 
                  : 'border-gray-200 bg-white text-gray-400 hover:bg-gray-50'
              }`}
            >
              남
            </button>
            <button 
              type="button"
              onClick={() => setGender('female')}
              className={`flex-1 py-3.5 rounded-xl font-bold text-sm transition-all border ${
                gender === 'female' 
                  ? 'border-blue-200 bg-[#eef6ff] text-blue-600' 
                  : 'border-gray-200 bg-white text-gray-400 hover:bg-gray-50'
              }`}
            >
              여
            </button>
          </div>
        </div>
        <button className="w-full py-4 bg-[#1e2330] text-white rounded-xl font-bold text-base hover:bg-[#2d3548] transition-all shadow-lg shadow-gray-200/50 mt-2">
          보험료 확인하기
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-100 space-y-5">
        <button className="flex items-center gap-3 text-gray-600 hover:text-[#1e2330] transition-colors w-full text-left group">
          <i className="fas fa-phone-alt text-lg text-gray-500 group-hover:text-[#1e2330] transition-colors"></i>
          <span className="font-medium text-sm">전화 상담 예약</span>
        </button>
        <button className="flex items-center gap-3 text-gray-600 hover:text-[#1e2330] transition-colors w-full text-left group">
          <i className="far fa-comment-dots text-lg text-gray-500 group-hover:text-[#1e2330] transition-colors"></i>
          <span className="font-medium text-sm">카카오톡 1:1 상담</span>
        </button>
      </div>
    </div>
  );
};

export default Calculator;