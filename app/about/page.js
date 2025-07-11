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
      <h1 className="text-4xl md:text-6xl font-serif mb-4" >
        Our Story
      </h1>
      <p className="text-xl md:text-2xl italic" >
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
            <h2 className="text-4xl font-serif mb-6" >
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
                src="/img/setup/1 (41).jpeg" // Replace with your journey image
                alt="Our Journey"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Family Legacy Section */}
      {/* Leadership Section */}
            <section
              className="relative bg-[#10332a] text-white py-20 px-6 md:px-20 bg-cover bg-center bg-no-repeat bg-fixed"
              style={{
                backgroundImage: "url('/img/setup/1 (14).jpeg')",
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
                        src="/gobindo.jpeg"
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
                        src="/dinesh.jpeg"
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
                        src="/arghadip.jpeg"
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


{/* Mission & Vision Section */}
      <section className="py-20 px-6 md:px-20 bg-[#10332a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-[#0d2b24] p-10 rounded-lg border border-[#22483f] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-400/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-serif">Mission</h2>
                </div>
                <blockquote className="text-lg italic text-gray-300 border-l-4 border-yellow-400 pl-6 py-2">
                  "To craft unforgettable culinary experiences by delivering authentic, high-quality, and personalized catering services, rooted in tradition, innovation, and heartfelt hospitality."
                </blockquote>
                <div className="mt-6">
                  <p className="text-gray-300">
                    Our mission drives every dish we prepare and every event we cater. We commit to preserving Bengali culinary heritage while innovating to meet modern tastes and expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-[#0d2b24] p-10 rounded-lg border border-[#22483f] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-400/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-serif">Vision</h2>
                </div>
                <blockquote className="text-lg italic text-gray-300 border-l-4 border-yellow-400 pl-6 py-2">
                  "To be the most trusted and celebrated catering brand in India, known for redefining hospitality through excellence in service, commitment to quality, and a passion for bringing people together over food."
                </blockquote>
                <div className="mt-6">
                  <p className="text-gray-300">
                    We envision a future where Banerjee Caterers becomes synonymous with exceptional catering experiences across India, setting new standards in culinary excellence and event hospitality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Services Section */}
      <section className="bg-[#0d2b24] text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 tracking-widest text-sm mb-3">✦ OUR SERVICES ✦</p>
            <h2 className="text-4xl font-serif mb-6" >
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
            <h2 className="text-4xl font-serif mb-6" >
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
              <div className="text-5xl font-serif text-yellow-400 mb-4">2000+</div>
              <h3 className="text-xl font-serif mb-2">Events Catered</h3>
              <p className="text-gray-300 text-sm">
                From intimate gatherings to grand weddings with 2000+ guests
              </p>
            </div>
            <div className="bg-[#0d2b24] p-8 rounded-lg border border-[#22483f] text-center">
              <div className="text-5xl font-serif text-yellow-400 mb-4">150+</div>
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