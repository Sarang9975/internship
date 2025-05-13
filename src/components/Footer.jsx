import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-5 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Company Info */}
        <div>
          <img src="/logo.png" alt="Company Logo" className="mb-3 w-20" />
          <p className="text-gray-400 mb-4">Classic cuts with modern style</p>
          <div className="flex space-x-3">
            <a href="#" className="bg-yellow-700 text-black p-2 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="bg-yellow-700 text-black p-2 rounded-full">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#" className="hover:text-yellow-400">Gallery</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white font-semibold mb-4">Contact Us</h2>
          <p className="flex items-start text-gray-400 mb-2">
            <span className="text-yellow-400 mr-2">📍</span> 
            518 Acme St unit 101, Denton, TX 76205, United States
          </p>
          <p className="text-gray-400">+1 940-808-1569</p>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-400 mb-2">Subscribe to our newsletter to receive updates and news.</p>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 mb-3 bg-black border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-5 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm px-4">
        <p className="mb-2 md:mb-0">© 2023 PMC Barbershop. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">About</a>
          <a href="#" className="hover:text-yellow-400">Services</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
