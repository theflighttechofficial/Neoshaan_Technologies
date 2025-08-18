import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  FaChalkboardTeacher, FaFileAlt, FaCode,
  FaDraftingCompass, FaPencilRuler, FaShoppingCart, FaBullhorn, FaProjectDiagram
} from 'react-icons/fa';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const services = [
    {
      id: 'web-design',
      icon: FaPencilRuler,
      title: 'Web Design',
      description: 'Crafting beautiful, responsive websites that engage and convert your audience.',
      features: ['Responsive Layouts', 'User Experience', 'Conversion Focused']
    },
    {
      id: 'web-development',
      icon: FaCode,
      title: 'Web Development',
      description: 'Building fast, secure, and scalable web applications tailored to your needs.',
      features: ['Full-Stack Development', 'API Integration', 'Performance Optimization']
    },
    {
      id: 'ui-ux-design',
      icon: FaDraftingCompass,
      title: 'UI/UX Design',
      description: 'Designing intuitive and user-friendly interfaces for seamless digital experiences.',
      features: ['Wireframes & Prototypes', 'User Research', 'Interaction Design']
    },
    {
      id: 'paper-publication',
      icon: FaFileAlt,
      title: 'Paper Publication',
      description: 'Guidance on writing, formatting, and publishing academic research in top journals.',
      features: ['IEEE/UGC/Scopus', 'Formatting Support', 'Submission Guidance']
    },
    {
      id: 'digital-marketing',
      icon: FaBullhorn,
      title: 'Digital Marketing',
      description: 'Boosting your brand visibility and driving business growth through digital channels.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy']
    },
    {
      id: 'ecommerce',
      icon: FaShoppingCart,
      title: 'Ecommerce Solutions',
      description: 'Build scalable ecommerce websites tailored to your brand and sales goals.',
      features: ['Online Storefront', 'Payment Integration', 'Order Management']
    },
    {
      id: 'ieee-projects',
      icon: FaProjectDiagram,
      title: 'IEEE Projects',
      description: 'Get complete IEEE final-year project kits, code, and documentation with training.',
      features: ['Code + PPT + Report', 'Hardware & Software', 'Domain Guidance']
    },
    {
      id: 'training-development',
      icon: FaChalkboardTeacher,
      title: 'Training & Development',
      description: 'Empowering students and professionals with hands-on workshops and personalized mentorship.',
      features: ['Technical & Soft Skills', 'Certified Trainers', 'Placement Support']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      <Navbar />
      <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-indigo-900 to-purple-400 relative overflow-hidden w-full">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-pink-400/10 rounded-full blur-3xl"></div>
        </div>

        <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Premium{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">Services</span>
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-20 md:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"
            />

            <p className="text-base md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed px-2">
              Neoshaan Technologies offers a complete suite of services — from web design to cybersecurity and digital marketing — to help you create, secure, and grow your digital presence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
               <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative"
                >
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color || 'from-purple-300/10 to-pink-300/10'} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    <div className="relative bg-white/80 backdrop-blur-xl border border-indigo-200 rounded-2xl p-6 sm:p-8 h-full transition-all duration-500 group-hover:border-pink-400">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4 flex items-center justify-center"
                      >
                        <Icon size={48} className="text-indigo-700" />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-pink-600 mb-3 sm:mb-4 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-700 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-5 sm:mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 }}
                            className="flex items-center gap-2 text-xs sm:text-sm text-gray-500"
                          >
                            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                            {feature}
                          </motion.div>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(`/services/${service.id}`)}
                        className="w-full bg-gradient-to-r from-indigo-200 to-pink-200 hover:from-indigo-500 hover:to-pink-600 text-indigo-900 hover:text-white py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl font-semibold transition-all duration-300 border border-indigo-300 hover:border-pink-500"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Read More
                          <ArrowUpRight className="transition-transform duration-200" size={16} />
                        </span>
                      </motion.button>
                    </div>
                  </>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;