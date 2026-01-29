import React from 'react';

const InfoSection: React.FC = () => {
  const notices = [
    { title: '2024년 설날 연휴 업무 안내', date: '2024.01.20' },
    { title: '보이는 ARS 서비스 점검 안내', date: '2024.01.18' },
    { title: '개인정보처리방침 변경 안내', date: '2024.01.15' },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[20px] pt-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold text-gray-900">공지사항</h4>
          <a href="#" className="text-xs text-gray-400 hover:text-blue-600 transition-colors">더 보기 <i className="fas fa-chevron-right ml-1"></i></a>
        </div>
        <ul className="space-y-3">
          {notices.map((notice, index) => (
            <li key={index} className="flex items-center justify-between group cursor-pointer border-b border-gray-100 pb-2">
              <span className="text-sm text-gray-600 group-hover:text-blue-600 truncate mr-4 transition-colors">
                {notice.title}
              </span>
              <span className="text-xs text-gray-400 shrink-0 font-light">{notice.date}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-2xl">
        <h4 className="text-lg font-bold mb-4 text-gray-900">고객센터</h4>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">대표번호</p>
            <p className="text-2xl font-bold text-blue-600">1644-9000</p>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-1">상담시간</p>
            <p className="text-sm font-medium text-gray-700">평일 09:00 ~ 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;