"use client"

import { useEffect, useState } from 'react';
import { FaArrowUp, FaPhone, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function FloatingButtons() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Left Side Social Buttons */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex flex-col gap-4">
        <a 
          href="https://www.facebook.com/banerjeecaterers?mibextid=ZbWKwL" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#1837ff] text-white p-3 rounded-full shadow-lg hover:bg-[#0d2b24]/90 transition-all duration-300 group"
          aria-label="Facebook"
        >
          <FaFacebookF className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </a>
        <a 
          href="https://www.instagram.com/banerjeecaterers?igsh=eXNkMXV2bGxwZHJ0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#ff186d] text-white p-3 rounded-full shadow-lg hover:bg-[#0d2b24]/90 transition-all duration-300 group"
          aria-label="Instagram"
        >
          <FaInstagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </a>
        <a 
          href="https://youtube.com/@banerjeecaterers?si=h8Mck2Zd4-kQGKF0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#af0303] text-white p-3 rounded-full shadow-lg hover:bg-[#0d2b24]/90 transition-all duration-300 group"
          aria-label="YouTube"
        >
          <FaYoutube className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Right Side Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        {/* Scroll to Top Button (Conditional) */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="bg-[#0d2b24] text-white p-3 rounded-full shadow-lg hover:bg-[#0d2b24]/90 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </button>
        )}

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/917278425042" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 group"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </a>

        {/* Call Button */}
        <a 
          href="tel:+919875618558" 
          className="bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 group"
          aria-label="Call"
        >
          <FaPhone className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </>
  );
}