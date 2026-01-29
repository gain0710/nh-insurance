import React from 'react';

const QuickMenu: React.FC = () => {
  const menuItems = [
    {
      id: 'contract',
      image: 'https://img.icons8.com/3d-fluency/94/search-in-list.png',
      label: '보장계약조회',
      alt: '계약조회'
    },
    {
      id: 'payment',
      image: 'https://img.icons8.com/3d-fluency/94/money-bag.png',
      label: '보험료납입',
      alt: '보험료납입'
    },
    {
      id: 'claim',
      image: '/img/claim.png',
      label: '사고보험금청구',
      alt: '사고보험금청구'
    },
    {
      id: 'medical',
      image: 'https://img.icons8.com/3d-fluency/94/medical-history.png',
      label: '실손보험금청구',
      alt: '실손보험금청구'
    },
    {
      id: 'loan',
      image: 'https://img.icons8.com/3d-fluency/94/stack-of-money.png',
      label: '보험계약대출',
      alt: '보험계약대출'
    },
    {
      id: 'cert',
      image: 'https://img.icons8.com/3d-fluency/94/printer.png',
      label: '증명서발행목록',
      alt: '증명서발행목록'
    },
  ];

  return (
    <section className="grid grid-cols-3 md:grid-cols-6 gap-[20px] mb-[100px]">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="flex flex-col items-center gap-3 p-4 rounded-2xl transition-all group hover:bg-white/50"
        >
          <div className="w-[64px] h-[64px] relative flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-contain filter saturate-110"
            />
          </div>
          <span className="text-[16px] font-medium text-gray-700 tracking-tight">{item.label}</span>
        </button>
      ))}
    </section>
  );
};

export default QuickMenu;