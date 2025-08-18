import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const teamMembers = [
  {
    name: 'Kongara Gowthamraju',
    position: 'Director',
    image: './src/assets/c.png',
    location: '123 Street, New York, USA',
    joinDate: 'Jan 2019',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
      email: 'gowtham@company.com',
    },
  },
  {
    name: 'Bonda Bhanu Prakash',
    position: 'Software Developer',
    image: './src/assets/b.png',
    location: '123 Street, New York, USA',
    joinDate: 'Jan 2020',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
      email: 'marcus@company.com',
    },
  },
  {
    name: 'Gotham Jessie',
    position: 'Software Developer',
    image: './src/assets/a.png',
    location: '123 Street, New York, USA',
    joinDate: 'Mar 2021',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
      email: 'emily@company.com',
    },
  },
  {
    name: 'Yeddala Sandhya',
    position: 'Software Developer',
    image: './src/assets/d.png',
    location: '123 Street, New York, USA',
    joinDate: 'Aug 2021',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
      email: 'david@company.com',
    },
  },
];

function TeamMemberCard({ member }) {
  return (
    <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-8">
        <div className="relative mb-6">
          <div className="relative w-32 h-32 mx-auto overflow-hidden rounded-full ring-4 ring-white shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors duration-300" />
          </div>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-400 transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-white font-semibold mb-4">{member.position}</p>
        </div>
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-center text-sm text-white">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Joined {member.joinDate}</span>
          </div>
          <div className="flex items-center justify-center text-sm text-white">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{member.location}</span>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          {member.social.github && (
            <a
              href={member.social.github}
              className="p-2 text-pink-200 hover:text-white hover:bg-pink-300/20 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              className="p-2 text-pink-200 hover:text-white hover:bg-blue-600/20 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              className="p-2 text-pink-200 hover:text-white hover:bg-blue-400/20 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {member.social.email && (
            <a
              href={`mailto:${member.social.email}`}
              className="p-2 text-pink-200 hover:text-white hover:bg-pink-500/20 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TeamMemberList() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-300">
        <div className="max-w-7xl mx-auto px-4 py-12 pb-35 pt-25">
          <h2 className="text-5xl font-extrabold pb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-20 tracking-wide drop-shadow-lg select-none">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
