"use client"

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('social');
  const [activeSubTab, setActiveSubTab] = useState('budget');

  // Sample menu data - replace with your actual menu items when available
  const menuData = {
    social: {
      budget: [
        { name: "Vegetable Pakora", price: "₹80" },
        { name: "Chicken 65", price: "₹120" },
        { name: "Paneer Tikka", price: "₹100" },
        { name: "Veg Biryani", price: "₹90" },
        { name: "Chicken Curry", price: "₹110" },
        { name: "Gulab Jamun", price: "₹60" }
      ],
      premium: [
        { name: "Tandoori Mushroom", price: "₹150" },
        { name: "Mutton Galouti Kebab", price: "₹200" },
        { name: "Prawn Malai Curry", price: "₹250" },
        { name: "Hyderabadi Dum Biryani", price: "₹180" },
        { name: "Butter Chicken", price: "₹160" },
        { name: "Gajar Halwa", price: "₹100" }
      ]
    },
    corporate: {
      standard: [
        { name: "Corporate Lunch Box", price: "₹250" },
        { name: "Conference Snack Pack", price: "₹180" },
        { name: "Executive Buffet", price: "₹350" }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Banerjee Caterers | Menus</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/img/dishes/1 (3).jpeg"
          alt="Banerjee Caterers Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4" >
              Our Menus
            </h1>
            <p className="text-xl md:text-2xl italic" style={{ fontFamily: 'Dancing Script' }}>
              Crafting Culinary Experiences
            </p>
          </div>
        </div>
      
        {/* Gradient Fade to Our Journey Background */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0d2b24]" />
      </div>

      <section className="bg-[#0d2b24] text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Tabs */}
          <div className="flex justify-center border-b border-[#22483f] mb-12">
            <button
              className={`px-6 py-3 font-medium ${activeTab === 'social' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setActiveTab('social')}
            >
              Social Gatherings
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === 'corporate' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setActiveTab('corporate')}
            >
              Corporate Events
            </button>
          </div>

          {/* Sub Tabs for Social */}
          {activeTab === 'social' && (
            <div className="flex justify-center mb-12">
              <button
                className={`px-6 py-2 mx-2 rounded-full ${activeSubTab === 'budget' ? 'bg-yellow-400 text-black' : 'bg-[#10332a] text-white hover:bg-[#22483f]'}`}
                onClick={() => setActiveSubTab('budget')}
              >
                Budget Menu
              </button>
              <button
                className={`px-6 py-2 mx-2 rounded-full ${activeSubTab === 'premium' ? 'bg-yellow-400 text-black' : 'bg-[#10332a] text-white hover:bg-[#22483f]'}`}
                onClick={() => setActiveSubTab('premium')}
              >
                Premium Menu
              </button>
            </div>
          )}

          {/* Menu Display */}
          <div className="grid md:grid-cols-2 gap-12">
            {activeTab === 'corporate' ? (
              <div className="col-span-2 text-center">
                <div className="bg-[#10332a] border border-[#22483f] p-8 rounded-lg">
                  <h3 className="text-2xl font-serif mb-6 text-yellow-400">Corporate Menus Coming Soon</h3>
                  <p className="text-gray-300 mb-6">
                    Our specialized corporate menus will be available by June 30th. Please check back or contact us for details.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-block border border-yellow-400 text-yellow-400 px-6 py-2 text-sm hover:bg-yellow-400 hover:text-black transition rounded"
                  >
                    INQUIRE NOW
                  </Link>
                </div>
              </div>
            ) : (
              menuData.social[activeSubTab].map((item, index) => (
                <div key={index} className="bg-[#10332a] border border-[#22483f] p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <span className="text-yellow-400">{item.price}</span>
                  </div>
                  <div className="mt-4 flex justify-between text-sm text-gray-300">
                    <span>Vegetarian</span>
                    <span>Serves 1</span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Menu Note */}
          <div className="mt-16 text-center text-gray-300">
            <p className="mb-4">All menus can be customized according to your event requirements.</p>
            <Link 
              href="/contact" 
              className="inline-block border border-yellow-400 text-yellow-400 px-8 py-3 text-sm font-medium hover:bg-yellow-400 hover:text-black transition rounded"
            >
              GET A CUSTOM QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}