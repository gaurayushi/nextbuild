  import React from 'react';
  import { TbBrandMeta } from 'react-icons/tb';
  import { IoLogoInstagram } from 'react-icons/io';
  import { RiTwitterXLine } from 'react-icons/ri';

  const Topbar = () => {
    return (
      <div className=" text-[#5e4b44] text-sm shadow-sm border-b  font-sans ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2 md:py-1 gap-2 md:gap-0">
          
          {/* Social Icons */}
          <div className="flex items-center gap-3 text-[#bfa8a0] ">
            <a href="#" className="hover:text-[#d28b77] transition duration-200">
              <TbBrandMeta className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-[#dc84ad] transition duration-200">
              <IoLogoInstagram className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-[#89b8cf] transition duration-200">
              <RiTwitterXLine className="h-4 w-4" />
            </a>
          </div>

          {/* Message */}
          <div className="text-center text-xs text-[#7a6a63] tracking-wide ">
            Free Shipping • Secure Checkout • 24/7 Support
          </div>

          {/* Phone */}
          <div className="text-xs font-medium">
            <a href="tel:+123456790" className="hover:text-[#3b2f2f] transition">
              +1 (123) 454-090
              
            </a>
            
          </div>
        </div>
      </div>
    );
  };

  export default Topbar;
