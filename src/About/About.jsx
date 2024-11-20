import React from 'react';
import { Shield, Target, Users, Heart } from 'lucide-react';
import ImageOffice from "../assets/3d-rendering-cartoon-shopping-cart.jpg"
import Member1 from "../assets/Member1.jpg"
import Member2 from "../assets/Member2.jpg"
import Member3 from "../assets/Member3.jpg"
import Member4 from "../assets/Member4.jpg"

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "We build lasting relationships with our clients through transparent communication and consistent delivery."
    },
    {
      icon: Target,
      title: "Innovation Focus",
      description: "Constantly pushing boundaries to bring the latest solutions and technologies to our clients."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Working together with our clients as true partners to achieve shared success."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your success is our success. We're dedicated to exceeding your expectations in every interaction."
    }
  ];

  const team = [
    {
      name: "John Davis",
      role: "CEO & Founder",
      image: Member1,
      description: "20+ years of industry experience"
    },
    {
      name: "Sarah Wilson",
      role: "Head of Operations",
      image: Member2,
      description: "Expert in business transformation"
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      image: Member3,
      description: "Innovation & technology leader"
    },
    {
      name: "Emma Thompson",
      role: "Client Success Manager",
      image: Member4,
      description: "Dedicated to client satisfaction"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0ea298] mb-4">About Us</h1>
        <p className="text-gray-600 mb-6">
        We're on a mission to transform businesses through innovative solutions 
            and exceptional service. With years of experience and a passionate team, 
            we're here to help you succeed.
          </p>
      </div>

      {/* Story Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0ea298]">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2009, we started with a simple vision: to help businesses 
                  thrive in the digital age. What began as a small team of passionate 
                  innovators has grown into a global organization serving clients worldwide.
                </p>
                <p>
                  Over the years, we've helped countless businesses transform their 
                  operations, enhance their efficiency, and achieve remarkable growth. 
                  Our commitment to excellence and innovation has made us a trusted 
                  partner for organizations of all sizes.
                </p>
                <p>
                  Today, we continue to push boundaries and explore new possibilities, 
                  always with our clients' success at the forefront of everything we do.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src= {ImageOffice}
                alt="Our office" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="my-16 py-12 px-4 bg-[#0ea298] rounded-lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 rounded-lg text-center hover:scale-105 transition-scale ease-in-out duration-500"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#0ea29820' }}
                >
                  <value.icon size={32} style={{ color: '#0ea298' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#0ea298]">
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-[#0ea298] font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;