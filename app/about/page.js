"use client"

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import GallerySlider from '../components/GallerySlider';
import Testimonials from '../components/Testimonials';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Banerjee Caterers | Crafting Experiences Since 1987</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      
      {/* Hero Section */}
<div className="relative w-full h-[80vh] overflow-hidden">
  <Image
    src="/img/setup/1 (10).jpeg"
    alt="Banerjee Caterers Team"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    <div className="text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-serif mb-4" style={{ fontFamily: 'Playfair Display' }}>
        Our Story
      </h1>
      <p className="text-xl md:text-2xl italic" style={{ fontFamily: 'Dancing Script' }}>
        Crafting Experiences, Delivering Hospitality Since 1987
      </p>
    </div>
  </div>

  {/* Gradient Fade to Our Journey Background */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0d2b24]" />
</div>

{/* Blend Transition Effect */}
{/* <div className="h-24 bg-gradient-to-b  to-[#0d2b24]" /> */}

      {/* Our Journey Section */}
      <section className="bg-[#0d2b24] text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 tracking-widest text-sm mb-3">✦ OUR JOURNEY ✦</p>
            <h2 className="text-4xl font-serif mb-6" style={{ fontFamily: 'Playfair Display' }}>
              From Humble Beginnings to Kolkatas Premier Caterers
            </h2>
            <div className="w-24 h-0.5 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 1987 by Gobinda Banerjee in Belgachhia, Banerjee Caterers began its story with humble cooking contracts and a passion for authentic hospitality. Over the decades, it has grown into one of Kolkata&apos;s premier catering services, blending tradition with innovation.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                To meet growing demand, we expanded operations with new branches in Kasba and Sodepur, broadening our reach across the city and surrounding regions.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We proudly serve a wide range of occasions — from weddings, birthdays, rice ceremonies, and receptions, to corporate events, themed caterings, religious functions, and educational institutional services — delivering memorable culinary experiences every time.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our footprint spans across the southern districts of Bengal — from Nadia in the north to Canning in the south — bringing our signature hospitality to every corner we reach.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden border-2 border-yellow-400/50">
              <Image
                src="/img/setup/1 (26).jpeg" // Replace with your journey image
                alt="Our Journey"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Family Legacy Section */}
      <section className="bg-[#10332a] text-white py-20 px-6 md:px-20  bg-cover bg-center bg-no-repeat bg-fixed relative"
      style={{
    backgroundImage: "url('/img/setup/1 (14).jpeg')", // Path to your background image
  }}
      >
        {/* Background Blur Layer (behind content) */}
  <div className="absolute inset-0 z-0">
    <div className="w-full h-full backdrop-blur-xs bg-black/60" />
  </div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center mb-16">
            <p className="text-yellow-400 tracking-widest text-sm mb-3">✦ FAMILY LEGACY ✦</p>
            <h2 className="text-4xl font-serif mb-6" style={{ fontFamily: 'Playfair Display' }}>
              Three Generations of Culinary Excellence
            </h2>
            <div className="w-24 h-0.5 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Founder */}
            <div className="bg-[#0d2b24] p-8 rounded-lg border border-[#22483f] text-center">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-yellow-400">
                <Image
                  src="/gobinda-banerjee.jpg" // Replace with founder's image
                  alt="Gobinda Banerjee"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Gobinda Banerjee</h3>
              <p className="text-yellow-400 text-sm mb-4">Founder & Master Chef</p>
              <p className="text-gray-300 text-sm">
                The culinary visionary who started it all in 1987. A master of Bengali cuisine who continues to mentor our kitchen team with his decades of expertise.
              </p>
            </div>

            {/* Second Generation */}
            <div className="bg-[#0d2b24] p-8 rounded-lg border border-[#22483f] text-center">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-yellow-400">
                <Image
                  src="/dinesh-banerjee.jpg" // Replace with image
                  alt="Dinesh Banerjee"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Dinesh Banerjee</h3>
              <p className="text-yellow-400 text-sm mb-4">Operations Director</p>
              <p className="text-gray-300 text-sm">
                Brings operational excellence from his experience with Bijoli Grill and Alibaba, ensuring seamless execution at every event.
              </p>
            </div>

            {/* Third Generation */}
            <div className="bg-[#0d2b24] p-8 rounded-lg border border-[#22483f] text-center">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-yellow-400">
                <Image
                  src="/arghadip-banerjee.jpg" // Replace with image
                  alt="Arghadip Banerjee"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Arghadip Banerjee</h3>
              <p className="text-yellow-400 text-sm mb-4">Creative Director</p>
              <p className="text-gray-300 text-sm">
                IHM Tarala and Taj Vivanta trained, infuses contemporary culinary trends while preserving our traditional essence.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center max-w-4xl mx-auto">
            <p className="text-gray-300 italic mb-6">
              Together, three generations of the Banerjee family continue to uphold a promise — To craft every event with care. To deliver hospitality with heart. To make every guest feel truly celebrated.
            </p>
            <p className="text-yellow-400 text-xl font-serif">
              Because at Banerjee Caterers, we don&apos;t just serve food. We craft experience. We deliver hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-[#0d2b24] text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 tracking-widest text-sm mb-3">✦ OUR SERVICES ✦</p>
            <h2 className="text-4xl font-serif mb-6" style={{ fontFamily: 'Playfair Display' }}>
              Comprehensive Event Solutions
            </h2>
            <div className="w-24 h-0.5 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#10332a] p-8 rounded-lg border border-[#22483f] text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-400/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4">Wedding Catering</h3>
              <p className="text-gray-300 text-sm">
                From intimate ceremonies to grand receptions, we create wedding feasts that become cherished memories.
              </p>
            </div>

            <div className="bg-[#10332a] p-8 rounded-lg border border-[#22483f] text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-400/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4">Corporate Events</h3>
              <p className="text-gray-300 text-sm">
                Professional catering solutions for conferences, seminars, and corporate celebrations.
              </p>
            </div>

            <div className="bg-[#10332a] p-8 rounded-lg border border-[#22483f] text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-400/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4">Religious Functions</h3>
              <p className="text-gray-300 text-sm">
                Traditional offerings prepared with devotion for pujas, annaprashan, and other religious ceremonies.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/services" 
              className="inline-block border border-yellow-400 text-yellow-400 px-8 py-3 text-sm font-medium hover:bg-yellow-400 hover:text-black transition rounded"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      <GallerySlider />
      <Testimonials />
      <section className="bg-[#10332a] text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 tracking-widest text-sm mb-3">✦ WHY CHOOSE US ✦</p>
            <h2 className="text-4xl font-serif mb-6" style={{ fontFamily: 'Playfair Display' }}>
              The Banerjee Caterers Difference
            </h2>
            <div className="w-24 h-0.5 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-lg overflow-hidden border-2 border-yellow-400/50">
              <Image
                src="/img/setup/1 (9).jpeg" // Replace with your image
                alt="Our Team in Action"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-6 text-yellow-400">
                Three Decades of Culinary Excellence
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-yellow-400/10 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Generational Expertise</h4>
                    <p className="text-gray-300 text-sm">
                      Combining traditional Bengali culinary wisdom with modern hospitality standards across three generations
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-400/10 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">End-to-End Event Solutions</h4>
                    <p className="text-gray-300 text-sm">
                      From catering and decor to photography and makeup - we&apos;re your one-stop event partners
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-400/10 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Pan-Bengal Reach</h4>
                    <p className="text-gray-300 text-sm">
                      Serving across West Bengal with branches in Belgachhia, Kasba, and Sodepur
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0d2b24] p-8 rounded-lg border border-[#22483f] text-center">
              <div className="text-5xl font-serif text-yellow-400 mb-4">35+</div>
              <h3 className="text-xl font-serif mb-2">Years of Experience</h3>
              <p className="text-gray-300 text-sm">
                Since our founding in 1987, we&apos;ve perfected the art of Bengali hospitality
              </p>
            </div>
            <div className="bg-[#0d2b24] p-8 rounded-lg border border-[#22483f] text-center">
              <div className="text-5xl font-serif text-yellow-400 mb-4">1000+</div>
              <h3 className="text-xl font-serif mb-2">Events Catered</h3>
              <p className="text-gray-300 text-sm">
                From intimate gatherings to grand weddings with 1000+ guests
              </p>
            </div>
            <div className="bg-[#0d2b24] p-8 rounded-lg border border-[#22483f] text-center">
              <div className="text-5xl font-serif text-yellow-400 mb-4">50+</div>
              <h3 className="text-xl font-serif mb-2">Dish Varieties</h3>
              <p className="text-gray-300 text-sm">
                Traditional Bengali to Continental fusion in our repertoire
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/contact" 
              className="inline-block bg-yellow-400 text-black px-8 py-3 text-sm font-medium hover:bg-yellow-500 transition rounded"
            >
              BOOK YOUR EVENT TODAY
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}