// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium">
              &copy; {new Date().getFullYear()} Hospital Management System. All rights reserved.
            </p>
          </div>

          {/* Center Section */}
          <div className="text-center">
            <ul className="flex space-x-4">
              <li>
                <a href="/about" className="hover:text-gray-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-gray-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <p className="text-sm">
              Designed with ❤️ by Your Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;