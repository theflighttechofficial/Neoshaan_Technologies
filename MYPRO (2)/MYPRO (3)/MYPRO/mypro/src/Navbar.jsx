import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-indigo-950 text-white shadow-md border-b border-indigo-800 px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-2xl font-semibold text-white">
        Neo<span className="text-[#26c48d]">Tech</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center justify-center gap-20 list-none flex-1">
        <li>
          <Link to="/" className="hover:text-[#26c48d] transition-all text-white text-base font-medium">
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="hover:text-[#26c48d] transition-all text-white text-base font-medium">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-[#26c48d] transition-all text-white text-base font-medium">
            Services
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-[#26c48d] transition-all text-white text-base font-medium">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/team" className="hover:text-[#26c48d] transition-all text-white text-base font-medium">
            Team
          </Link>
        </li>
         <li>
          <Link to="/ieee-projects" className="hover:text-[#26c48d] transition-all text-white text-base font-medium">
            IEEE Projects
          </Link>
        </li>
        <li>
          <Link to="/courses-offered" className="hover:text-[#26c48d] transition-all text-white text-base font-medium">
            Courses Offered
          </Link>
        </li>
      </ul>

      {/* Desktop Contact Button */}
      <Link
        to="/contact"
        className="hidden md:inline-block bg-[#26c48d] text-white px-4 py-2 font-medium rounded-tr-xl rounded-bl-xl transition hover:bg-white hover:text-[#26c48d]"
      >
        Contact us
      </Link>

      {/* Mobile Hamburger */}
      <div
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md border border-indigo-800 bg-indigo-900 cursor-pointer gap-1.5"
        onClick={toggleMenu}
      >
        <span className="w-6 h-[3px] bg-white rounded"></span>
        <span className="w-6 h-[3px] bg-white rounded"></span>
        <span className="w-6 h-[3px] bg-white rounded"></span>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute md:hidden top-16 right-0 w-full bg-indigo-950 px-6 py-4 flex flex-col gap-4 transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <li><Link to="/" className="text-white text-base font-medium block">Home</Link></li>
        <li><Link to="/aboutus" className="text-white text-base font-medium block">About</Link></li>
        <li><Link to="/services" className="text-white text-base font-medium block">Services</Link></li>
        <li><Link to="/projects" className="text-white text-base font-medium block">Projects</Link></li>
        <li><Link to="/team" className="text-white text-base font-medium block">Team</Link></li>
        <li><Link to="/ieee-projects" className="text-white text-base font-medium block">IEEE Projects</Link></li>
        <li><Link to="/courses-offered" className="text-white text-base font-medium block">Courses Offered</Link></li>
        <li>
          <Link to="/contact" className="block bg-[#26c48d] text-white text-center py-2 font-medium rounded-tr-xl rounded-bl-xl hover:bg-white hover:text-[#26c48d]">
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
