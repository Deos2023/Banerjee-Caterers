"use client"

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContactSec() {
  const [activeTab, setActiveTab] = useState('social');
  const [activeSubTab, setActiveSubTab] = useState('budget');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    guestCount: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendWhatsAppMessage = () => {
    const { name, phone, eventType, guestCount, message } = formData;
    const text = `Hello Banerjee Caterers,\n\nI'm interested in your catering services:\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Event Type:* ${eventType}\n*Guest Count:* ${guestCount}\n*Message:* ${message}\n\nPlease contact me to discuss further.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/917278425042?text=${encodedText}`, '_blank');
  };

  // ... (previous menu data and JSX remains the same until the end of the page)

  return (
    <>
      {/* ... (All previous sections remain exactly the same) ... */}

      {/* WhatsApp Contact Form Section */}
      <section className="bg-[#10332a] text-white py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 tracking-widest text-sm mb-3">✦ DIRECT CONTACT ✦</p>
            <h2 className="text-3xl font-serif mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Message Us Directly on WhatsApp
            </h2>
            <div className="w-20 h-0.5 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Fill this form to send us a direct WhatsApp message. We typically respond within 30 minutes during business hours.
            </p>
          </div>

          <div className="bg-[#0d2b24] p-8 rounded-lg border border-[#22483f] shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#10332a] border border-[#22483f] rounded py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#10332a] border border-[#22483f] rounded py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                  placeholder="WhatsApp Number"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Event Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full bg-[#10332a] border border-[#22483f] rounded py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                  required
                >
                  <option value="">Select Event Type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Corporate">Corporate Event</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Religious">Religious Function</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Approx. Guest Count</label>
                <input
                  type="number"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full bg-[#10332a] border border-[#22483f] rounded py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                  placeholder="Number of Guests"
                  min="1"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#10332a] border border-[#22483f] rounded py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                  rows="4"
                  placeholder="Tell us about your event, dietary requirements, or any special requests..."
                ></textarea>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={sendWhatsAppMessage}
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded font-medium transition"
                disabled={!formData.name || !formData.phone || !formData.eventType}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                SEND VIA WHATSAPP
              </button>
              <p className="text-gray-400 text-sm mt-4">
                By clicking this button, you'll start a chat with us on WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}