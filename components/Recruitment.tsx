import React from 'react';

const Recruitment: React.FC = () => {
  const jobs = [
    {
      dday: 'D-2',
      company: 'MG새마을금고',
      title: 'MG새마을금고 데이터분석가 채용',
      location: '서울 강남구',
      experience: '경력 무관',
      icon: 'fa-cloud',
      iconColor: 'text-blue-500',
      ddayClass: 'bg-blue-50 text-blue-600'
    },
    {
      dday: 'D-14',
      company: 'GOOGLE',
      title: '구글 애널리틱스 기획 운영 경력직',
      location: '서울 강동구',
      experience: '경력 필히',
      icon: 'fa-google',
      iconType: 'fab',
      iconColor: 'text-red-500',
      ddayClass: 'bg-blue-50 text-blue-600'
    },
    {
      dday: 'D-43',
      company: '(주)현대자동차',
      title: '자동차 제조기업 HMJ HR 디렉터',
      location: '서울 강남구',
      experience: '경력 5년↑',
      icon: 'fa-car',
      iconColor: 'text-blue-900',
      ddayClass: 'bg-blue-50 text-blue-600'
    },
    {
      dday: '~2023.12.30',
      company: '(주)한화이커머스',
      title: '대형쇼핑몰 e-biz 부문 총괄',
      location: '서울 중구',
      experience: '경력 우대',
      icon: 'fa-shopping-bag',
      iconColor: 'text-pink-500',
      ddayClass: 'bg-gray-100 text-gray-500'
    },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-9 gap-[20px] items-start">
      {/* Left: Title and Navigation (3 cols) */}
      <div className="lg:col-span-3 space-y-6">
        <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm">
          <i className="fas fa-briefcase"></i> 채용관
        </div>
        <h4 className="text-3xl font-bold text-gray-900 leading-tight">
          추천 포지션을<br />한눈에 확인하세요
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          나에게 맞는 일자리를 찾아<br />바로 지원해 보세요.
        </p>
        <div className="pt-4 flex flex-col gap-3">
          <button className="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-black transition-colors w-fit group">
            채용관 바로가기 <i className="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
          </button>
          <div className="flex gap-2 mt-4">
            <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-white transition-colors text-gray-400 hover:text-gray-600">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-white transition-colors text-gray-400 hover:text-gray-600">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Right: 2x2 Grid Cards (6 cols) */}
      <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-[20px] w-full">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all relative group cursor-pointer hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                <i className={`${job.iconType || 'fas'} ${job.icon} ${job.iconColor}`}></i>
              </div>
              <span className={`${job.ddayClass} text-[10px] px-2 py-1 rounded font-bold`}>{job.dday}</span>
            </div>
            <div className="mb-6">
              <p className="text-[10px] text-gray-400 mb-1">참가 | {job.company}</p>
              <h5 className="text-sm font-bold text-gray-800 line-clamp-1">{job.title}</h5>
            </div>
            <div className="flex items-center justify-between text-[10px] text-gray-400 border-t border-gray-50 pt-3">
              <span>{job.location} | {job.experience}</span>
              <button className="hover:text-red-500 transition-colors">
                <i className="far fa-heart"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recruitment;