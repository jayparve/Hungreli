import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/White-Hungreli-Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "https://docs.google.com/forms/d/e/1FAIpQLScY9r9RXtoKT54dvIYZbGUCVNAtbNg99uXBahlcEfKuYcP1bw/viewform", text: "Restaurant Partner" },
    { href: "https://docs.google.com/forms/d/e/1FAIpQLSdT4I38XByy4_tkkLD-qHkEyjArbq0mvDSnFlLXoARRvkr5cQ/viewform", text: "Delivery Partner" },
  ];

  return (
    <nav className="bg-gray-900 py-4 rounded-b-xl mx-4 sm:mx-8 md:mx-16 lg:mx-32 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img 
              src={Logo} 
              alt="Logo" 
              className="h-4 w-auto md:h-6 lg:h-8 object-contain"
            />
          </div>

          {/* Desktop Navigation (lg screens) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-white text-base font-medium hover:text-gray-300 transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Contact Button (lg screens) */}
          <div className="hidden lg:block">
            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium 
              transform transition-all duration-300 ease-in-out
              hover:bg-orange-700 hover:scale-105 hover:shadow-lg
              active:scale-95 active:bg-orange-800
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900">
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button (sm and md screens) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (sm and md screens) */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6">
            <div className="flex flex-col space-y-5 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200"
                >
                  {link.text}
                </a>
              ))}
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium
                transform transition-all duration-300 ease-in-out
                hover:bg-orange-700 hover:scale-105 hover:shadow-lg
                active:scale-95 active:bg-orange-800
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900
                w-full">
                Contact us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;