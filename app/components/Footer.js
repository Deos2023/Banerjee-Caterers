"use client"

import Link from 'next/link';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      {/* Big Map Section */}
      <section className="w-full h-[500px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7717763250143!2d88.39450819999999!3d22.5127444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271e4a7d236f5%3A0x1d4a89f219d047f3!2sBanerjee%20Caterers%20and%20Event%20Management-Kasba%20Branch!5e0!3m2!1sen!2sin!4v1751272263287!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Banerjee Caterers Location"
        ></iframe>
      </section>

      {/* Footer Content */}
      <footer className="bg-[#0d2b24] text-white pt-16 pb-8 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-serif mb-6">About Us</h3>
            <p className="text-gray-300 mb-4">
              Banerjee Caterers has been crafting exceptional culinary experiences in Kolkata since 1987, blending traditional flavors with contemporary presentation.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com/banerjeecaterers" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a href="https://instagram.com/banerjeecaterers" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
                <FaInstagram className="h-4 w-4" />
              </a>
              <a href="https://youtube.com/@banerjeecaterers" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
                <FaYoutube className="h-4 w-4" />
              </a>
              <a href="https://wa.me/917278425042" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
                <FaWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-serif mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-yellow-400 transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-yellow-400 transition">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-yellow-400 transition">Services</Link></li>
              <li><Link href="/menu" className="text-gray-300 hover:text-yellow-400 transition">Menus</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-yellow-400 transition">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-serif mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services#wedding" className="text-gray-300 hover:text-yellow-400 transition">Wedding Catering</Link></li>
              <li><Link href="/services#corporate" className="text-gray-300 hover:text-yellow-400 transition">Corporate Events</Link></li>
              <li><Link href="/services#social" className="text-gray-300 hover:text-yellow-400 transition">Social Gatherings</Link></li>
              <li><Link href="/services#religious" className="text-gray-300 hover:text-yellow-400 transition">Religious Functions</Link></li>
              <li><Link href="/services#outdoor" className="text-gray-300 hover:text-yellow-400 transition">Outdoor Catering</Link></li>
              <li><Link href="/services#themed" className="text-gray-300 hover:text-yellow-400 transition">Themed Parties</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-serif mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="text-yellow-400 mt-1 mr-3" />
                <div>
                  <p className="text-gray-300">+91 98756 18558</p>
                  <p className="text-gray-300">+91 91431 72470</p>
                  <p className="text-gray-300">+91 98740 49030 </p>
                </div>
              </li>
              <li className="flex items-start">
                <FaWhatsapp className="text-yellow-400 mt-1 mr-3" />
                <div>
                  <p className="text-gray-300">+91 72784 25042</p>
                  <a 
                    href="https://wa.me/917278425042" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:underline text-sm"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-yellow-400 mt-1 mr-3" />
                <a href="mailto:banerjeecaterers05@gmail.com" className="text-gray-300 hover:text-yellow-400 transition">
                  banerjeecaterers05@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-yellow-400 mt-1 mr-3" />
                <address className="text-gray-300 not-italic">
                  Belgachhia, Kolkata<br />
                  West Bengal, India
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#22483f] mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Banerjee Caterers. All Rights Reserved.</p>
          <p className="mt-2"> Website Developed & Maintained by Digital Exposure Online Services</p>
        </div>
      </footer>
    </>
  );
}