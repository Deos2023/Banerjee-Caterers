"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Wedding Client",
      content: "Banerjee Caterers made our wedding feast unforgettable! The presentation was exquisite and every dish tasted like it was made with love. Gobinda Babu personally ensured everything was perfect."
    },
    {
      id: 2,
      name: "Priya Malhotra",
      role: "Corporate Event",
      content: "For our annual conference, Dinesh and team executed flawless service for 300+ guests. Their attention to dietary requirements was exceptional. We have booked them for next year already!"
    },
    {
      id: 3,
      name: "Ananya Chatterjee",
      role: "Anniversary Party",
      content: "Arghadips modern twist on traditional dishes was the talk of our party! The fusion menu perfectly blended innovation with comfort. Plus, their photography team captured beautiful memories."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-[#0d2b24] text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-yellow-400 tracking-widest text-sm mb-3">✦ CLIENT LOVE ✦</p>
          <h2 className="text-4xl font-serif mb-4" style={{ fontFamily: 'Playfair Display' }}>What Our Clients Say</h2>
          <div className="w-24 h-0.5 bg-yellow-400 mx-auto"></div>
        </div>
        
        {/* Single Testimonial Display */}
        <div className="relative w-full max-w-3xl mx-auto">
          <div 
            className="transition-all duration-500 ease-in-out"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="bg-[#10332a] p-8 md:p-10 rounded-lg border border-[#22483f] shadow-xl text-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-8 h-8 text-yellow-400/60 mx-auto mb-6"
              >
                <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 006.925 10H10a1 1 0 011 1v7c0 1.103-.897 2-2 2H3a1 1 0 01-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 01-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0017.925 10H21a1 1 0 011 1v7c0 1.103-.897 2-2 2z" />
              </svg>
              <p className="text-base md:text-lg italic text-gray-100 mb-6 px-2 md:px-6">
                "{testimonials[currentIndex].content}"
              </p>
              <div>
                <h4 className="font-bold text-lg md:text-xl">{testimonials[currentIndex].name}</h4>
                <p className="text-yellow-400 text-sm mt-1">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 text-black p-2 md:p-3 rounded-full hover:bg-yellow-500 transition shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNext}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 text-black p-2 md:p-3 rounded-full hover:bg-yellow-500 transition shadow-lg"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Indicator Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentIndex === index ? 'bg-yellow-400 md:w-6' : 'bg-gray-500'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/reviews" 
            className="inline-block border border-yellow-400 text-yellow-400 px-6 py-2 text-sm hover:bg-yellow-400 hover:text-black transition rounded"
          >
            VIEW MORE REVIEWS
          </Link>
        </div>
      </div>
    </section>
  );
}