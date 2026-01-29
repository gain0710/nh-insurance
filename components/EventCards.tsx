import React from 'react';

const EventCards: React.FC = () => {
  const cards = [
    {
      bg: 'bg-[#2478f1]',
      sub: '신속하게 최저가',
      title: '지키다 일상,\n꿈꾸는 그 이상',
      icon: 'fa-building',
    },
    {
      bg: 'bg-[#4d5564]',
      sub: '삼성화재 모빌리티특집',
      title: '즐거운 경험과\n유익한 비용이 함께!',
      icon: 'fa-car-side',
    },
    {
      bg: 'bg-[#1c6b4d]',
      sub: '삼성화재 안내견학교',
      title: '안내견에 대해\n더 알아보고 싶다면?',
      icon: 'fa-dog',
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
        {cards.map((card, index) => (
          <div key={index} className={`${card.bg} rounded-2xl p-6 text-white relative min-h-[220px] flex flex-col justify-between overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all`}>
            <div className="z-10">
              <h6 className="text-xs font-medium opacity-80 mb-2">{card.sub}</h6>
              <p className="text-lg font-bold leading-snug whitespace-pre-line">{card.title}</p>
            </div>
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            {/* Icon Overlay */}
            <div className="absolute bottom-4 right-4 text-6xl opacity-20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <i className={`fas ${card.icon}`}></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCards;