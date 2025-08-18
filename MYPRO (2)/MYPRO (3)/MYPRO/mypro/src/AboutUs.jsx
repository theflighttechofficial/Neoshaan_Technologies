import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="
          bg-gradient-to-b from-indigo-900 to-purple-400
          text-white
          w-full
          pt-24
          pb-10 sm:pb-12 md:pb-16
        "
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl pb-2 md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-tight"> 
                Innovation, Integrity, Impact.
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-indigo-100 mb-6">
                At Neoshaan Technologies, we believe in crafting technology solutions that transform businesses and improve lives. Join us on our journey to redefine the future.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-base md:text-lg rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-b from-purple-400 to-purple-500 py-10 md:py-16 w-full">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="./src/assets/AboutUs.jpg"
              alt="About Neoshaan"
              className="rounded shadow-lg w-full max-w-full h-auto border border-purple-300"
            />
          </div>
          <div>
            <h2 className="text-5xl font-extrabold pb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-pink-500 mb-20 tracking-wide drop-shadow-lg select-none">
          About Us
        </h2>
            <p className="text-base md:text-lg text-indigo-100 mb-6 leading-relaxed">
              Welcome to <span className="font-semibold text-purple-900">Neoshaan Technologies</span>, where innovation meets excellence. As a pioneering firm dedicated to cutting-edge technology solutions, we aim to redefine industry standards by specializing in bespoke software development, robust IT infrastructure, and advanced digital transformation services. Our team of experts is committed to delivering high-quality, tailored services that empower businesses and individuals alike.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;