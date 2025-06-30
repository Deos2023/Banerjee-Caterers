"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I book Banerjee Caterers for my event?",
      answer: "You can reach out through our Contact Form, call us directly, or send us a WhatsApp message. We'll discuss your event details, share menu options, and confirm availability."
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
    <section className="bg-[#0d2b24] text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-yellow-400 tracking-widest text-sm mb-3">✦ HAVE QUESTIONS? ✦</p>
          <h2 className="text-4xl font-serif mb-4" style={{ fontFamily: 'Playfair Display' }}>
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-0.5 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-[#22483f] rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className={`w-full flex justify-between items-center p-6 text-left focus:outline-none ${activeIndex === index ? 'bg-[#10332a]' : 'bg-[#0d2b24] hover:bg-[#10332a]'}`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-medium ">{faq.question}</h3>
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
                className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-6 pt-5 text-gray-300 whitespace-pre-line text-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Still have questions? We'd love to hear from you!</p>
          <Link 
            href="/contact" 
            className="inline-block border border-yellow-400 text-yellow-400 px-8 py-3 text-sm font-medium hover:bg-yellow-400 hover:text-black transition rounded"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
}