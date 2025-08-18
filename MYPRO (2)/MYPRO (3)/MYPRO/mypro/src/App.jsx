import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import ServiceDetail from './ServiceDetail';
import AboutUs1 from './AboutUs.jsx';
import Service from './ServicesPage.jsx';
import ProjectPage from './Project_page.jsx';
import TeamMember from './TeamMember.jsx';
import ContactPage from './ContactPage.jsx';
import IEEEProjects from './IEEEProjects.jsx';
import CoursesOffered from './Coursesoffered.jsx';
import CourseDetails from './CoursesDetails.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs1 />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/team" element={<TeamMember />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ieee-projects" element={<IEEEProjects />} />
        <Route path="/courses-offered" element={<CoursesOffered />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
