import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  // Mobile submenu states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTestimonialsOpen, setMobileTestimonialsOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    setIsQuickLinksOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Function to handle navigation with hash
  const handleQuickLinkClick = (path, sectionId) => {
    setIsQuickLinksOpen(false);
    if (location.pathname !== path) {
      // Navigate to the page first, then scroll after navigation
      window.location.href = `${path}#${sectionId}`;
    } else {
      // Scroll to section on same page
      scrollToSection(sectionId);
    }
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  // Quick Links Items
  const quickLinks = [
    // Services
    { label: ' WAEC | NECO | JAMB | GCE', sectionId: 'services-section', path: '/services', category: 'Services' },
    { label: 'JAMB "RUNS" | PROCESSING', sectionId: 'services-section', path: '/services', category: 'Services' },
    { label: 'Admission Processing', sectionId: 'services-section', path: '/services', category: 'Services' },
    { label: 'Computer Training', sectionId: 'services-section', path: '/services', category: 'Services' },
    { label: 'General Computer Services', sectionId: 'services-section', path: '/services', category: 'Services' },
    { label: 'Lesson & Coaching', sectionId: 'services-section', path: '/services', category: 'Services' },
    { label: 'Web Development', sectionId: 'services-section', path: '/services', category: 'Services' },
    { label: 'Cloud Solutions', sectionId: 'services-section', path: '/services', category: 'Services' },
    { label: 'Mobile Development', sectionId: 'services-section', path: '/services', category: 'Services' },
    { label: 'AI & Machine Learning', sectionId: 'services-section', path: '/services', category: 'Services' },
    { label: 'Cybersecurity', sectionId: 'services-section', path: '/services', category: 'Services' },
    { label: 'Digital Analytics', sectionId: 'services-section', path: '/services', category: 'Services' },
    // Testimonials
    { label: 'Student Testimonials', sectionId: 'testimonials-section', path: '/', category: 'Testimonials' },
    // Team Members
    { label: ' View Team Members', sectionId: 'team-section', path: '/', category: 'Team' },
  ];

  // Group services by category for mobile
  const servicesList = quickLinks.filter(link => link.category === 'Services');
  const testimonialsList = quickLinks.filter(link => link.category === 'Testimonials');
  const teamList = quickLinks.filter(link => link.category === 'Team');

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 top-0 md:top-4 ${
      scrolled ? 'bg-dark-100/90 backdrop-blur-md shadow-lg md:rounded-2xl' : 'bg-dark-100/80 backdrop-blur-sm md:bg-transparent'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo Section - Left aligned */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 group shrink-0">
            <div className="relative flex items-center">
              <div className="bg-white rounded-xl md:rounded-2xl p-1.5 md:p-2 shadow-lg transition-all duration-300 group-hover:shadow-primary-500/30">
                <img 
                  src="/jeods_logo1.jpg" 
                  alt="JEO Digital Solutions Logo" 
                  className="h-10 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 rounded-xl md:rounded-2xl ring-2 ring-primary-500/30 group-hover:ring-primary-500/60 transition-all duration-300 pointer-events-none"></div>
            </div>
            
            <div className="flex flex-col justify-center">
              <span className="text-lg md:text-2xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  JEO
                </span>
                <span className="text-white group-hover:text-primary-500 transition-colors">
                  Digital
                </span>
              </span>
              <span className="text-xs text-primary-500/80 hidden sm:block font-semibold leading-tight">Solutions</span>
            </div>
          </Link>
          
          {/* Desktop Navigation Menu - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-base font-semibold rounded-lg transition-all duration-300 relative group ${
                    location.pathname === item.path 
                      ? 'text-primary-500' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              
              {/* Quick Links Dropdown - Desktop only */}
              <div 
                className="relative"
                onMouseEnter={() => setIsQuickLinksOpen(true)}
                onMouseLeave={() => setIsQuickLinksOpen(false)}
              >
                <button
                  className="px-4 py-2 text-base font-semibold rounded-lg transition-all duration-300 text-gray-300 hover:text-white flex items-center gap-2 group"
                >
                  Quick Links
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isQuickLinksOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu - Desktop */}
                <AnimatePresence>
                  {isQuickLinksOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-dark-100/95 backdrop-blur-md rounded-xl shadow-xl border border-white/10 overflow-hidden z-50"
                    >
                      <div className="max-h-96 overflow-y-auto">
                        {/* Services Section */}
                        <div className="p-2">
                          <div className="px-3 py-2 text-xs font-semibold text-primary-500 uppercase tracking-wider border-b border-white/10">
                            📚 Our Services
                          </div>
                          {servicesList.map((link, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleQuickLinkClick(link.path, link.sectionId)}
                              className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"
                            >
                              <span className="text-base">{link.label.split(' ')[0]}</span>
                              <span>{link.label.substring(link.label.indexOf(' ') + 1)}</span>
                            </button>
                          ))}
                        </div>
                        
                        {/* Testimonials Section */}
                        <div className="border-t border-white/10 p-2">
                          <div className="px-3 py-2 text-xs font-semibold text-primary-500 uppercase tracking-wider border-b border-white/10">
                            ⭐ Testimonials
                          </div>
                          {testimonialsList.map((link, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleQuickLinkClick(link.path, link.sectionId)}
                              className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"
                            >
                              <span>{link.label}</span>
                            </button>
                          ))}
                        </div>
                        
                        {/* Team Section */}
                        <div className="border-t border-white/10 p-2">
                          <div className="px-3 py-2 text-xs font-semibold text-primary-500 uppercase tracking-wider border-b border-white/10">
                            👥 Team
                          </div>
                          {teamList.map((link, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleQuickLinkClick(link.path, link.sectionId)}
                              className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"
                            >
                              <span>{link.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          
          {/* Desktop CTA Buttons - Right aligned */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            <Link 
              to="/login" 
              className="px-4 py-2 text-base font-semibold rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-2 text-base font-semibold rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300 hover:scale-105 animate-pulse"
            >
              Sign Up
            </Link>
            <Link 
              to="/forgot-password" 
              className="px-4 py-2 text-base font-semibold rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Forgot Password?
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu - With Collapsible Quick Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-white/10 mt-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
                      location.pathname === item.path 
                        ? 'bg-primary-500/20 text-primary-500' 
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Quick Links Section in Mobile - Collapsible */}
                <div className="mt-4">
                  {/* Services Section - Collapsible */}
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-primary-500 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <span> Our Services</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 py-2 space-y-1">
                          {servicesList.map((link, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                setIsOpen(false);
                                handleQuickLinkClick(link.path, link.sectionId);
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            >
                              {link.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Testimonials Section - Collapsible */}
                  <button
                    onClick={() => setMobileTestimonialsOpen(!mobileTestimonialsOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-primary-500 rounded-lg hover:bg-white/10 transition-colors mt-1"
                  >
                    <span>⭐ Testimonials</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${mobileTestimonialsOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileTestimonialsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 py-2 space-y-1">
                          {testimonialsList.map((link, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                setIsOpen(false);
                                handleQuickLinkClick(link.path, link.sectionId);
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            >
                              {link.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Team Section - Collapsible */}
                  <button
                    onClick={() => setMobileTeamOpen(!mobileTeamOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-primary-500 rounded-lg hover:bg-white/10 transition-colors mt-1"
                  >
                    <span>👥 Team</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${mobileTeamOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileTeamOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 py-2 space-y-1">
                          {teamList.map((link, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                setIsOpen(false);
                                handleQuickLinkClick(link.path, link.sectionId);
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            >
                              {link.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Mobile Auth Links */}
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-semibold rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors text-center mt-4"
                >
                  Login
                </Link>
                
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-semibold rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors text-center animate-pulse"
                >
                  Sign Up
                </Link>
                
                <Link
                  to="/forgot-password"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-semibold rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors text-center"
                >
                  Forgot Password?
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;