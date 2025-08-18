import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import teamImage from "./assets/Header0.png";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Unified Section with Vertical Gradient Background */}
      <section className="bg-gradient-to-b from-indigo-900 to-indigo-600 text-white w-full">
        {/* HERO SECTION */}
        <header className="relative overflow-hidden py-16 w-full flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row max-w-[1200px] w-full px-4 mx-auto gap-8">
            <div className="w-full max-w-xl pt-10">
              <h2 className="text-[#00ffae] text-4xl md:text-5xl font-bold mb-6">
                Quality Digital Services You Really Need!
              </h2>
              <p className="text-white/80 text-base mb-6">
                Neoshaan Technologies is a pioneering firm dedicated to cutting-edge
                innovations in technology solutions.
              </p>
              <button
                onClick={() => navigate("/ieee-projects")}
                className="bg-[#00ffae] text-black font-semibold py-3 px-6 rounded-tl-xl rounded-br-xl hover:bg-black hover:text-white border hover:border-white transition-all flex items-center gap-2"
              >
                Explore Projects <FaArrowRight />
              </button>
            </div>

            <div className="flex justify-center md:justify-end mt-10 md:mt-0">
              <div className="relative w-[300px] md:w-[450px]">
                <img
                  src={teamImage}
                  alt="Team"
                  className="rounded-lg shadow-lg relative z-10 translate-y-[5%] md:translate-y-[10%] w-full"
                />
                <img
                  src={teamImage}
                  alt="Team shadow"
                  className="rounded-lg shadow-lg absolute top-3 left-3 opacity-50 z-0 translate-y-[10%] translate-x-[5%] w-full"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Separator */}
        <div className="h-1 bg-[#00ffae] w-full my-8"></div>

        {/* ABOUT */}
        <section className="py-16 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-[#00ffae]">Neoshaan Technologies</span>
          </h2>
          <p className="max-w-3xl mx-auto text-white/80 mb-6">
            We are a passionate team delivering bespoke IT solutions across various industries.
            Our expertise ranges from software development and digital marketing
            to innovative tech consulting.
          </p>
          <button
            onClick={() => navigate("/aboutus")}
            className="bg-[#00ffae] text-black font-semibold py-2 px-5 rounded-tl-xl rounded-br-xl hover:bg-black hover:text-white border hover:border-white transition-all"
          >
            Learn More
          </button>
        </section>

        {/* Separator */}
        <div className="h-1 bg-[#00ffae] w-full my-8"></div>

        {/* SERVICES */}
        <section className="py-16 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00ffae] mb-10">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {["Web Development", "Digital Marketing", "UI/UX Design"].map(
              (service, i) => (
                <div
                  key={i}
                  className="bg-white/10 p-8 rounded-xl hover:scale-105 transition transform duration-300 cursor-pointer"
                >
                  <h3 className="text-xl font-semibold mb-4 text-[#00ffae]">
                    {service}
                  </h3>
                  <p className="text-white/80">
                    Brief info about {service}. We deliver quality solutions tailored
                    to your business needs.
                  </p>
                </div>
              )
            )}
          </div>
          <button
            onClick={() => navigate("/services")}
            className="mt-8 bg-[#00ffae] text-black font-semibold py-2 px-5 rounded-tl-xl rounded-br-xl hover:bg-black hover:text-white border hover:border-white transition-all"
          >
            View All Services
          </button>
        </section>

        {/* Separator */}
        <div className="h-1 bg-[#00ffae] w-full my-8"></div>

        {/* COURSES */} 
<section className="py-16 px-4 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-[#00ffae] mb-10">
    Courses Offered
  </h2>
  <p className="max-w-3xl mx-auto text-white/80 mb-8">
    Explore our career-accelerating courses designed for hands-on learning and real-world applications.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      "Python Programming",
      "Full Stack Web Development",
      "Cloud Computing with AWS"
    ].map((course, i) => (
      <div
        key={i}
        className="bg-white/10 p-8 rounded-xl hover:scale-105 transition transform duration-300 cursor-pointer"
      >
        <h3 className="text-xl font-semibold mb-4 text-[#00ffae]">
          {course}
        </h3>
        <p className="text-white/80">
          Learn {course.toLowerCase()} through expert-led sessions and practical projects tailored for your success.
        </p>
      </div>
    ))}
  </div>
  <button
    onClick={() => navigate("/coursesoffered")}
    className="mt-8 bg-[#00ffae] text-black font-semibold py-2 px-5 rounded-tl-xl rounded-br-xl hover:bg-black hover:text-white border hover:border-white transition-all"
  >
    View All Courses
  </button>
</section>


        {/* Separator */}
        <div className="h-1 bg-[#00ffae] w-full my-8"></div>

        {/* TESTIMONIALS */}
        <section className="py-16 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00ffae] mb-10">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{ name: "name", quote: "comment." }, { name: "name", quote: "comment." }, { name: "name", quote: "comment." }].map((t, i) => (
              <div
                key={i}
                className="bg-white/10 p-8 rounded-xl hover:scale-105 transition transform duration-300"
              >
                <p className="text-white/80 mb-4">"{t.quote}"</p>
                <h4 className="text-[#00ffae] font-semibold">{t.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Separator */}
        <div className="h-1 bg-[#00ffae] w-full my-8"></div>

        {/* STATS */}
        <section className="py-16 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00ffae] mb-10">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{ label: "Happy Clients", value: "125+" }, { label: "Successful Projects", value: "25+" }, { label: "Years of Experience", value: "10+" }].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 p-8 rounded-xl hover:scale-105 transition transform duration-300"
              >
                <h3 className="text-4xl text-[#00ffae] font-bold mb-2">{stat.value}</h3>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Separator */}
        <div className="h-1 bg-[#00ffae] w-full my-8"></div>

        {/* CTA */}
        <section className="py-16 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-xl mx-auto text-white/80 mb-6">
            Contact Neoshaan Technologies today and let us help you achieve your digital goals.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#00ffae] text-black font-semibold py-3 px-6 rounded-tl-xl rounded-br-xl hover:bg-black hover:text-white border hover:border-white transition-all"
          >
            Contact Us
          </button>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;