"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
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
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-[#0d2b24]/90 shadow-lg backdrop-blur-md"
            : "bg-transparent"
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

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 items-center text-sm">
          <li>
            <Link 
              href="/" 
              className={`hover:text-yellow-400 transition relative ${isActive('/') ? 'text-yellow-400' : ''}`}
            >
              HOME
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
              )}
            </Link>
          </li>
          <li>
            <Link 
              href="/menu" 
              className={`hover:text-yellow-400 transition relative ${isActive('/menu') ? 'text-yellow-400' : ''}`}
            >
              MENUS
              {isActive('/menu') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
              )}
            </Link>
          </li>
          <li>
            <Link 
              href="/gallery" 
              className={`hover:text-yellow-400 transition relative ${isActive('/gallery') ? 'text-yellow-400' : ''}`}
            >
              GALLERY
              {isActive('/gallery') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
              )}
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`hover:text-yellow-400 transition relative ${isActive('/about') ? 'text-yellow-400' : ''}`}
            >
              ABOUT US
              {isActive('/about') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
              )}
            </Link>
          </li>
          <li>
            <Link 
              href="/services" 
              className={`hover:text-yellow-400 transition relative ${isActive('/services') ? 'text-yellow-400' : ''}`}
            >
              SERVICES
              {isActive('/services') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
              )}
            </Link>
          </li>
          <li className="relative group">
            <button
              onClick={() => toggleSubmenu("pages")}
              className={`flex items-center hover:text-yellow-400 transition relative ${pathname.startsWith('/pages') ? 'text-yellow-400' : ''}`}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              {pathname.startsWith('/pages') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
              )}
            </button>
            <div
              className={`absolute top-full left-0 w-48 bg-white text-[#0d2b24] rounded-md shadow-lg py-2 transition-all duration-300 ${
                openSubmenu === "pages" ? "opacity-100" : "opacity-0 invisible"
              }`}
            >
              <Link
                href="/reviews"
                className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/reviews') ? 'font-medium bg-gray-50' : ''}`}
                onClick={closeAllMenus}
              >
                Reviews
              </Link>
              <Link
                href="/faq"
                className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/faq') ? 'font-medium bg-gray-50' : ''}`}
                onClick={closeAllMenus}
              >
                FAQ
              </Link>
            </div>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`hover:text-yellow-400 transition relative ${isActive('/contact') ? 'text-yellow-400' : ''}`}
            >
              CONTACT
              {isActive('/contact') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
              )}
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className={`bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition-all font-medium ${isActive('/contact') ? 'ring-2 ring-yellow-400' : ''}`}
          >
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-60">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeAllMenus}
          />
        )}

        {/* Mobile Sidebar - Fixed with solid background */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#0d2b24] shadow-xl z-[60] transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
          style={{
            backgroundColor: '#0d2b24',
            boxShadow: '-5px 0 15px rgba(0,0,0,0.3)'
          }}
        >
          <div className="flex flex-col h-full p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={closeAllMenus}
                className="p-2 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex-1">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className={`block py-2 text-lg hover:text-yellow-400 ${isActive('/') ? 'text-yellow-400' : ''}`}
                    onClick={closeAllMenus}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className={`block py-2 text-lg hover:text-yellow-400 ${isActive('/menu') ? 'text-yellow-400' : ''}`}
                    onClick={closeAllMenus}
                  >
                    MENUS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className={`block py-2 text-lg hover:text-yellow-400 ${isActive('/gallery') ? 'text-yellow-400' : ''}`}
                    onClick={closeAllMenus}
                  >
                    GALLERY
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`block py-2 text-lg hover:text-yellow-400 ${isActive('/about') ? 'text-yellow-400' : ''}`}
                    onClick={closeAllMenus}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className={`block py-2 text-lg hover:text-yellow-400 ${isActive('/services') ? 'text-yellow-400' : ''}`}
                    onClick={closeAllMenus}
                  >
                    SERVICES
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => toggleSubmenu("mobile-pages")}
                    className={`flex items-center py-2 text-lg hover:text-yellow-400 w-full justify-between ${pathname.startsWith('/pages') ? 'text-yellow-400' : ''}`}
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`pl-4 overflow-hidden transition-all duration-300 ${
                      openSubmenu === "mobile-pages"
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <Link
                      href="/reviews"
                      className={`block py-2 hover:text-yellow-400 ${isActive('/reviews') ? 'text-yellow-400' : ''}`}
                      onClick={closeAllMenus}
                    >
                      Reviews
                    </Link>
                    <Link
                      href="/faq"
                      className={`block py-2 hover:text-yellow-400 ${isActive('/faq') ? 'text-yellow-400' : ''}`}
                      onClick={closeAllMenus}
                    >
                      FAQ
                    </Link>
                  </div>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`block py-2 text-lg hover:text-yellow-400 ${isActive('/contact') ? 'text-yellow-400' : ''}`}
                    onClick={closeAllMenus}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile CTA Button */}
            <div className="mt-auto pt-6">
              <Link
                href="/contact"
                className={`block w-full text-center bg-yellow-500 text-black px-4 py-3 rounded hover:bg-yellow-600 transition font-medium ${isActive('/contact') ? 'ring-2 ring-yellow-400' : ''}`}
                onClick={closeAllMenus}
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {scrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#0d2b24] text-white p-3 rounded-full shadow-lg hover:bg-[#0d2b24]/90 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
        <a 
          href="https://wa.me/917278425042" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 group"
          aria-label="WhatsApp"
        >
          <svg
            className="w-5 h-5 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </a>
        <a 
          href="tel:+919875618558" 
          className="bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 group"
          aria-label="Call"
        >
          <svg
            className="w-5 h-5 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </a>
      </div>

      {/* Left Side Social Buttons */}
      <div className="fixed bottom-6 left-6 z-50 hidden md:flex flex-col gap-4">
        <a 
          href="https://www.facebook.com/banerjeecaterers?mibextid=ZbWKwL" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#001eff] text-white p-3 rounded-full shadow-lg hover:bg-[#0d2b24]/90 transition-all duration-300 group"
          aria-label="Facebook"
        >
          <svg
            className="w-5 h-5 group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a 
          href="https://www.instagram.com/banerjeecaterers?igsh=eXNkMXV2bGxwZHJ0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#cb005b] text-white p-3 rounded-full shadow-lg hover:bg-[#0d2b24]/90 transition-all duration-300 group"
          aria-label="Instagram"
        >
          <svg
            className="w-5 h-5 group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a 
          href="https://youtube.com/@banerjeecaterers?si=h8Mck2Zd4-kQGKF0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#cc0202] text-white p-3 rounded-full shadow-lg hover:bg-[#0d2b24]/90 transition-all duration-300 group"
          aria-label="YouTube"
        >
          <svg
            className="w-5 h-5 group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </>
  );
}