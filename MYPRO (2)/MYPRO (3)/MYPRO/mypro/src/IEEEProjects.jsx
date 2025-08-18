import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaCode, FaBrain, FaCogs, FaNetworkWired, FaMicrochip, FaChartBar } from 'react-icons/fa';

const IEEEProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  const projects = [
    {
      id: 'python-ieee-projects',
      icon: FaBrain,
      title: 'Python IEEE Projects',
      description: 'Data Science, Machine Learning, Artificial Intelligence, Deep Learning, CNN, ANN etc.',
      color: 'from-yellow-400 to-amber-500',
      topics: ['Data Science', 'Machine Learning', 'AI', 'Deep Learning', 'CNN', 'ANN']
    },
    {
      id: 'java-ieee-projects',
      icon: FaCode,
      title: 'Java IEEE Projects',
      description: 'Cloud Computing, Machine Learning, Big Data, Networking, Wireless Communications, IoT and more.',
      color: 'from-blue-500 to-indigo-600',
      topics: ['Cloud Computing', 'Networking', 'IoT', 'Mobile Computing', 'Data Mining']
    },
    {
      id: 'dotnet-ieee-projects',
      icon: FaCogs,
      title: 'Dotnet IEEE Projects',
      description: 'Cloud Computing, Machine Learning, Big Data, Networking, Wireless Communications, IoT and more.',
      color: 'from-green-500 to-teal-600',
      topics: ['Cloud Computing', 'IoT', 'Networking', 'Web Services', 'Data Mining']
    },
    {
      id: 'matlab-ieee-projects',
      icon: FaChartBar,
      title: 'MATLAB Image Processing IEEE Projects',
      description: 'Image Processing, Video Processing, Machine Learning, CNN, ANN, Deep Learning etc.',
      color: 'from-pink-500 to-rose-500',
      topics: ['Image Processing', 'Video Processing', 'Deep Learning', 'CNN', 'ANN']
    },
    {
      id: 'machine-learning-ieee-projects',
      icon: FaBrain,
      title: 'Machine Learning IEEE Projects',
      description: 'Machine Learning Projects.',
      color: 'from-purple-500 to-pink-500',
      topics: ['Regression', 'Classification', 'Clustering', 'NLP', 'Computer Vision']
    },
    {
      id: 'ns2-ieee-projects',
      icon: FaNetworkWired,
      title: 'NS2 IEEE Projects',
      description: 'Wireless Sensor Networks, MANET, VANET, Wireless Networks etc.',
      color: 'from-indigo-500 to-blue-600',
      topics: ['WSN', 'MANET', 'VANET', 'Wireless Networks']
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
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <>
      <Navbar />
      <section className="py-24 md:py-32 bg-gradient-to-b from-indigo-900 to-purple-300 relative overflow-hidden w-full">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
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
              IEEE{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">Projects</span>
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-20 md:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"
            />

            <p className="text-base md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed px-2">
              Explore our wide range of IEEE projects in Python, Java, Dotnet, MATLAB, Machine Learning, and networking domains.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
          >
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative bg-white/80 backdrop-blur-xl border border-purple-200 rounded-2xl p-6 sm:p-8 h-full transition-all duration-500 group-hover:border-pink-400">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4 flex items-center justify-center"
                    >
                      <Icon size={48} className="text-purple-700" />
                    </motion.div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-pink-600 mb-3 sm:mb-4 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-700 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-5 sm:mb-6">
                      {project.topics.map((topic, topicIndex) => (
                        <motion.div
                          key={topicIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.1 + topicIndex * 0.1 }}
                          className="flex items-center gap-2 text-xs sm:text-sm text-gray-500"
                        >
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                          {topic}
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate(`/ieee-projects/${project.id}`)}
                      className="w-full bg-gradient-to-r from-purple-200 to-pink-200 hover:from-purple-500 hover:to-pink-600 text-purple-900 hover:text-white py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl font-semibold transition-all duration-300 border border-purple-300 hover:border-pink-500 group/btn"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Read More
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

export default IEEEProjects;
