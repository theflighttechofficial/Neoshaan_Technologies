import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

const courseDetails = {
  'python-programming': {
    title: 'Python Programming',
    longDescription:
      'This course covers Python fundamentals from variables and control flow to OOPs. You will work on hands-on mini projects to apply your learning.',
    topics: [
      'Variables, Data Types & Operators',
      'Control Flow (if, for, while)',
      'Functions & Modules',
      'Object-Oriented Programming',
      'File Handling',
      'Mini Projects'
    ]
  },
  'web-development': {
    title: 'Full Stack Web Development',
    longDescription:
      'Learn to create complete web applications using MERN stack. You’ll build frontend with React, backend APIs with Node.js and MongoDB.',
    topics: [
      'HTML, CSS, JS',
      'React.js Components & Hooks',
      'Node.js and Express.js',
      'MongoDB & Mongoose',
      'REST API Integration',
      'Full Deployment'
    ]
  },
  'cloud-computing': {
    title: 'Cloud Computing with AWS',
    longDescription:
      'Explore core AWS services like EC2, S3, Lambda, and IAM. Learn to deploy and manage secure cloud infrastructure with real-time use cases.',
    topics: [
      'Cloud Basics & AWS Overview',
      'EC2 Instances & S3 Storage',
      'IAM & Security Best Practices',
      'Lambda Functions',
      'Hands-on Setup Demos'
    ]
  },
  'data-science': {
    title: 'Data Science & ML',
    longDescription:
      'Learn data wrangling, visualization and machine learning with Python. Build real-world ML models and deploy them.',
    topics: [
      'NumPy & Pandas',
      'Data Visualization with Matplotlib/Seaborn',
      'Supervised & Unsupervised ML',
      'Scikit-learn',
      'Model Evaluation & Deployment'
    ]
  },
  'networking': {
    title: 'Computer Networking',
    longDescription:
      'Understand how data travels over networks. Learn OSI layers, IP addressing, routers, switches, and simulate networks with tools.',
    topics: [
      'OSI & TCP/IP Models',
      'IP Addressing & Subnetting',
      'Switching & Routing',
      'DHCP, DNS, NAT',
      'Packet Tracer Hands-on'
    ]
  },
  'android-development': {
    title: 'Android App Development',
    longDescription:
      'Build mobile apps using Android Studio, Java/Kotlin. Learn UI design, Firebase integration, and how to publish to the Play Store.',
    topics: [
      'Android Studio Setup',
      'Activities & UI Components',
      'Kotlin Basics / Java Intro',
      'Firebase Realtime Database',
      'App Publishing'
    ]
  },
  'uiux-design': {
    title: 'UI/UX Design',
    longDescription:
      'Master the fundamentals of user interface and experience design using tools like Figma. Learn wireframing, prototyping, and usability testing.',
    topics: [
      'Design Principles',
      'User Research & Personas',
      'Wireframing in Figma',
      'Prototyping & Animation',
      'Usability Testing'
    ]
  },
  'corporate-training': {
    title: 'Corporate Training',
    longDescription:
      'Customized training for teams in areas like software, cloud, communication skills, and leadership delivered by industry experts.',
    topics: [
      'Custom Tech Curriculum',
      'Soft Skills Modules',
      'Leadership Programs',
      'Team-building Exercises',
      'Expert Mentorship'
    ]
  }
};

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courseDetails[courseId];

  useEffect(() => {
    if (!course) navigate('/courses');
  }, [course, navigate]);

  return (
    <>
      <Navbar />

<div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-400 px-4 pt-24 pb-10 flex justify-center">
  <div className="bg-white shadow-xl rounded-xl p-6 sm:p-10 max-w-3xl w-full">
    <h1 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-4">{course?.title}</h1>
    <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
      {course?.longDescription}
    </p>

    <h3 className="text-xl font-semibold text-pink-700 mb-3">Key Topics Covered:</h3>
    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
      {course?.topics.map((topic, index) => (
        <li key={index}>{topic}</li>
      ))}
    </ul>

    <div className="flex justify-center">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>
    </div>
  </div>
</div>

<Footer />


    </>
  );
};

export default CourseDetails;