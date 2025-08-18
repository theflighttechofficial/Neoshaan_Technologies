import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactPage = () => {
  useEffect(() => {
    const spinner = document.getElementById('spinner');
    if (spinner) {
      spinner.style.display = 'none';
    }

    const form = document.querySelector('.contact-form');
    if (form) {
      const handleSubmit = async (e) => {
        e.preventDefault();

        const inputs = form.querySelectorAll('input');
        const textarea = form.querySelector('textarea');

        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const project = inputs[2].value.trim();
        const message = textarea.value.trim();

        if (!name || !email || !message) {
          alert('Please fill in all required fields: Name, Email, and Message.');
          return;
        }

        try {
          const response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, project, message }),
          });

          if (response.ok) {
            alert('Your message has been sent!');
            form.reset();
          } else {
            alert('Something went wrong. Please try again.');
          }
        } catch (error) {
          console.error(error);
          alert('Error sending message.');
        }
      };

      form.addEventListener('submit', handleSubmit);
      return () => {
        form.removeEventListener('submit', handleSubmit);
      };
    }
  }, []);

  return (
    <div className="font-inter bg-gradient-to-b from-indigo-900 to-purple-300 text-white">
      <Navbar />

      {/* Spinner */}
      <div
        id="spinner"
        className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-75"
      >
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Contact Section */}
      <div className="py-16 mt-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto pb-10">
            <h5 className="text-pink-300 font-medium">Get In Touch</h5>
            <h1 className="text-3xl font-bold mb-4 text-purple-100">
              Contact for any query
            </h1>
           
          </div>

          <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Address */}
              <div className="flex bg-indigo-900 p-4 rounded-lg">
                <div className="flex-shrink-0 bg-pink-500 rounded-full w-16 h-16 flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-white text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-purple-200 font-medium">Address</h4>
                  <a
                    href="https://maps.app.goo.gl/YfApz9RGjqvQNFFe8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-purple-300 hover:text-pink-400"
                  >
                    Eluru
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex bg-indigo-900 p-4 rounded-lg">
                <div className="flex-shrink-0 bg-pink-500 rounded-full w-16 h-16 flex items-center justify-center">
                  <i className="fa fa-phone text-white text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-purple-200 font-medium">Call Us</h4>
                  <a
                    href="tel:+91-6305249800"
                    className="text-lg text-purple-300 hover:text-pink-400"
                  >
                    +91-6305249800
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex bg-indigo-900 p-4 rounded-lg">
                <div className="flex-shrink-0 bg-pink-500 rounded-full w-16 h-16 flex items-center justify-center">
                  <i className="fa fa-envelope text-white text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-purple-200 font-medium">Email Us</h4>
                  <a
                    href="mailto:neoshaantechnologies@gmail.com"
                    className="text-lg text-purple-300 hover:text-pink-400"
                  >
                    neoshaantechnologies@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-full rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full min-h-[400px] rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.2368585463517!2d80.6507351!3d16.2431577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a060db12e8245%3A0xb06a73cc2ebdec8b!2s1%2C%20Vemulapalli%20Street%2C%20Nandulpet%2C%20Tenali%2C%20Andhra%20Pradesh%20522201!5e0!3m2!1sen!2sin!4v1719841038413!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

               <form className="bg-indigo-900 bg-opacity-10 p-8 rounded-lg contact-form">
                <div className="mb-6">
                  <input
                     type="text"
                     className="w-full px-4 py-3 border-0 bg-gray-900 text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                 />
               </div>
               <div className="mb-6">
                 <input
                    type="email"
                    className="w-full px-4 py-3 border-0 bg-gray-900 text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Email"
                 />
                </div>
                <div className="mb-6">
                  <input
                   type="text"
                   className="w-full px-4 py-3 border-0 bg-gray-900 text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-primary"
                   placeholder="Project"
                 />
               </div>
               <div className="mb-6">
                 <textarea
                   className="w-full px-4 py-3 border-0 bg-gray-900 text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-primary"
                   rows="6"
                   placeholder="Message"
                 ></textarea>
               </div>
               <div className="text-left">
                 <button
                   type="submit"
                   className="bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded transition duration-300"
                   >
                   Send Message
                 </button>
               </div>
              </form>

            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default ContactPage;
