"use client"

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "Wedding Catering",
      description: "Complete wedding catering solutions from engagement to reception. Our specialized wedding menus blend tradition with contemporary flavors.",
      icon: "👰",
      features: [
        "Bridal party meals",
        "Customizable thali options",
        "Live food counters",
        "Traditional Bengali wedding feast",
        "Vendor meals included"
      ],
      image: "/img/setup/1 (38).jpeg"
    },
    {
      title: "Corporate Catering",
      description: "Professional catering for meetings, conferences, and corporate events. Impress your clients and employees with our business dining solutions.",
      icon: "💼",
      features: [
        "Boxed lunches",
        "Working buffet setups",
        "Coffee/tea service",
        "Branded food displays",
        "Diet-specific meals"
      ],
      image: "/img/setup/1 (47).jpeg"
    },
    {
      title: "Social Events",
      description: "Memorable catering for birthdays, anniversaries, and family gatherings. We bring restaurant-quality dining to your home.",
      icon: "🎉",
      features: [
        "Themed menu options",
        "Kids' special menus",
        "Interactive food stations",
        "Cake coordination",
        "Family-style serving"
      ],
      image: "/img/setup/1 (43).jpeg"
    },
    {
      title: "Religious Functions",
      description: "Sacred food preparations for pujas, annaprashan, and other religious ceremonies following all traditional protocols.",
      icon: "🕉️",
      features: [
        "Prasad preparation",
        "Satvik vegetarian menus",
        "Priest meals",
        "Traditional bhog",
        "Ritual-specific serving"
      ],
      image: "/img/setup/1 (34).jpeg"
    },
    {
      title: "Outdoor Catering",
      description: "Complete outdoor event solutions with portable kitchens and weather-proof setups for garden parties and tent events.",
      icon: "🌳",
      features: [
        "Marquee setups",
        "Mobile cooking stations",
        "Climate-controlled food transport",
        "Generator arrangements",
        "Waste management"
      ],
      image: "/img/setup/1 (37).jpeg"
    },
    {
      title: "Themed Catering",
      description: "Immersive dining experiences with curated menus for destination weddings, cultural nights, and special theme parties.",
      icon: "🎭",
      features: [
        "Costumed servers",
        "Region-specific cuisine",
        "Interactive food displays",
        "Signature cocktails",
        "Custom decor integration"
      ],
      image: "/img/setup/1 (40).jpeg"
    }
  ];

  const serviceStats = [
    { value: "35+", label: "Years Experience" },
    { value: "1000+", label: "Events Catered" },
    { value: "150+", label: "Menu Varieties" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <>
      <Head>
        <title>Our Services | Banerjee Caterers</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
{/* Hero Section */}
<div className="relative w-full h-[80vh] overflow-hidden">
  <Image
    src="/img/setup/1 (32).jpeg"
    alt="Banerjee Caterers Team"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    <div className="text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-serif mb-4" >
        Our Services
      </h1>
      <p className="text-xl md:text-2xl italic" style={{ fontFamily: 'Dancing Script' }}>
        Crafting Experiences, Delivering Hospitality Since 1987
      </p>
    </div>
  </div>

  {/* Gradient Fade to Our Journey Background */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0d2b24]" />
</div>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-20 bg-[#0d2b24] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 tracking-widest text-sm mb-3">✦ OUR OFFERINGS ✦</p>
            <h2 className="text-4xl font-serif mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Comprehensive Catering Solutions
            </h2>
            <div className="w-24 h-0.5 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <span className="text-4xl mb-2 block">{service.icon}</span>
                      <h3 className="text-white text-2xl font-serif">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-white mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-50">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0b2620] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {serviceStats.map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-4xl md:text-5xl font-serif text-yellow-400 mb-2">{stat.value}</p>
                <p className="text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="relative py-20 px-6 md:px-20 bg-[#0b2620] text-white bg-cover bg-center bg-no-repeat bg-fixed"
      
      style={{
          backgroundImage: "url('/img/setup/1 (43).jpeg')",
        }}
        >
            {/* Background Blur Layer (behind content) */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full backdrop-blur-xs bg-black/70" />
        </div>
        <div className="relative  z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 tracking-widest text-sm mb-3">✦ OUR PROCESS ✦</p>
            <h2 className="text-4xl font-serif mb-4" style={{ fontFamily: 'Playfair Display' }}>
              How We Create Your Perfect Event
            </h2>
            <div className="w-24 h-0.5 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
              <h3 className="text-xl font-serif mb-2">Consultation</h3>
              <p className="">We discuss your vision, preferences, and requirements</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
              <h3 className="text-xl font-serif mb-2">Menu Planning</h3>
              <p className="">Customized menu options tailored to your event</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
              <h3 className="text-xl font-serif mb-2">Logistics Setup</h3>
              <p className="">Complete arrangements from kitchen to serving</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">4</div>
              <h3 className="text-xl font-serif mb-2">Execution</h3>
              <p className="">Flawless service from start to finish</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-20 bg-[#0d2b24] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ fontFamily: 'Playfair Display' }}>
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl mb-8">
            Lets discuss how we can make your occasion truly special with our catering services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-yellow-500 text-black px-8 py-3 text-lg font-medium hover:bg-yellow-600 transition rounded"
            >
              GET A QUOTE
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a 
              href="tel:+919875618558" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 text-lg font-medium hover:bg-white/10 transition rounded"
            >
              CALL NOW
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}