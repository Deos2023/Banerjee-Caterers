"use client"

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I book Banerjee Caterers for my event?",
      answer: "You can reach out through our Contact Form, call us directly, or send us a WhatsApp message. We&apos;ll discuss your event details, share menu options, and confirm availability."
    },
    {
      question: "What types of events do you cater to?",
      answer: "We cater to a wide range of events including:\n\n• Weddings & Receptions\n• Pujas & Rituals\n• Birthdays & Anniversaries\n• Corporate Events\n• Housewarming Ceremonies\n• Outdoor & Themed Parties"
    },
    {
      question: "Do you offer both vegetarian and non-vegetarian menus?",
      answer: "Yes, we have extensive vegetarian and non-vegetarian menus. Custom combinations can be tailored based on guest preferences and cultural requirements."
    },
    {
      question: "Can we customize the menu according to our preferences?",
      answer: "Absolutely! Customization is our strength. You can mix and match from our categories like Crispy Carnival, Steamy Affair, Bengali Bhuribhoj, Italian Fiesta, and more."
    },
    {
      question: "Is tasting available before booking?",
      answer: "Yes, we offer tasting sessions for large-scale events upon request. This helps you choose dishes confidently."
    },
    {
      question: "How early should we book our event?",
      answer: "We recommend booking at least 4–6 months in advance, especially for peak seasons like wedding months and festivals. However, we also accommodate last-minute requests based on availability."
    },
    {
      question: "Do you provide on-site serving staff and setup?",
      answer: "Yes, we provide a full-service experience including setup, live counters (if needed), and professional serving staff. We ensure seamless hospitality from start to finish."
    },
    {
      question: "Do you handle outstation or destination events?",
      answer: "Yes, but within West Bengal."
    },
    {
      question: "Is there a minimum or maximum guest limit?",
      answer: "We cater to events starting from 50 guests up to 1000+ guests. Every menu is scalable while maintaining quality and service."
    },
    {
      question: "How is pricing calculated?",
      answer: "Pricing is based on:\n\n• Menu items selected\n• Number of guests\n• Type of service (buffet, live counters, plated service, etc.)\n• Location and logistics\n\nWe provide clear quotations with no hidden costs."
    },
    {
      question: "Do you offer themed or regional menus (like Bengali, Punjabi, South Indian)?",
      answer: "Yes, we specialize in curated regional menus. Our Bengali Bhuribhoj is a customer favorite, and we also offer Punjabi, South Indian, Mughlai, Continental, Chinese, and fusion themes."
    },
    {
      question: "Can you accommodate dietary restrictions (Jain, vegan, gluten-free)?",
      answer: "Yes, we are sensitive to dietary needs. Just let us know in advance—our chefs can craft Jain, vegan, gluten-free, or allergy-friendly options without compromising on taste."
    },
    {
      question: "What is your cancellation or refund policy?",
      answer: "Cancellations made 30 days prior to the event are eligible for partial refunds based on the terms agreed upon during booking. Closer to the event, refunds are subject to the stage of preparation. We always strive to be fair and transparent."
    },
    {
      question: "Can you help us plan the menu based on our event type and budget?",
      answer: "Of course! Our catering consultants will guide you in crafting a menu that suits your event type, guest preferences, and budget—while maintaining variety and quality."
    },
    {
      question: "Do you provide tableware, cutlery, and decorations?",
      answer: "Yes, we can provide:\n\n• Plates, bowls, and cutlery (disposable or premium)\n• Buffet setup and live counter decor\n• Thematic food display styling (on request)\n\nDecoration beyond food service (like floral, stage, or venue decor) can be arranged via our trusted partners"
    }
  ];

  return (
    <>
      <Head>
        <title>FAQs | Banerjee Caterers</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-[#0d2b24]/90 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4" >
              FAQs
            </h1>
            <p className="text-xl md:text-2xl italic" >
              Answers to your most common questions
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-[#0d2b24] text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 tracking-widest text-sm mb-3">✦ HAVE QUESTIONS? ✦</p>
            <h2 className="text-4xl font-serif mb-4" >
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-0.5 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-[#22483f] rounded-lg overflow-hidden transition-all duration-300 hover:border-yellow-400/50"
              >
                <button
                  className={`w-full flex justify-between items-center p-6 text-left focus:outline-none transition-colors duration-300 ${activeIndex === index ? 'bg-[#10332a]' : 'bg-[#0d2b24] hover:bg-[#10332a]'}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <h3 className="font-medium text-lg md:text-xl">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  id={`faq-${index}`}
                  className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
                  aria-hidden={activeIndex !== index}
                >
                  <div className="p-6 pt-0 text-gray-300 whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6 text-lg">Still have questions? We&apos;d love to hear from you!</p>
            <Link 
              href="/contact" 
              className="inline-flex items-center border-2 border-yellow-400 text-yellow-400 px-8 py-3 text-lg font-medium hover:bg-yellow-400 hover:text-black transition rounded"
            >
              CONTACT US
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#10332a] text-white py-20 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6" >
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-xl mb-8">
            Get in touch with our catering specialists to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-yellow-500 text-black px-8 py-3 text-lg font-medium hover:bg-yellow-600 transition rounded"
            >
              BOOK NOW
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a 
              href="tel:+919875618558" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 text-lg font-medium hover:bg-white/10 transition rounded"
            >
              CALL US
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