import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { text: 'Home', href: '#' },
    { text: 'Restaurant Partner', href: '#' },
    { text: 'Delivery Partner', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/hungreli.india?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#1F2229] mx-4 sm:mx-8 md:mx-16 lg:mx-32 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-0 lg:flex-row justify-between items-start lg:items-center">
          {/* Brand Section */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h2 className="text-white text-xl sm:text-2xl font-extrabold tracking-wide uppercase">
              Hungreli
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm font-medium tracking-wide leading-relaxed">
              Beat the Hunger Stay Hungreli!
            </p>
            <button className="bg-amber-400 text-gray-900 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md sm:rounded-lg 
              font-semibold text-xs sm:text-sm hover:bg-amber-500 transition-all duration-300 
              hover:shadow-lg w-fit tracking-wide uppercase">
              contact us
            </button>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-300 hover:text-amber-400 transition-all duration-300"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="w-full lg:w-auto">
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-start sm:items-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 
                      text-xs sm:text-sm font-medium tracking-wide hover:tracking-wider block"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;