import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickMenu from './components/QuickMenu';
import Recruitment from './components/Recruitment';
import AIBanner from './components/AIBanner';
import EventCards from './components/EventCards';
import InfoSection from './components/InfoSection';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />

      <main className="flex-grow w-full px-[140px] py-8">
        <div className="w-full max-w-[1720px] mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-[20px]">
            
            {/* Left Column: Main Content (9 columns) */}
            <div className="lg:col-span-9 space-y-12">
              <Hero />
              <QuickMenu />
              <Recruitment />
              <AIBanner />
              <EventCards />
              <InfoSection />
            </div>

            {/* Right Column: Sticky Calculator (3 columns) */}
            <aside className="lg:col-span-3">
              <Calculator />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;