"use client"

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import GallerySlider from "./components/GallerySlider";
import FAQSection from "./components/FAQ";
import ContactSec from "./components/ContactForm";
import { FaChartLine, FaTree } from "react-icons/fa";

export default function Home() {
  
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video4.mp4"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4 t">
          <h1 className="text-4xl md:text-6xl font-serif text-yellow-500" >
            <span className="text-5xl md:text-8xl">B</span>ANERJEE
          </h1>
          <h2 className="text-4xl md:text-6xl font-serif text-yellow-500" >
            CATERER<span className="text-5xl md:text-7xl">S</span>
          </h2>
           <h2 className="text-xl md:text-3xl pt-4 font-serif" >
            & EVENT MANAGEMENT 
          </h2>
          <p
            className="text-3xl md:text-5xl italic mt-10 font-bold text-[#e93434]" 
          >
            Crafting Experiences, Delivering Hospitality
          </p>
        </div>
        {/* Gradient Fade to Our Journey Background */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0d2b24]" />
      </div>

      {/* Our Story Section */}
      <section className="bg-[#0d2b24] text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-center md:text-left text-sm tracking-widest text-yellow-400 mb-3">
              ✦ OUR JOURNEY SINCE 1987 ✦
            </p>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-center md:text-left">
              Three Generations of <span className="text-yellow-400">Culinary</span> Excellence
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              Founded in Belgachhia by Gobinda Banerjee, we began with humble cooking contracts and a passion for authentic hospitality. 
              Today, with branches in Kasba and Sodepur, we serve all of Kolkata and beyond, bringing our signature hospitality 
              to weddings, corporate events, religious functions, and every special occasion in between.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
  <div className="flex items-start gap-4">
    <FaTree className="text-yellow-400 text-2xl mt-1" />
    <div>
      <h4 className="font-bold text-sm">FAMILY LEGACY</h4>
      <p className="text-xs text-gray-300">
        Three generations dedicated to perfecting Bengali cuisine and hospitality traditions.
      </p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <FaChartLine className="text-yellow-400 text-2xl mt-1" />
    <div>
      <h4 className="font-bold text-sm">GROWTH & EXPANSION</h4>
      <p className="text-xs text-gray-300">
        From local caterer to premier service provider across southern Bengal.
      </p>
    </div>
  </div>
</div>

            <div className="mt-10">
              <Link href="/about" className="border border-yellow-400 px-6 py-2 text-sm text-yellow-400 hover:bg-yellow-500 hover:text-black transition">
                OUR FULL STORY
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-b-full border-[1px] border-yellow-500">
              <Image
                src="/mirror1.png"
                alt="Banerjee Family Legacy"
                width={600}
                height={800}
                className="w-full h-auto object-cover rounded-b-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section
        className="relative bg-[#10332a] text-white py-20 px-6 md:px-20 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/img/setup/1 (43).jpeg')",
        }}
      >
        {/* Background Blur Layer (behind content) */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full backdrop-blur-xs bg-black/60" />
        </div>

        {/* Actual Content (in front of blur) */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-yellow-400 tracking-widest text-sm mb-3">
            ✦ MEET THE BANERJEES ✦
          </p>
          <h2
            className="text-4xl font-serif mb-16"
          >
            Generations of Hospitality
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Founder */}
            <div className="bg-[#0d2b24] p-8 rounded-lg border border-[#22483f]">
              <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-2 border-yellow-400">
                <Image
                  src="/gobinda-banerjee.jpg"
                  alt="Gobinda Banerjee"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Gobinda Banerjee</h3>
              <p className="text-yellow-400 text-sm mb-4">Founder & Owner</p>
              <p className="text-sm text-gray-300">
                The culinary visionary behind our signature flavors, continues to
                mentor our kitchen team with his decades of expertise in Bengali
                cuisine.
              </p>
            </div>

            {/* Second Generation */}
            <div className="bg-[#0d2b24] p-8 rounded-lg border border-[#22483f]">
              <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-2 border-yellow-400">
                <Image
                  src="/dinesh-banerjee.jpg"
                  alt="Dinesh Banerjee"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Dinesh Banerjee</h3>
              <p className="text-yellow-400 text-sm mb-4">Operations Director</p>
              <p className="text-sm text-gray-300">
                Brings operational excellence from his experience in corporate catering agencies, ensuring seamless execution at every event.
              </p>
            </div>

            {/* Third Generation */}
            <div className="bg-[#0d2b24] p-8 rounded-lg border border-[#22483f]">
              <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-2 border-yellow-400">
                <Image
                  src="/arghadip-banerjee.jpg"
                  alt="Arghadip Banerjee"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Arghadip Banerjee</h3>
              <p className="text-yellow-400 text-sm mb-4">Creative Director</p>
              <p className="text-sm text-gray-300">
                IHM Taratala and Taj Vivanta trained, infuses contemporary culinary
                trends while preserving our traditional essence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials/>

      {/* Service Image Grid Section */}
<section className="bg-[#0d2b24] text-white py-20 px-6 md:px-20">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-yellow-400 tracking-widest text-sm mb-3">✦ OUR SERVICES ✦</p>
    <h2 className="text-4xl font-serif mb-12">
      Customized Hospitality Solutions
    </h2>

    {/* Icon Grid Blocks */}
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-16">
      <div className="bg-[#10332a] p-8 rounded-lg border border-[#22483f] text-center">
        <Image src="/img/setup/1 (38).jpeg" width={56} height={56} className="w-14 h-14 mx-auto mb-4" alt="Wedding" />
        <h3 className="text-lg font-serif mb-2">Wedding Catering</h3>
        <p className="text-sm text-gray-300">Intimate ceremonies to grand receptions.</p>
      </div>
      <div className="bg-[#10332a] p-8 rounded-lg border border-[#22483f] text-center">
        <Image src="/img/setup/1 (47).jpeg" width={56} height={56} className="w-14 h-14 mx-auto mb-4" alt="Corporate" />
        <h3 className="text-lg font-serif mb-2">Corporate Events</h3>
        <p className="text-sm text-gray-300">Seminars, training, conferences, and high-tea setups.</p>
      </div>
      <div className="bg-[#10332a] p-8 rounded-lg border border-[#22483f] text-center">
        <Image src="/img/setup/1 (43).jpeg" width={56} height={56} className="w-14 h-14 mx-auto mb-4" alt="Social" />
        <h3 className="text-lg font-serif mb-2">Social Gatherings</h3>
        <p className="text-sm text-gray-300">Birthdays, anniversaries, and reunions.</p>
      </div>
      <div className="bg-[#10332a] p-8 rounded-lg border border-[#22483f] text-center">
        <Image src="/img/setup/1 (39).jpeg" width={56} height={56} className="w-14 h-14 mx-auto mb-4" alt="Religious" />
        <h3 className="text-lg font-serif mb-2">Religious Functions</h3>
        <p className="text-sm text-gray-300">Annaprashan, pujas, havans with sattvik food options.</p>
      </div>
    </div>

    {/* CTA Button */}
    <div className="text-center">
      <Link
        href="/contact"
        className="inline-block bg-yellow-400 text-black px-8 py-3 text-sm font-medium hover:bg-yellow-500 transition rounded"
      >
        GET A FREE QUOTE
      </Link>
    </div>
  </div>
</section>


      <GallerySlider />
      <FAQSection />
      <ContactSec />
      
      {/* Map Section */}
      {/* <section className="w-full h-[500px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7717763250143!2d88.39450819999999!3d22.5127444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271e4a7d236f5%3A0x1d4a89f219d047f3!2sBanerjee%20Caterers%20and%20Event%20Management-Kasba%20Branch!5e0!3m2!1sen!2sin!4v1751272263287!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Banerjee Caterers Location"
        ></iframe>
      </section> */}
    </>
  );
}