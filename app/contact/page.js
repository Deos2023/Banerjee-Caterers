"use client"

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    headcount: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  
  // Determine which WhatsApp number to use based on event date urgency
  const eventDate = new Date(formData.eventDate);
  const today = new Date();
  const daysDifference = Math.floor((eventDate - today) / (1000 * 60 * 60 * 24));
  
  // Use emergency number if event is within 7 days, otherwise official number
  const whatsappNumber = daysDifference <= 7 ? '919874049030' : '917278425042';
  
  const whatsappMessage = 
    `New Booking Request:\n\n` +
    `*Name*: ${formData.name}\n` +
    `*Phone*: ${formData.phone}\n` +
    `*Email*: ${formData.email}\n` +
    `*Event Type*: ${formData.eventType}\n` +
    `*Event Date*: ${formData.eventDate}\n` +
    `*Location*: ${formData.location}\n` +
    `*Headcount*: ${formData.headcount}\n` +
    `*Additional Details*: ${formData.message}`;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  
  setFormData({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    headcount: '',
    message: ''
  });
};

  return (
    <>
      <Head>
        <title>Contact Banerjee Caterers | Get in Touch</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/img/setup/1 (41).jpeg"
          alt="Banerjee Caterers Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4" >
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl italic" >
              Get in touch for your next memorable event
            </p>
          </div>
        </div>
      
        {/* Gradient Fade to Our Journey Background */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0d2b24]" />
      </div>

      {/* Main Contact Section */}
      <section className="bg-[#0d2b24] text-white py-16 px-6 md:px-20 ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif mb-8 " >
              Get in Touch
            </h2>
            
            {/* Emergency Booking Banner */}
            <div className="bg-red-600 text-white p-4 rounded-lg mb-8">
              <h3 className="text-xl font-medium mb-2">Emergency Last Minute Booking?</h3>
              <p className="mb-3">Need catering for an event happening soon? Contact us immediately via WhatsApp:</p>
              <a 
                href="https://wa.me/919874049030" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white text-red-600 rounded hover:bg-gray-100 transition font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                WhatsApp Emergency Booking: +91 98740 49030
              </a>
            </div>
            
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone Numbers */}
              <div className="flex items-start">
                <div className="bg-[#0d2b24] p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium  mb-2">Call Us</h3>
                  <div className="space-y-2">
                    <a href="tel:+919875618558" className="block text-gray-300 hover:text-white transition">
                      +91 98756 18558
                    </a>
                    <a href="tel:+919143172470" className="block text-gray-300 hover:text-white transition">
                      +91 91431 72470
                    </a>
                    <a href="tel:+919874049030" className="block text-gray-300 hover:text-white transition">
                      +91 98740 49030 (Emergency)
                    </a>
                  </div>
                  <div className="mt-4">
                    <a 
                      href="tel:+919875618558" 
                      className="inline-flex items-center px-4 py-2 bg-white text-[#0d2b24] rounded hover:bg-gray-100 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Click to Call
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-[#0d2b24] p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium  mb-2">Email Us</h3>
                  <a href="mailto:banerjeecaterers@gmail.com" className="text-gray-300 hover:text-white transition">
                    banerjeecaterers@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start">
                <div className="bg-[#0d2b24] p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium  mb-2">WhatsApp</h3>
                  <a href="https://wa.me/917278425042" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                    +91 72784 25042 (Official WhatsApp)
                  </a>
                  <div className="mt-4">
                    <a 
                      href="https://wa.me/917278425042" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start">
                <div className="bg-[#0d2b24] p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium  mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/banerjeecaterers?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/banerjeecaterers?igsh=eXNkMXV2bGxwZHJ0" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://youtube.com/@banerjeecaterers?si=h8Mck2Zd4-kQGKF0" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Now Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-serif mb-6 text-gray-800" >
              Book Your Event
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#0d2b24] focus:border-[#0d2b24] outline-none text-gray-800 transition"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded text-gray-800 focus:ring-2 focus:ring-[#0d2b24] focus:border-[#0d2b24] outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 text-gray-800 rounded focus:ring-2 focus:ring-[#0d2b24] focus:border-[#0d2b24] outline-none transition"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 text-gray-800 rounded focus:ring-2 focus:ring-[#0d2b24] focus:border-[#0d2b24] outline-none transition"
                    >
                      <option value="">Select Event Type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Corporate">Corporate Event</option>
                      <option value="Religious">Religious Function</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 text-gray-800 rounded focus:ring-2 focus:ring-[#0d2b24] focus:border-[#0d2b24] outline-none transition"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Event Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 text-gray-800 rounded focus:ring-2 focus:ring-[#0d2b24] focus:border-[#0d2b24] outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="headcount" className="block text-sm font-medium text-gray-700 mb-1">Expected Headcount</label>
                    <input
                      type="number"
                      id="headcount"
                      name="headcount"
                      value={formData.headcount}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 text-gray-800 rounded focus:ring-2 focus:ring-[#0d2b24] focus:border-[#0d2b24] outline-none transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 text-gray-800 rounded focus:ring-2 focus:ring-[#0d2b24] focus:border-[#0d2b24] outline-none transition"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#0d2b24] text-white py-3 px-6 rounded hover:bg-[#10332a] transition font-medium"
                  >
                    Submit Booking Request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      
      <section className="w-full h-[500px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7717763250143!2d88.39450819999999!3d22.5127444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271e4a7d236f5%3A0x1d4a89f219d047f3!2sBanerjee%20Caterers%20and%20Event%20Management-Kasba%20Branch!5e0!3m2!1sen!2sin!4v1751272263287!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Banerjee Caterers Location"
        ></iframe>
      </section>

      {/* Branches Section */}
      <section className="py-16 px-6 md:px-20 bg-[#11382f] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif mb-12 text-center " >
            Our Branches
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Branch */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-serif mb-4 text-[#0d2b24]">Main Branch</h3>
              <p className="text-gray-600 mb-4">Belgachhia, Kolkata</p>
              <p className="text-gray-600 mb-4">West Bengal</p>
              <a href="tel:+919875618558" className="text-[#0d2b24] hover:underline">+91 98756 18558</a>
            </div>
            
            {/* Kasba Branch */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-serif mb-4 text-[#0d2b24]">Kasba Branch</h3>
              <p className="text-gray-600 mb-4">Kasba, Kolkata</p>
              <p className="text-gray-600 mb-4">West Bengal</p>
              <a href="tel:+919143172470" className="text-[#0d2b24] hover:underline">+91 91431 72470</a>
            </div>
            
            {/* Emergency Contact */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-serif mb-4 text-[#0d2b24]">Emergency Contact</h3>
              <p className="text-gray-600 mb-4">For last minute bookings</p>
              <p className="text-gray-600 mb-4">Available 24/7</p>
              <a href="tel:+919874049030" className="text-[#0d2b24] hover:underline">+91 98740 49030</a>
              <div className="mt-4">
                <a 
                  href="https://wa.me/919874049030" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
                >
                  WhatsApp Emergency
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}