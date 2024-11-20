import React, { useState, useEffect, useRef } from 'react';
import { Users, Briefcase, Package, Award } from 'lucide-react';

const CountUpNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        countRef.current = requestAnimationFrame(updateCount);
      }
    };

    countRef.current = requestAnimationFrame(updateCount);

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current);
      }
    };
  }, [end, duration]);

  return <span>{count.toLocaleString()}+</span>;
};

const StatsCard = ({ icon: Icon, number, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div 
      className="p-4 rounded-full mb-4"
      style={{ backgroundColor: '#0ea29820' }} // Light version of your brand color
    >
      <Icon size={32} style={{ color: '#0ea298' }} />
    </div>
    <h3 className="text-4xl font-bold mb-2 text-gray-800">
      <CountUpNumber end={number} />
    </h3>
    <h4 className="text-xl font-semibold mb-2 text-gray-700">{title}</h4>
    <p className="text-center text-gray-600">{description}</p>
  </div>
);

const BusinessStats = () => {
  const stats = [
    {
      icon: Users,
      number: 1500,
      title: "Happy Clients",
      description: "Trusted by businesses worldwide"
    },
    {
      icon: Briefcase,
      number: 250,
      title: "Successful Projects",
      description: "Delivered on time and within budget"
    },
    {
      icon: Package,
      number: 50,
      title: "Products",
      description: "Innovative solutions for your needs"
    },
    {
      icon: Award,
      number: 15,
      title: "Years Experience",
      description: "Providing excellence since 2009"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0ea298]">
            Our Numbers Speak for Themselves
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We take pride in our achievements and the trust our clients place in us.
            Here's a glimpse of our journey in numbers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessStats;