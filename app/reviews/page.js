"use client"

import Head from 'next/head';
import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export default function ReviewsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      review: "Banerjee Caterers made our wedding unforgettable! The food was exquisite and the service impeccable. Our guests are still talking about the delicious spread months later.",
      video: "/rev.mp4",
      date: "March 2024"
    },
    {
      id: 2,
      name: "Rajiv Chatterjee",
      rating: 5,
      review: "For our corporate event, we needed professional catering that would impress international clients. Banerjee Caterers delivered beyond expectations with their fusion menu.",
      video: "/rev.mp4",
      date: "January 2024"
    },
    {
      id: 3,
      name: "Ananya Banerjee",
      rating: 4,
      review: "The anniversary party catering was wonderful! Special mention to their signature desserts that were the highlight of the evening. Minor delay in setup was the only hiccup.",
      video: "/rev.mp4",
      date: "December 2023"
    },
    {
      id: 4,
      name: "Soumitra Das",
      rating: 5,
      review: "Exceptional service for our daughters rice ceremony. They accommodated all our traditional Bengali cuisine requirements perfectly. Will definitely book again!",
      video: "/rev.mp4",
      date: "November 2023"
    },
    {
      id: 5,
      name: "Meghna Roy",
      rating: 5,
      review: "The team handled our last-minute booking with such professionalism. Food quality and presentation were outstanding. Worth every penny!",
      video: "/rev.mp4",
      date: "October 2023"
    },
    {
      id: 6,
      name: "Arjun Kapoor",
      rating: 5,
      review: "Three generations of our family have used Banerjee Caterers. They continue to maintain the highest standards while innovating their menus. Simply the best in Kolkata!",
      video: "/rev.mp4",
      date: "September 2023"
    }
  ];

  return (
    <>
      <Head>
        <title>Customer Reviews | Banerjee Caterers</title>
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
              Cutomer Reviews
            </h1>
            <p className="text-xl md:text-2xl italic">
              Hear what our clients say about their experiences
            </p>
          </div>
        </div>
      
        {/* Gradient Fade to Our Journey Background */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0d2b24]" />
      </div>

      {/* Video Testimonial Highlight */}
      <section className="py-16 px-6 md:px-20 bg-[#0d2b24] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4" >
              Video Testimonials
            </h2>
            <div className="w-24 h-0.5 bg-[#0d2b24] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative max-w-sm rounded-xl sm:ml-36 overflow-hidden shadow-xl">
  <video
    src="/rev.mp4"
    muted
    loop
    playsInline 
    autoPlay
    controls
    className="w-full h-full object-cover"
  >
    Your browser does not support the video tag.
  </video>

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 pointer-events-none">
    <div>
      <div className="flex mb-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-sm" />
        ))}
      </div>
      <h3 className="text-white text-base font-serif">Ritika & Ankit&apos;s Wedding</h3>
      <p className="text-gray-200 text-sm">February 2024</p>
    </div>
  </div>
</div>

            
            <div>
              <h3 className="text-2xl font-serif mb-6 text-white">
                Real Experiences, Genuine Happiness
              </h3>
              <p className="text-white mb-6 leading-relaxed">
                Nothing speaks louder than the words of our satisfied clients. Watch real couples, families, and corporate clients share their Banerjee Caterers experience in their own words.
              </p>
              <div className="flex space-x-4 overflow-x-auto pb-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex-shrink-0 w-32 h-48 rounded-lg overflow-hidden relative">
                    <video 
                      src={`/videos/review-thumb-${item}.mp4`}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      autoPlay
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0d2b24]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-6 md:px-20 bg-[#10332a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4" >
              What Our Clients Say
            </h2>
            <div className="w-24 h-0.5 bg-[#0d2b24] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="relative h-14">
                    {/* <video 
                      src={testimonial.video}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      autoPlay
                    /> */}
                  <div className="absolute top-4 left-4 bg-[#0d2b24] text-white px-3 py-1 rounded-full text-sm">
                    {testimonial.date}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-gray-300" />
                    ))}
                  </div>
                  <FaQuoteLeft className="text-[#0d2b24] text-2xl mb-4 opacity-20" />
                  <p className="text-neutral-800 mb-6 italic">{testimonial.review}</p>
                  <p className="font-medium text-[#0d2b24]">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-20 bg-[#0d2b24] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6" >
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who&apos;ve experienced the Banerjee Caterers difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="inline-block bg-white text-[#0d2b24] px-8 py-3 text-lg font-medium hover:bg-gray-100 transition rounded"
            >
              Book Your Event
            </a>
            <a 
              href="tel:+919875618558" 
              className="inline-block border border-white text-white px-8 py-3 text-lg font-medium hover:bg-white/10 transition rounded"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}