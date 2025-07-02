"use client"

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('regular');
  const [activeSubTab, setActiveSubTab] = useState('budget');
  const [viewingPdf, setViewingPdf] = useState(null);

  // PDF file paths
  const pdfFiles = {
    regular: {
      budget: [
        "/pdf/STANDARD 1 (3).pdf",
        "/pdf/STANDARD 2 (1).pdf",
        "/pdf/STANDARD 3 (1).pdf",
        "/pdf/STANDARD 4 (1).pdf",
        "/pdf/SUPERIOR 1 (1).pdf",
        "/pdf/SUPERIOR 2 (1).pdf",
        "/pdf/SUPERIOR 3 (1).pdf",
        "/pdf/SUPERIOR 4 (1).pdf",
        "/pdf/SUPREME 1 (1).pdf",
        "/pdf/SUPREME 2 (1).pdf",
        "/pdf/SUPREME 3 (1).pdf",
      ],
      premium: [
        "/pdf/SIGNATURE 1 (1).pdf",
        "/pdf/SIGNATURE 2 (1).pdf",
        "/pdf/SIGNATURE 3 (1).pdf",
        "/pdf/REGEL 2 (1).pdf",
        "/pdf/REGEL 3 (1).pdf",
        "/pdf/REGEL 1 (1).pdf",
        "/pdf/GRANDE 1 (1).pdf",
        "/pdf/GRANDE 2 (1).pdf",
      ]
    },
    corporate: [
      "/pdf/CORPORATE BENGALI.pdf",
      "/pdf/CORPORATE CHINESE.pdf",
      "/pdf/CORPORATE CONTINENTAL.pdf",
      "/pdf/CORPORATE INDIAN.pdf",
    ]
  };

  const openPdfViewer = (pdfUrl) => {
    setViewingPdf(pdfUrl);
  };

  const closePdfViewer = () => {
    setViewingPdf(null);
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

      {/* PDF Viewer Modal */}
      {viewingPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-6xl max-h-screen">
            <button
              onClick={closePdfViewer}
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 z-50 hover:bg-red-600 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={`${viewingPdf}#view=fitH`}
              className="w-full h-full border-none"
              title="PDF Viewer"
            />
          </div>
        </div>
      )}

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
            <h1 className="text-4xl md:text-6xl font-serif mb-4">
              Our Menus
            </h1>
            <p className="text-xl md:text-2xl italic">
              Crafting Culinary Experiences
            </p>
          </div>
        </div>
      
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0d2b24]" />
      </div>

      <section className="bg-[#0d2b24] text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Tabs */}
          <div className="flex justify-center border-b border-[#22483f] mb-12">
            <button
              className={`px-6 py-3 font-medium ${activeTab === 'regular' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => {
                setActiveTab('regular');
                setActiveSubTab('budget');
              }}
            >
              Regular Events
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === 'corporate' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setActiveTab('corporate')}
            >
              Corporate Events
            </button>
          </div>

          {/* Sub Tabs for Regular */}
          {activeTab === 'regular' && (
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'regular' ? (
              // Regular menu PDFs
              pdfFiles.regular[activeSubTab].map((pdf, index) => (
                <div key={index} className="bg-[#10332a] border border-[#22483f] p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 mb-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-lg font-medium mb-2 text-center">
                      {pdf.split('/').pop().replace('.pdf', '').replace(/_/g, ' ')}
                    </h3>
                    <button
                      onClick={() => openPdfViewer(pdf)}
                      className="inline-block border border-yellow-400 text-yellow-400 px-4 py-2 text-sm hover:bg-yellow-400 hover:text-black transition rounded"
                    >
                      View PDF
                    </button>
                  </div>
                </div>
              ))
            ) : (
              // Corporate menu PDFs
              pdfFiles.corporate.map((pdf, index) => (
                <div key={index} className="bg-[#10332a] border border-[#22483f] p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 mb-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-lg font-medium mb-2 text-center">
                      {pdf.split('/').pop().replace('.pdf', '').replace(/_/g, ' ')}
                    </h3>
                    <button
                      onClick={() => openPdfViewer(pdf)}
                      className="inline-block border border-yellow-400 text-yellow-400 px-4 py-2 text-sm hover:bg-yellow-400 hover:text-black transition rounded"
                    >
                      View PDF
                    </button>
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