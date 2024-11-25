import React from 'react';
import './footer.css';
import LogoImage from '../assets/LogoImage.png';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col footer-container">
      <footer className="text-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
            <img 
                src={LogoImage} 
                alt="Company Logo"
                className="h-12 w-auto object-contain"  
                // You can adjust h-8 to change logo size
            />
            <p className="text-sm">
                Making the world a better place through innovative solutions.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-[#0ea298] transition-colors">
                <Github size={20} />
                </a>
                <a href="#" className="hover:text-[#0ea298] transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-[#0ea298] transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-[#0ea298] transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h3 className="text-black text-lg font-semibold">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-black text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-black text-lg font-semibold">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><Link to="faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t border-gray-800 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div>
                © {currentYear} Company Name. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;