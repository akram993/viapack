import React from 'react';
import './feature.css'

const features = [
  {
    title: "Feature 1",
    description: "Transform your business with our innovative solutions",
    icon: "💡",
  },
  {
    title: "Feature 2",
    description: "Streamline your operations with advanced automation",
    icon: "⚡",
  },
  {
    title: "Feature 3",
    description: "Enhance customer experience with smart analytics",
    icon: "📊",
  },
  {
    title: "Feature 4",
    description: "Secure your data with enterprise-grade protection",
    icon: "🔒",
  },
  {
    title: "Feature 5",
    description: "Enhance customer experience with smart analytics",
    icon: "📊",
  },
  {
    title: "Feature 6",
    description: "Secure your data with enterprise-grade protection",
    icon: "🔒",
  }
];

const Feature = () => {
  return (
    <div className="w-full px-4 py-16 bg-[#00000012]">
      <div className="max-w-7xl mx-auto bg-white p-12 relative top-[-100px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-600">
            Our App's Core Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We take pride in our achievements and the trust our clients place in us.
            Here's a glimpse of our journey in numbers.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-bold ml-2">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;