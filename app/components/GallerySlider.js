"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Modal from "react-modal";

// Array of gallery image paths
const images = Array.from({ length: 10 }, (_, i) => `/img/setup/1 (${i + 1}).jpeg`);

export default function GallerySlider() {
  const scrollRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // Modal fix for Next.js hydration
  useEffect(() => {
    if (typeof window !== "undefined") {
      const appRoot = document.getElementById("__next") || document.body;
      Modal.setAppElement(appRoot);
    }

    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: scrollRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-[#0d2b24] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-yellow-400 tracking-widest text-sm mb-3">✦ GALLERY ✦</p>
          <h2
            className="text-4xl text-white font-serif mb-4"
            style={{ fontFamily: "var(--font-libre-caslon)" }}
          >
            Banerjee Caterers Gallery
          </h2>
        </div>

        {/* Scrollable Slider */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scroll-smooth hide-scrollbar pb-4"
        >
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="relative min-w-[300px] md:min-w-[400px] h-[300px] md:h-[400px] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer group"
            >
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-300" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => openModal(modalIndex)}
            className="inline-block border border-yellow-400 text-yellow-400 px-6 py-2 text-sm hover:bg-yellow-400 hover:text-black transition rounded"
          >
            VIEW FULL GALLERY
          </button>
        </div>

        {/* Modal for image */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="relative h-full w-full max-w-6xl mx-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              ✕
            </button>

            <div className="relative h-full flex items-center justify-center">
              <Image
                src={images[modalIndex]}
                alt={`Expanded ${modalIndex + 1}`}
                width={1200}
                height={800}
                className="max-h-[90vh] object-contain"
              />
            </div>
          </div>
        </Modal>

        {/* Global Modal & Scrollbar CSS */}
        <style jsx global>{`
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.9);
            z-index: 1000;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            outline: none;
          }
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.75);
            z-index: 999;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
}
