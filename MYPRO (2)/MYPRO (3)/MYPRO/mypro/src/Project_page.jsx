import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import Navbar from './Navbar';
import Footer from './Footer';

const projects = [
  {
    title: 'Neokart',
    description:
      'An ecommerce platform for buying and selling products with a sleek UI, secure payments, and diverse product listings.',
    icon: <FaLaptopCode size={56} className="text-purple-900" />,
    color: 'from-indigo-300 to-blue-600',
    url: 'https://neokart.co.in/category.php?cid=18',
  },
  {
    title: 'IJRCET',
    description:
      'A peer-reviewed journal in computer engineering and technology, publishing cutting-edge research articles and papers.',
    icon: <MdOutlineMarkEmailRead size={56} className="text-purple-900" />,
    color: 'from-pink-500 to-purple-600',
    url: 'https://ijrcet.in/',
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-b from-indigo-900 to-purple-400 pt-32 pb-20 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center min-h-screen w-full">
        <h2 className="text-5xl font-extrabold pb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-20 tracking-wide drop-shadow-lg select-none">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full max-w-screen-xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl shadow-xl transform transition-transform duration-300 ease-in-out
                hover:scale-[1.06] hover:shadow-2xl
                focus:scale-[1.06] focus:shadow-2xl
                outline-none focus:ring-4 focus:ring-pink-300
                flex flex-col items-center text-center"
            >
              <div
                className="mb-6 animate-fadeInDown"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {project.icon}
              </div>
              <h3 className="text-3xl font-semibold mb-5 text-white drop-shadow-md group-hover:text-pink-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-md text-purple-100 mb-8 max-w-md">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation-name: fadeInDown;
          animation-duration: 0.6s;
          animation-fill-mode: both;
          animation-timing-function: ease-out;
        }
      `}</style>
    </>
  );
}
