import React from 'react';
import HeaderImage from  '../assets/HeaderImage.jpg';
import Logo from '../assets/LogoImage.png';
import HeaderBG from "../assets/HeaderBG.jpeg";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './header.css'
import CatalogDownload from '../CatalogDownload/CatalogDownload';

const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page has been scrolled
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
return (
    <header className="relative min-h-[750px]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-x-0 bottom-0 top-0 bg-center z-0"
        style={{
          backgroundImage: `url(${HeaderBG})`,
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70 z-0"></div>
      </div>

      {/* Navigation Bar */}
    <nav className="sticky-div with-shadow">
        <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-black font-bold text-xl">
            <div className="flex items-center justify-center">
              <img 
                src={Logo} 
                alt="Company Logo"
                className="h-12 w-auto object-contain"  
                // You can adjust h-8 to change logo size
              />
            </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-black hover:text-[#0ea298] hover:border-b-2 hover:border-[#0ea298] transition-all transition-colors">
                Home
              </Link>
              <Link to="about" className="text-black hover:text-[#0ea298] hover:border-b-2 hover:border-[#0ea298] transition-all transition-colors">
                About
              </Link>
              <Link to="products" className="text-black  hover:text-[#0ea298] hover:border-b-2 hover:border-[#0ea298] transition-all transition-colors">
                Products
              </Link>
              <Link to="services" className="text-black  hover:text-[#0ea298] hover:border-b-2 hover:border-[#0ea298] transition-all transition-colors">
                Services
              </Link>
              <Link to="contact" className="text-black hover:text-[#0ea298] hover:border-b-2 hover:border-[#0ea298] transition-all transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2">
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-[500px] flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover amazing content and services that will transform your experience
          </p>
          <div className="flex items-center gap-8">
            <button className="bg-white px-8 py-3 rounded-lg font-semibold 
                          hover:bg-gray-200 transition-colors duration-300">
              Get Started
            </button>
            <CatalogDownload variant="button" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;