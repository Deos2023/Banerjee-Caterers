"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileMenuOpen]);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const isActive = (href) => pathname === href;

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 py-3 transition-all duration-300 ${
          scrolled ? "bg-[#0d2b24]/90 shadow-lg backdrop-blur-md" : "bg-transparent"
        } text-white`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 z-60">
          <Link href="/" onClick={closeAllMenus}>
            <Image
              src="/logo.png"
              alt="Banerjee Caterers Logo"
              width={80}
              height={80}
              className="h-16 md:h-20 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center text-sm">
          {[
            { label: "HOME", href: "/" },
            { label: "MENUS", href: "/menu" },
            { label: "GALLERY", href: "/gallery" },
            { label: "ABOUT US", href: "/about" },
            { label: "SERVICES", href: "/services" },
            { label: "CONTACT", href: "/contact" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:text-yellow-400 transition relative ${
                  isActive(item.href) ? "text-yellow-400" : ""
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400" />
                )}
              </Link>
            </li>
          ))}

          <li className="relative group">
            <button
              onClick={() => toggleSubmenu("pages")}
              className={`flex items-center hover:text-yellow-400 transition relative ${
                pathname.startsWith("/pages") ? "text-yellow-400" : ""
              }`}
            >
              PAGES
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${
                  openSubmenu === "pages" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`absolute top-full left-0 w-48 bg-white text-[#0d2b24] rounded-md shadow-lg py-2 transition-all duration-300 ${
                openSubmenu === "pages" ? "opacity-100" : "opacity-0 invisible"
              }`}
            >
              <Link href="/reviews" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">
                Reviews
              </Link>
              <Link href="/faq" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">
                FAQ
              </Link>
            </div>
          </li>
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className={`bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition font-medium ${
              isActive("/contact") ? "ring-2 ring-yellow-400" : ""
            }`}
          >
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden z-60">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeAllMenus} />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0d2b24] shadow-xl z-[60] transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button onClick={closeAllMenus} className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex-1">
            <ul className="space-y-4">
              {[
                { label: "HOME", href: "/" },
                { label: "MENUS", href: "/menu" },
                { label: "GALLERY", href: "/gallery" },
                { label: "ABOUT US", href: "/about" },
                { label: "SERVICES", href: "/services" },
                { label: "CONTACT", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeAllMenus}
                    className={`block py-2 text-lg text-white hover:text-yellow-400 ${
                      isActive(item.href) ? "text-yellow-400" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Pages Submenu */}
              <li>
                <button
                  onClick={() => toggleSubmenu("mobile-pages")}
                  className={`flex items-center py-2 text-lg text-white hover:text-yellow-400 w-full justify-between ${
                    openSubmenu === "mobile-pages" ? "text-yellow-400" : ""
                  }`}
                >
                  PAGES
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${
                      openSubmenu === "mobile-pages" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`pl-4 overflow-hidden transition-all duration-300 ${
                    openSubmenu === "mobile-pages" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <Link href="/reviews" onClick={closeAllMenus} className="block py-2 text-white hover:text-yellow-400">
                    Reviews
                  </Link>
                  <Link href="/faq" onClick={closeAllMenus} className="block py-2 text-white hover:text-yellow-400">
                    FAQ
                  </Link>
                </div>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="pt-6">
            <Link
              href="/contact"
              onClick={closeAllMenus}
              className={`block w-full text-center bg-yellow-500 text-black px-4 py-3 rounded hover:bg-yellow-600 transition font-medium ${
                isActive("/contact") ? "ring-2 ring-yellow-400" : ""
              }`}
            >
              BOOK NOW
            </Link>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://www.facebook.com/banerjeecaterers?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1837ff] text-white p-2.5 rounded-full shadow-lg hover:bg-[#0d2b24]/90 transition duration-300 group"
              aria-label="Facebook"
            >
              <FaFacebookF className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/banerjeecaterers?igsh=eXNkMXV2bGxwZHJ0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff186d] text-white p-2.5 rounded-full shadow-lg hover:bg-[#0d2b24]/90 transition duration-300 group"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://youtube.com/@banerjeecaterers?si=h8Mck2Zd4-kQGKF0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#af0303] text-white p-2.5 rounded-full shadow-lg hover:bg-[#0d2b24]/90 transition duration-300 group"
              aria-label="YouTube"
            >
              <FaYoutube className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
