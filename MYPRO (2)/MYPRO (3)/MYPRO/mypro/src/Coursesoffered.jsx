import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  FaPython, FaReact, FaAws, FaDatabase,
  FaNetworkWired, FaAndroid, FaLaptopCode, FaChalkboardTeacher
} from 'react-icons/fa';

const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const courses = [
    {
      id: 'python-programming',
      icon: FaPython,
      title: 'Python Programming',
      description: 'Master the fundamentals of Python with hands-on projects and real-world examples.',
      color: 'from-yellow-400 to-orange-500',
      features: ['Basics to OOPs', 'File Handling', 'Mini Projects']
    },
    {
      id: 'web-development',
      icon: FaReact,
      title: 'Full Stack Web Development',
      description: 'Build modern web applications using React, Node.js, MongoDB and Express.',
      color: 'from-sky-400 to-blue-600',
      features: ['Frontend + Backend', 'REST API', 'Deployment Skills']
    },
    {
      id: 'cloud-computing',
      icon: FaAws,
      title: 'Cloud Computing with AWS',
      description: 'Learn to deploy, manage, and scale cloud apps with Amazon Web Services.',
      color: 'from-orange-500 to-yellow-600',
      features: ['EC2, S3, Lambda', 'Security & IAM', 'Live Demo Setup']
    },
    {
      id: 'data-science',
      icon: FaDatabase,
      title: 'Data Science & ML',
      description: 'Analyze data, build ML models, and gain insights using Python and libraries.',
      color: 'from-pink-500 to-purple-600',
      features: ['Pandas & NumPy', 'Scikit-learn', 'Model Deployment']
    },
    {
      id: 'networking',
      icon: FaNetworkWired,
      title: 'Computer Networking',
      description: 'Understand the OSI model, networking protocols, and setup basic networks.',
      color: 'from-emerald-500 to-green-600',
      features: ['TCP/IP, DNS, DHCP', 'Packet Tracing', 'Firewall Basics']
    },
    {
      id: 'android-development',
      icon: FaAndroid,
      title: 'Android App Development',
      description: 'Create mobile apps using Android Studio and Java/Kotlin.',
      color: 'from-lime-500 to-green-500',
      features: ['UI Design', 'Firebase Integration', 'Play Store Publishing']
    },
    {
      id: 'uiux-design',
      icon: FaLaptopCode,
      title: 'UI/UX Design',
      description: 'Learn to design user-centric digital interfaces with Figma and Adobe XD.',
      color: 'from-indigo-400 to-purple-500',
      features: ['Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      id: 'corporate-training',
      icon: FaChalkboardTeacher,
      title: 'Corporate Training',
      description: 'Upskill your team with custom programs in tech, communication & more.',
      color: 'from-pink-400 to-rose-500',
      features: ['Customized Curriculum', 'Soft Skills', 'Industry Experts']
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
      <section id="courses" className="py-24 md:py-32 bg-gradient-to-b from-indigo-900 to-purple-400 relative overflow-hidden w-full">
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
              Career-Focused{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">Courses</span>
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-20 md:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"
            />

            <p className="text-base md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed px-2">
              Neoshaan IT Solutions offers hands-on, industry-relevant training to launch or upgrade your tech career.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
          >
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${course.color || 'from-purple-300/10 to-pink-300/10'} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative bg-white/80 backdrop-blur-xl border border-indigo-200 rounded-2xl p-6 sm:p-8 h-full transition-all duration-500 group-hover:border-pink-400">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4 flex items-center justify-center"
                    >
                      <Icon size={48} className="text-indigo-700" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-pink-600 mb-3 sm:mb-4 transition-colors duration-300">
                      {course.title}
                    </h3>

                    <p className="text-gray-700 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">
                      {course.description}
                    </p>

                    <div className="space-y-2 mb-5 sm:mb-6">
                      {course.features.map((feature, featureIndex) => (
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
                      onClick={() => navigate(`/courses/${course.id}`)}
                      className="w-full bg-gradient-to-r from-indigo-200 to-pink-200 hover:from-indigo-500 hover:to-pink-600 text-indigo-900 hover:text-white py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl font-semibold transition-all duration-300 border border-indigo-300 hover:border-pink-500"
                    >
                      <span className="flex items-center justify-center gap-2">
                        View Details
                        <ArrowUpRight className="transition-transform duration-200" size={16} />
                      </span>
                    </motion.button>
                  </div>
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

export default Courses;