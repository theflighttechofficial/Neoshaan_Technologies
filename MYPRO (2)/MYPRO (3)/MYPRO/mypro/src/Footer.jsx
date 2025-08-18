import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-indigo-950 text-white px-4 py-10 border-t border-indigo-800 font-sans">
        <div className="w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-20 max-w-screen mx-auto">
          
          {/* Column 1 - Short Links */}
          <div>
            <h3 className="text-[#26c48d] text-lg mb-4 border-b-2 border-[#26c48d] inline-block pb-1">
              Short Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#26c48d] transition">About us</a></li>
              <li><a href="#" className="hover:text-[#26c48d] transition">Terms Of Use</a></li>
              <li><a href="#" className="hover:text-[#26c48d] transition">Our Services</a></li>
              <li><a href="#" className="hover:text-[#26c48d] transition">Our Projects</a></li>
              <li><a href="#" className="hover:text-[#26c48d]transition">Latest Blog</a></li>
            </ul>
          </div>

          {/* Column 2 - Help Links */}
          <div>
            <h3 className="text-[#26c48d] text-lg mb-4 border-b-2 border-[#26c48d] inline-block pb-1">
              Help Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#26c48d] transition">Contact us</a></li>
              <li><a href="#" className="hover:text-[#26c48d] transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#26c48d] transition">Helps</a></li>
              <li><a href="#" className="hover:text-[#26c48d] transition">FOAs</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-[#26c48d] text-lg mb-4 border-b-2 border-[#26c48d] inline-block pb-1">
              Contact Us
            </h3>
            <div className="text-sm text-gray-300 leading-relaxed space-y-2">
              <p>Vijayawada, India</p>
              <p>+91-6305269800</p>
              <p>neoshaantechnologies@gmail.com</p>
            </div>
          </div>

          {/* Column 4 - Social Media */}
          <div>
            <h3 className="text-[#26c48d] text-lg mb-4 border-b-2 border-[#26c48d] inline-block pb-1">
              Follow Us
            </h3>
            <div className="flex gap-5 mt-2 text-xl text-gray-300">
              <a href="#" className="hover:text-[#26c48d] transition"><FaLinkedin /></a>
              <a href="#" className="hover:text-[#26c48d] transition"><FaInstagram /></a>
              <a href="#" className="hover:text-[#26c48d] transition"><FaFacebook /></a>
              <a href="#" className="hover:text-[#26c48d] transition"><FaTwitter /></a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-12 pt-6 border-t border-indigo-800">
          &copy; {new Date().getFullYear()} Neoshaan Technologies. All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
