import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t  text-[#3a2e2b] pt-16 pb-10 font-sans">

   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6">
        
        {/* Newsletter */}
        <div className="md:col-span-2 ">
          <h3 className="text-2xl font-semibold mb-4">Join Our Newsletter</h3>
          <p className="text-sm text-gray-600 mb-2">
            Be the first to hear about new arrivals, exclusive offers, and special events.
          </p>
          <p className="text-sm text-gray-600 mb-5">
            Sign up and get <span className="font-semibold text-[#c05038]">10% off</span> your first order.
          </p>
          <form className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#c05038] transition-all"
              required
            />
            <button
              type="submit"
              className="bg-[#c05038] text-white px-6 py-3 text-sm rounded-r-md hover:bg-[#a8432e] transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#" className="hover:text-[#c05038] transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#c05038] transition">Shipping Info</a></li>
            <li><a href="#" className="hover:text-[#c05038] transition">Returns</a></li>
            <li><a href="#" className="hover:text-[#c05038] transition">FAQs</a></li>
          </ul>
        </div>

        {/* Social Links with Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#c05038] transition text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#c05038] transition text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#c05038] transition text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#c05038] transition text-lg">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500 px-6">
        © {new Date().getFullYear()} Rabbit Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


//[{-

