import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-100/50 backdrop-blur-md border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1 - Logo and Company Info - Centered */}
          <div className="text-center md:text-left">
            {/* Logo Section - Centered on mobile, left on desktop */}
            <Link to="/" className="flex items-center justify-center md:justify-start space-x-3 group relative mb-4">
              <div className="relative flex items-center">
                <div className="bg-white rounded-2xl p-2 shadow-lg transition-all duration-300 group-hover:shadow-primary-500/30">
                  <img 
                    src="/jeods_logo1.jpg" 
                    alt="JEO Digital Solutions Logo" 
                    className="h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl ring-2 ring-primary-500/30 group-hover:ring-primary-500/60 transition-all duration-300 pointer-events-none"></div>
              </div>
              
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                    JEO
                  </span>
                  <span className="text-white group-hover:text-primary-500 transition-colors">
                    Digital
                  </span>
                </span>
                <span className="text-sm text-primary-500/80 hidden sm:block font-semibold leading-tight">Solutions</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mt-4 max-w-xs mx-auto md:mx-0">
              Transforming businesses through innovative technology solutions since 2020.
            </p>
          </div>
          
          {/* Column 2 - Quick Links - Centered */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-white text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors inline-block">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors inline-block">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors inline-block">Services</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary-500 transition-colors inline-block">Blog</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Services - Centered */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-white text-lg">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">Cloud Solutions</li>
              <li className="text-gray-400">Mobile Apps</li>
              <li className="text-gray-400">AI/ML Services</li>
            </ul>
          </div>
          
          {/* Column 4 - Connect With Us - Centered */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-white text-lg">Connect With Us</h4>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section - Already Centered */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} JEO Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;