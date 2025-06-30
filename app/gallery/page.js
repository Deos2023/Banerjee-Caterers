"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function GalleryPage() {
  // Image arrays
  const setupImages = Array.from({ length: 51 }, (_, i) => `/img/setup/1 (${i + 1}).jpeg`);
  const dishesImages = Array.from({ length: 32 }, (_, i) => `/img/dishes/1 (${i + 1}).jpeg`);

  // State for each section
  const [visibleSetupCount, setVisibleSetupCount] = useState(12);
  const [visibleDishesCount, setVisibleDishesCount] = useState(12);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'setup', 'dishes'
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showMoreSetup = () => {
    setVisibleSetupCount(prev => Math.min(prev + 12, setupImages.length));
  };

  const showMoreDishes = () => {
    setVisibleDishesCount(prev => Math.min(prev + 12, dishesImages.length));
  };

  return (
    <>
      <Head>
        <title>Gallery | Banerjee Caterers</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/img/dishes/1 (15).jpeg"
          alt="Banerjee Caterers Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl italic" style={{ fontFamily: 'Dancing Script' }}>
              Visual Feast of Our Creations
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0d2b24]" />
      </div>

      {/* Toggle Buttons - Fixed with navbar offset */}
      <div className={`bg-[#0d2b24] sticky z-20  transition-all duration-300 ${isScrolled ? 'top-0' : 'top-[80px]'}`}>
        <div className="max-w-7xl mx-auto flex justify-center space-x-4 p-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex items-center px-6 py-2 rounded-full transition ${activeTab === 'all' ? 'bg-yellow-400 text-black' : 'bg-[#10332a] text-white hover:bg-[#22483f]'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            All Gallery
          </button>
          <button
            onClick={() => setActiveTab('setup')}
            className={`flex items-center px-6 py-2 rounded-full transition ${activeTab === 'setup' ? 'bg-yellow-400 text-black' : 'bg-[#10332a] text-white hover:bg-[#22483f]'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Event Setups
          </button>
          <button
            onClick={() => setActiveTab('dishes')}
            className={`flex items-center px-6 py-2 rounded-full transition ${activeTab === 'dishes' ? 'bg-yellow-400 text-black' : 'bg-[#10332a] text-white hover:bg-[#22483f]'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Culinary Dishes
          </button>
        </div>
      </div>

      {/* Combined Gallery (shown when 'all' is selected) */}
      {(activeTab === 'all') && (
        <div className="space-y-0">
          {/* Setup Section */}
          <section className="bg-[#0d2b24] text-white pt-16 pb-8 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-yellow-400 tracking-widest text-sm mb-3">✦ EVENT SETUPS ✦</p>
                <h2 className="text-3xl font-serif mb-4" >
                  Elegant Event Presentations
                </h2>
                <div className="w-20 h-0.5 bg-yellow-400 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {setupImages.slice(0, visibleSetupCount).map((img, index) => (
                  <div key={`setup-${index}`} className="relative group overflow-hidden rounded-lg aspect-square">
                    <Image
                      src={img}
                      alt={`Event setup ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              {visibleSetupCount < setupImages.length && (
                <div className="text-center mt-10">
                  <button
                    onClick={showMoreSetup}
                    className="inline-block border border-yellow-400 text-yellow-400 px-6 py-2 text-sm hover:bg-yellow-400 hover:text-black transition rounded"
                  >
                    SHOW MORE SETUPS
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Dishes Section */}
          <section className="bg-[#10332a] text-white pt-8 pb-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-yellow-400 tracking-widest text-sm mb-3">✦ CULINARY DELIGHTS ✦</p>
                <h2 className="text-3xl font-serif mb-4" >
                  Our Signature Dishes
                </h2>
                <div className="w-20 h-0.5 bg-yellow-400 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {dishesImages.slice(0, visibleDishesCount).map((img, index) => (
                  <div key={`dishes-${index}`} className="relative group overflow-hidden rounded-lg aspect-square">
                    <Image
                      src={img}
                      alt={`Signature dish ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              {visibleDishesCount < dishesImages.length && (
                <div className="text-center mt-10">
                  <button
                    onClick={showMoreDishes}
                    className="inline-block border border-yellow-400 text-yellow-400 px-6 py-2 text-sm hover:bg-yellow-400 hover:text-black transition rounded"
                  >
                    SHOW MORE DISHES
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      {/* Setup Only Section */}
      {(activeTab === 'setup') && (
        <section className="bg-[#0d2b24] text-white py-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {setupImages.slice(0, visibleSetupCount).map((img, index) => (
                <div key={`setup-${index}`} className="relative group overflow-hidden rounded-lg aspect-square">
                  <Image
                    src={img}
                    alt={`Event setup ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {visibleSetupCount < setupImages.length && (
              <div className="text-center mt-10">
                <button
                  onClick={showMoreSetup}
                  className="inline-block border border-yellow-400 text-yellow-400 px-6 py-2 text-sm hover:bg-yellow-400 hover:text-black transition rounded"
                >
                  SHOW MORE SETUPS
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Dishes Only Section */}
      {(activeTab === 'dishes') && (
        <section className="bg-[#10332a] text-white py-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {dishesImages.slice(0, visibleDishesCount).map((img, index) => (
                <div key={`dishes-${index}`} className="relative group overflow-hidden rounded-lg aspect-square">
                  <Image
                    src={img}
                    alt={`Signature dish ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {visibleDishesCount < dishesImages.length && (
              <div className="text-center mt-10">
                <button
                  onClick={showMoreDishes}
                  className="inline-block border border-yellow-400 text-yellow-400 px-6 py-2 text-sm hover:bg-yellow-400 hover:text-black transition rounded"
                >
                  SHOW MORE DISHES
                </button>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}