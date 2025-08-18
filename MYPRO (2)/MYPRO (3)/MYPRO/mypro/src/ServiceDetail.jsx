import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const services = [
  {
    id: 'web-design',
    title: 'Web Design',
    content: 'Craft aesthetically pleasing and responsive websites that provide a smooth user experience. We focus on visuals, layout, and brand consistency to make your site not just look great but also convert visitors into customers.',
    features: [
      'Responsive Layouts: Adapts perfectly across desktop, tablet, and mobile devices.',
      'User Experience: Simplified navigation and faster access to content.',
      'Conversion Focused: Strategically optimized elements to convert visitors into leads or customers.'
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    content: 'We build secure, fast, and scalable websites and web apps tailored to your unique business goals. From custom front-end interfaces to robust back-end systems, we ensure performance and reliability.',
    features: [
      'Full-Stack Development: From UI to databases, we handle it all.',
      'API Integration: Seamlessly connect your app with third-party tools.',
      'Performance Optimization: Faster load times and SEO-friendly architecture.'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    content: 'Our UI/UX experts create user-centered designs that prioritize clarity, efficiency, and usability. We deliver wireframes, prototypes, and complete interface designs based on user behavior and feedback.',
    features: [
      'Wireframes & Prototypes: Blueprint to visualize user journey.',
      'User Research: Design decisions backed by behavioral insights.',
      'Interaction Design: Animations, gestures, and flows for seamless experiences.'
    ]
  },
  {
    id: 'paper-publication',
    title: 'Paper Publication',
    content: 'Get expert assistance in preparing and publishing your academic or research papers. We help with topic selection, formatting, plagiarism checking, submission, and publication in IEEE, UGC, Scopus, and other reputed journals.',
    features: [
      'IEEE/UGC/Scopus: Publish in high-impact journals.',
      'Formatting Support: Templates, citations, styles handled.',
      'Submission Guidance: We assist through peer-review and acceptance.'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    content: 'We help you grow online visibility and customer engagement through SEO, social media marketing, Google Ads, and content strategies — all tailored to your target audience and business objectives.',
    features: [
      'SEO Optimization: Improve your Google rankings.',
      'Social Media Marketing: Grow followers and engagement on all platforms.',
      'Content Strategy: Blogs, posts, and newsletters that convert.'
    ]
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Solutions',
    content: 'Launch a powerful ecommerce platform with features like online payment integration, order tracking, inventory management, and responsive product listings. Our goal is to drive conversions and streamline online sales.',
    features: [
      'Online Storefront: Customized for your brand.',
      'Payment Integration: Secure UPI, cards, wallets support.',
      'Order Management: Admin dashboard with full control.'
    ]
  },
  {
    id: 'ieee-projects',
    title: 'IEEE Projects',
    content: 'We provide end-to-end support for IEEE final-year academic projects, including idea selection, coding, documentation, reports, and presentations. Choose from domains like IoT, AI, ML, cloud, cybersecurity, and more.',
    features: [
      'Code + PPT + Report: Complete project kit.',
      'Hardware & Software: Full assistance across both platforms.',
      'Domain Guidance: Help with trending and relevant domains.'
    ]
  },
  {
    id: 'training-development',
    title: 'Training & Development',
    content: 'Enhance your technical and soft skills with our certified training programs. We offer hands-on workshops, mentorship, and placement support for students, professionals, and corporate teams across various domains.',
    features: [
      'Technical & Soft Skills: Full-stack, cloud, AI, and soft skills.',
      'Certified Trainers: Learn from real-world industry experts.',
      'Placement Support: Resume building, mock interviews, job connections.'
    ]
  }
];

const ServiceDetail = () => {
  const { id } = useParams();

  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-100 text-white flex flex-col justify-center items-center px-4 py-20 w-screen">
          <h1 className="text-4xl font-bold mb-6 text-pink-300">Service Not Found</h1>
          <button
            onClick={() => window.history.back()}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition"
          >
            Go Back
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-300 text-white flex flex-col items-center px-4 py-20 w-screen">
        <h1 className="text-4xl font-bold mb-6 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-normal overflow-visible">
          {service.title}
        </h1>
        <p className="text-lg leading-relaxed max-w-3xl text-center text-purple-100 mb-8 pb-[2px]">
          {service.content}
        </p>

        {service.features && (
          <div className="bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-lg border border-purple-300 max-w-2xl w-full">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-purple-100 text-base">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={() => window.history.back()}
          className="mt-10 px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg hover:from-purple-500 hover:to-pink-600 transition"
        >
          Go Back
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;
