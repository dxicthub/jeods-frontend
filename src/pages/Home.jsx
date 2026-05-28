import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Import all card images directly
import examinationRegImg from '../assets/home_cards_imgs/examination-registrations.jpg';
import jambRunsImg from '../assets/home_cards_imgs/jamb-runs.jpg';
import admissionProcessingImg from '../assets/home_cards_imgs/admission-processing.jpg';
import computerTrainingImg from '../assets/home_cards_imgs/computer-training.jpg';
import generalComputerImg from '../assets/home_cards_imgs/general-computer-services.jpg';
import lessonCoachingImg from '../assets/home_cards_imgs/lesson-coaching.jpg';
import webDevelopmentImg from '../assets/home_cards_imgs/web-development.jpg';
import cloudSolutionsImg from '../assets/home_cards_imgs/cloud-solutions.jpg';
import mobileDevelopmentImg from '../assets/home_cards_imgs/mobile-development.jpg';
import aiMlImg from '../assets/home_cards_imgs/ai-ml.jpg';
import cybersecurityImg from '../assets/home_cards_imgs/cybersecurity.jpg';
import digitalAnalyticsImg from '../assets/home_cards_imgs/digital-analytics.jpg';
import ieltsImg from '../assets/home_cards_imgs/ielts-Img.jpg';
import celpipImg from '../assets/home_cards_imgs/celpip-Img.jpg';
import uxuiImg from '../assets/home_cards_imgs/uxui-Img.jpg';

// Import testimonial images
import testimonialImg1 from '../assets/testimony_imgs/testimonyImg1.jpg';
import testimonialImg2 from '../assets/testimony_imgs/testimonyImg2.jpg';
import testimonialImg3 from '../assets/testimony_imgs/testimonyImg3.jpg';
import testimonialImg4 from '../assets/testimony_imgs/testimonyImg4.jpg';
import testimonialImg5 from '../assets/testimony_imgs/testimonyImg5.jpg';
import testimonialImg6 from '../assets/testimony_imgs/testimonyImg6.jpg';
import testimonialImg7 from '../assets/testimony_imgs/testimonyImg7.jpg';
import testimonialImg8 from '../assets/testimony_imgs/testimonyImg8.jpg';
import testimonialImg9 from '../assets/testimony_imgs/testimonyImg9.jpg';
import testimonialImg10 from '../assets/testimony_imgs/testimonyImg10.jpg';
import testimonialImg11 from '../assets/testimony_imgs/testimonyImg11.jpg';
import testimonialImg12 from '../assets/testimony_imgs/testimonyImg12.jpg';

// Import Team members images
import teamImg1 from '../assets/team_members_imgs/teamImg1.jpg';
import teamImg2 from '../assets/team_members_imgs/teamImg2.jpg';
import teamImg3 from '../assets/team_members_imgs/teamImg3.jpg';
import teamImg4 from '../assets/team_members_imgs/teamImg4.jpg';
import teamImg5 from '../assets/team_members_imgs/teamImg5.jpg';
import teamImg6 from '../assets/team_members_imgs/teamImg6.jpg';
import teamImg7 from '../assets/team_members_imgs/teamImg7.jpg';
import teamImg8 from '../assets/team_members_imgs/teamImg8.jpg';
import teamImg9 from '../assets/team_members_imgs/teamImg9.jpg';
import teamImg10 from '../assets/team_members_imgs/teamImg10.jpg';
import teamImg11 from '../assets/team_members_imgs/teamImg11.jpg';
import teamImg12 from '../assets/team_members_imgs/teamImg12.jpg';
import teamImg13 from '../assets/team_members_imgs/teamImg13.jpg';
import teamImg14 from '../assets/team_members_imgs/teamImg14.jpg';
import teamImg15 from '../assets/team_members_imgs/teamImg15.jpg';
import teamImg16 from '../assets/team_members_imgs/teamImg16.jpg';
import teamImg17 from '../assets/team_members_imgs/teamImg17.jpg';
import teamImg18 from '../assets/team_members_imgs/teamImg18.jpg';
import teamImg19 from '../assets/team_members_imgs/teamImg19.jpg';
import teamImg20 from '../assets/team_members_imgs/teamImg20.jpg';

// Chatbot Component
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! 👋 Welcome to JEO Digital Solutions. How can I help you today?", sender: "bot", timestamp: new Date() }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const commonQuestions = [
    { question: "How do I register for WAEC?", answer: "To register for WAEC, simply click on 'Register Now' button on our homepage or contact us via WhatsApp. We'll guide you through the registration process." },
    { question: "How much is JAMB registration?", answer: "JAMB registration fee is ₦4,700 for the form plus our service charge of ₦5,000. Total ₦9,700." },
    { question: "Do you offer Post UTME help?", answer: "Yes! We provide comprehensive Post UTME assistance including past questions and registration support." },
    { question: "What computer courses do you offer?", answer: "We offer Basic Computing, Microsoft Office, Web Design, Graphic Design, and Programming courses." }
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateResponse(inputMessage);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes("waec") || input.includes("waec registration")) {
      return "📝 To register for WAEC, please contact us via WhatsApp or click 'Register Now'.";
    }
    else if (input.includes("jamb") && (input.includes("cost") || input.includes("price"))) {
      return "💰 JAMB registration costs ₦4,700 for the form + ₦5,000 service fee = ₦9,700 total.";
    }
    else if (input.includes("admission")) {
      return "🎓 We offer complete admission processing including Post UTME and Direct Entry.";
    }
    else {
      return "Thank you for your question! 👋 Please contact us on WhatsApp at +2347061066372 for more details.";
    }
  };

  const handleQuickQuestion = (question, answer) => {
    const userMessage = {
      id: messages.length + 1,
      text: question,
      sender: "user",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: answer,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-96 h-[500px] bg-dark-100/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white">JEO Digital Assistant</h3>
                  <p className="text-xs text-white/80">Online • Always ready to help</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-primary-500 text-white rounded-br-none'
                        : 'bg-white/10 text-gray-200 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-white/10 p-3 bg-dark-100/50">
              <p className="text-xs text-gray-400 mb-2">Quick Questions:</p>
              <div className="flex flex-wrap gap-2">
                {commonQuestions.slice(0, 4).map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(q.question, q.answer)}
                    className="text-xs bg-white/10 hover:bg-primary-500/30 text-gray-300 px-3 py-1 rounded-full transition-colors"
                  >
                    {q.question.length > 30 ? q.question.substring(0, 27) + '...' : q.question}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 p-3 flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question here..."
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Service Card Component - WITH MODAL (Updated Layout)
const ServiceCard = ({ service, onWhatsApp, onPhoneCall, onRegister }) => {
  const [showModal, setShowModal] = useState(false);
  
  const getAltText = (title) => {
    const altMap = {
      'WAEC | NECO | JAMB  | GCE': 'WAEC, NECO, JAMB and GCE examination registration service',
      'JAMB "RUNS" | PROCESSING': 'JAMB accurate processing and CBT training service',
      'WAEC | NECO | JAMB INTENSIVE LESSONS & COACHING': 'Intensive coaching for WAEC, NECO, and JAMB',
      'UNIPORT | AFE BABALOLA | ABSU | UNICAL ADMISSION PROCESSING': 'University admission processing',
      'GENERAL COMPUTER SERVICES': 'General computer services including printing, typing, and scanning',
      'COMPUTER TRAINING | PROGRAMMING': 'Computer training and programming courses',
      'Web Development': 'Web development services',
      'Cloud Solutions': 'Cloud solutions and DevOps services',
      'Mobile Development': 'Mobile app development',
      'AI & Machine Learning': 'Artificial Intelligence and Machine Learning',
      'Cybersecurity': 'Cybersecurity services',
      'Digital Analytics': 'Digital analytics and business intelligence',
      'IELTS': 'IELTS preparation class',
      'CELPIP': 'CELPIP preparation class',
      'UX/UI DESIGN': 'UI/UX design services'
    };
    return altMap[title] || `${title} service offered by JEO Digital Solutions`;
  };

  const getCourseDetails = (title) => {
    const detailsMap = {
      'Web Development': {
        features: [
          'Full-Stack Web Development (MERN Stack)',
          'HTML5, CSS3, JavaScript (ES6+)',
          'React.js & Next.js Framework',
          'Node.js & Express Backend',
          'MongoDB & PostgreSQL Databases',
          'RESTful API Development',
          'Git & Version Control',
          'Deployment (Vercel, Netlify, AWS)',
          'Portfolio Development',
          'Job Placement Assistance'
        ],
        mode: 'Online & Physical',
        duration: '12 weeks',
        certification: 'Yes',
        amount: '₦150,000',
        schedule: 'Weekdays (Mon, Wed, Fri) 6PM - 8PM',
        requirements: 'Basic computer knowledge, Laptop required',
        includes: 'Certificate, Course Materials, Mentorship, Project Support'
      },
      'Cloud Solutions': {
        features: [
          'AWS Solutions Architect',
          'Microsoft Azure Administration',
          'Google Cloud Engineer',
          'Cloud Security Best Practices',
          'DevOps Practices & CI/CD',
          'Infrastructure as Code (Terraform)',
          'Serverless Computing',
          'Container Orchestration (Docker, Kubernetes)',
          'Cloud Migration Strategies',
          'Cost Management & Optimization'
        ],
        mode: 'Online',
        duration: '10 weeks',
        certification: 'Yes',
        amount: '₦200,000',
        schedule: 'Weekends (Sat & Sun) 10AM - 2PM',
        requirements: 'Basic IT knowledge, Laptop with 8GB+ RAM',
        includes: 'Cloud Lab Access, Certification Voucher, Project Files'
      },
      'Mobile Development': {
        features: [
          'React Native Fundamentals',
          'iOS & Android App Development',
          'Flutter Framework',
          'UI/UX for Mobile',
          'App Store & Play Store Deployment',
          'Push Notifications',
          'In-App Purchases',
          'Firebase Integration',
          'Offline-First Apps',
          'Real-World Projects'
        ],
        mode: 'Online & Hybrid',
        duration: '10 weeks',
        certification: 'Yes',
        amount: '₦180,000',
        schedule: 'Weekdays (Tue & Thu) 6PM - 8PM',
        requirements: 'JavaScript knowledge',
        includes: 'App Templates, Developer Account Guidance'
      },
      'AI & Machine Learning': {
        features: [
          'Python Programming',
          'Data Science Fundamentals',
          'Machine Learning Algorithms',
          'Deep Learning with TensorFlow',
          'Computer Vision',
          'Natural Language Processing (NLP)',
          'Data Visualization',
          'Pandas & NumPy Mastery',
          'Model Deployment',
          'AI Ethics & Best Practices'
        ],
        mode: 'Online',
        duration: '14 weeks',
        certification: 'Yes',
        amount: '₦250,000',
        schedule: 'Weekends (Sat) 9AM - 3PM',
        requirements: 'Basic Python knowledge',
        includes: 'GPU Access, Kaggle Competitions'
      },
      'Cybersecurity': {
        features: [
          'Network Security Fundamentals',
          'Ethical Hacking',
          'Penetration Testing',
          'Security Auditing',
          'Compliance (GDPR, HIPAA, PCI-DSS)',
          'Cryptography Basics',
          'Incident Response',
          'Cloud Security',
          'Vulnerability Assessment'
        ],
        mode: 'Online',
        duration: '12 weeks',
        certification: 'Yes',
        amount: '₦220,000',
        schedule: 'Weekdays (Mon, Wed, Fri) 7PM - 9PM',
        requirements: 'Networking basics',
        includes: 'Virtual Lab Access, Security Tools'
      },
      'Digital Analytics': {
        features: [
          'Business Intelligence',
          'Data Visualization',
          'Google Analytics 4 (GA4)',
          'SQL for Data Analysis',
          'Tableau & Power BI',
          'Data Storytelling',
          'A/B Testing',
          'Conversion Rate Optimization'
        ],
        mode: 'Online',
        duration: '8 weeks',
        certification: 'Yes',
        amount: '₦120,000',
        schedule: 'Weekends (Sun) 1PM - 5PM',
        requirements: 'Excel knowledge',
        includes: 'Analytics Tools License, Real Data Projects'
      },
      'IELTS': {
        features: [
          'Complete IELTS Preparation',
          'Listening Strategies',
          'Reading Comprehension',
          'Writing Task 1 & 2 Mastery',
          'Speaking Practice',
          'Mock Tests & Assessments',
          'Vocabulary Building',
          'Grammar Enhancement'
        ],
        mode: 'Online & Physical',
        duration: '6 weeks',
        certification: 'Yes',
        amount: '₦80,000',
        schedule: 'Weekends (Sat & Sun) 9AM - 1PM',
        requirements: 'Intermediate English level',
        includes: 'Study Materials, Practice Tests'
      },
      'CELPIP': {
        features: [
          'Complete CELPIP Preparation',
          'Listening Core & Pro',
          'Reading Core & Pro',
          'Writing Core & Pro',
          'Speaking Core & Pro',
          'Mock Exams',
          'Canadian English Focus',
          'One-on-One Tutoring'
        ],
        mode: 'Online',
        duration: '6 weeks',
        certification: 'Yes',
        amount: '₦85,000',
        schedule: 'Weekdays (Tue & Thu) 7PM - 9PM',
        requirements: 'Intermediate English level',
        includes: 'Digital Materials, Mock Tests'
      },
      'UX/UI DESIGN': {
        features: [
          'Design Thinking Methodology',
          'User Research & Personas',
          'Wireframing & Prototyping',
          'Figma Mastery',
          'Adobe XD Fundamentals',
          'Visual Design Principles',
          'Interaction Design',
          'Usability Testing'
        ],
        mode: 'Online & Physical',
        duration: '10 weeks',
        certification: 'Yes',
        amount: '₦140,000',
        schedule: 'Weekends (Sat) 10AM - 4PM',
        requirements: 'Creative mindset',
        includes: 'Design Software Access, Portfolio Review'
      },
      'WAEC | NECO | JAMB  | GCE': {
        features: [
          'Comprehensive Subject Coverage',
          'Past Questions & Answers',
          'Mock Examinations',
          'Study Tips & Techniques',
          'Time Management Strategies',
          'Subject-Specific Coaching'
        ],
        mode: 'Online & Physical',
        duration: '8 weeks',
        certification: 'Yes',
        amount: '₦50,000',
        schedule: 'Weekends (Sat) 9AM - 2PM',
        requirements: 'Secondary school student',
        includes: 'Study Materials, Past Questions'
      },
      'COMPUTER TRAINING | PROGRAMMING': {
        features: [
          'Basic Computing',
          'Microsoft Office Suite',
          'Internet & Email Skills',
          'Web Design Fundamentals',
          'Programming Basics',
          'Certificate Issuance'
        ],
        mode: 'Online & Physical',
        duration: '4-12 weeks',
        certification: 'Yes',
        amount: '₦25,000 - ₦100,000',
        schedule: 'Flexible schedule',
        requirements: 'No prior experience needed',
        includes: 'Course Materials, Certificate'
      }
    };
    
    return detailsMap[title] || {
      features: service.features,
      mode: 'Online & Physical',
      duration: 'Contact us',
      certification: 'Yes',
      amount: 'Contact for pricing',
      schedule: 'Flexible schedule',
      requirements: 'Contact for details',
      includes: 'Certificate, Materials, Support'
    };
  };

  const details = getCourseDetails(service.title);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className={`card group cursor-pointer flex flex-col h-full items-center text-center ${service.highlight ? 'border-primary-500/30 bg-gradient-to-br from-primary-500/5 to-transparent' : ''}`}
      >
        <div className="flex-grow w-full">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 p-3 shadow-lg">
              <div className="rounded-full bg-white p-2">
                <img 
                  src={service.image} 
                  alt={getAltText(service.title)}
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-primary-500 transition-colors text-center px-2">
            {service.title}
          </h3>
          
          <div className="flex flex-wrap gap-2 justify-center mb-6 px-2">
            {service.features.slice(0, 4).map((feature, idx) => (
              <span 
                key={idx} 
                className="text-xs sm:text-sm bg-primary-500/20 text-primary-300 px-3 py-1.5 rounded-full border border-primary-500/30"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3 mt-4 pt-4 border-t border-white/10 w-full px-2">
          <button
            onClick={() => onRegister(service.title)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-3 py-2 rounded-lg transition-all duration-200 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1 sm:gap-2"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Register
          </button>
          
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-2 sm:px-3 py-2 rounded-lg transition-all duration-200 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1 sm:gap-2"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Details
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-100 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 p-6 border-b border-white/10">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white p-2 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                      <p className="text-gray-400 text-sm mt-1">Professional Training Program</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Features Section */}
                <div>
                  <h3 className="text-lg font-semibold text-primary-400 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    What You'll Learn
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {details.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <span className="text-primary-500">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>Learning Mode</span>
                    </div>
                    <p className="text-white font-medium">{details.mode}</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Duration</span>
                    </div>
                    <p className="text-white font-medium">{details.duration}</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Certification</span>
                    </div>
                    <p className="text-white font-medium">{details.certification}</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Investment</span>
                    </div>
                    <p className="text-white font-bold text-xl">{details.amount}</p>
                  </div>
                </div>

                {/* Schedule & Requirements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-primary-500/10 rounded-xl p-4 border border-primary-500/20">
                    <h4 className="text-primary-400 font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Schedule
                    </h4>
                    <p className="text-gray-300 text-sm">{details.schedule}</p>
                  </div>

                  <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
                    <h4 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Requirements
                    </h4>
                    <p className="text-gray-300 text-sm">{details.requirements}</p>
                  </div>
                </div>

                {/* What's Included */}
                <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    What's Included
                  </h4>
                  <p className="text-gray-300 text-sm">{details.includes}</p>
                </div>

                {/* Action Buttons - WhatsApp and Call at bottom */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      setShowModal(false);
                      onWhatsApp(service.title);
                    }}
                    className="flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.125 1.523 5.865L0 24l6.352-1.648C8.13 23.48 10.05 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.842 0-3.586-.497-5.077-1.364l-.364-.207-3.77.977.977-3.674-.21-.365C4.422 15.63 3.929 13.89 3.929 12c0-4.456 3.615-8.071 8.071-8.071s8.071 3.615 8.071 8.071-3.615 8.071-8.071 8.071z"/>
                    </svg>
                    Chat on WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      setShowModal(false);
                      onPhoneCall();
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    Call Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
// Testimonial Carousel Component
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const testimonials = [
    { id: 1, name: "Oluwaseun Adebayo", course: "JAMB Preparation", testimony: "JEO Digital Solutions helped me score 287 in JAMB! Their CBT training was exceptional.", image: testimonialImg1, rating: 5 },
    { id: 2, name: "Chiamaka Nwosu", course: "WAEC Registration", testimony: "I passed all my WAEC subjects with flying colors thanks to their intensive coaching.", image: testimonialImg2, rating: 5 },
    { id: 3, name: "Emmanuel Okafor", course: "Admission Processing", testimony: "They secured my admission into UNIPORT within weeks. Highly recommended!", image: testimonialImg3, rating: 5 },
    { id: 4, name: "Fatima Bello", course: "Computer Training", testimony: "I learned web development in just 3 months. Now I'm working as a freelance developer.", image: testimonialImg4, rating: 5 }
  ];

  const cardsToShow = 2;
  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section id="testimonials-section" className="py-20 px-4 bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">What Our Students Say</h2>
          <p className="text-gray-400 mt-2">Real stories from real students who achieved their dreams with us</p>
        </motion.div>

        <div className="relative">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 ${
              currentIndex === 0
                ? 'bg-white/10 text-gray-500 cursor-not-allowed opacity-50'
                : 'bg-primary-500 text-white hover:bg-primary-600 hover:scale-110 shadow-lg'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 540}px)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gradient-to-br from-dark-100/80 to-dark-200/50 rounded-3xl p-8 border border-white/10 backdrop-blur-sm mx-5"
                  style={{ width: '500px', minWidth: '500px' }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-500/50">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">{testimonial.name}</h3>
                  <p className="text-primary-500 text-center mb-3">{testimonial.course}</p>
                  <div className="flex justify-center gap-1 mb-4">
                    <span className="text-yellow-500">{renderStars(testimonial.rating)}</span>
                  </div>
                  <p className="text-gray-300 text-center italic">"{testimonial.testimony}"</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 ${
              currentIndex >= maxIndex
                ? 'bg-white/10 text-gray-500 cursor-not-allowed opacity-50'
                : 'bg-primary-500 text-white hover:bg-primary-600 hover:scale-110 shadow-lg'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// Team Carousel Component
const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    { id: 1, name: "Chief Justice Ekwueme O.", position: "CEO/Director", location: "Aba Branch", image: teamImg1 },
    { id: 2, name: "Effiong, Hoska", position: "Full Stack Engineer", location: "Abuja - FCT", image: teamImg2 },
    { id: 3, name: "Clement Abigail", position: "Secretary/Analyst", location: "Aba Branch", image: teamImg3 },
    { id: 4, name: "Mr Obasi Ukaegbu", position: "Mathematics/Physics Teacher", location: "Aba Branch", image: teamImg4 }
  ];

  const cardsToShow = 2;
  const maxIndex = Math.max(0, teamMembers.length - cardsToShow);

  const handlePrev = () => setCurrentIndex(prev => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex(prev => Math.min(maxIndex, prev + 1));

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Meet Our Expert Team</h2>
          <p className="text-gray-400 mt-2">Dedicated professionals committed to your success</p>
        </motion.div>

        <div className="relative">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 ${
              currentIndex === 0
                ? 'bg-white/10 text-gray-500 cursor-not-allowed opacity-50'
                : 'bg-primary-500 text-white hover:bg-primary-600 hover:scale-110 shadow-lg'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 540}px)` }}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-gradient-to-br from-dark-100/80 to-dark-200/50 rounded-3xl p-8 border border-white/10 backdrop-blur-sm mx-5 text-center"
                  style={{ width: '500px', minWidth: '500px' }}
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary-500/50">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-primary-500 mb-2">{member.position}</p>
                  <p className="text-gray-400">{member.location}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 ${
              currentIndex >= maxIndex
                ? 'bg-white/10 text-gray-500 cursor-not-allowed opacity-50'
                : 'bg-primary-500 text-white hover:bg-primary-600 hover:scale-110 shadow-lg'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// Newsletter Component
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary-900/30 to-secondary-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 mb-8">Get the latest updates on JAMB, WAEC, NECO, and admission news directly in your inbox</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              required
            />
            <button type="submit" className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg font-semibold text-white hover:opacity-90 transition">
              Subscribe
            </button>
          </form>
          {subscribed && (
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-500 mt-4">
              ✓ Successfully subscribed!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// Trust Badges Component
const TrustBadges = () => (
  <div className="py-8 bg-white/5">
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-center text-gray-400 text-sm mb-6">Trusted by students from</p>
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
        <span className="text-white font-bold text-lg">UNIPORT</span>
        <span className="text-white font-bold text-lg">UNICAL</span>
        <span className="text-white font-bold text-lg">ABSU</span>
        <span className="text-white font-bold text-lg">RSUT</span>
        <span className="text-white font-bold text-lg">AFE BABALOLA</span>
        <span className="text-white font-bold text-lg">UNIZIK</span>
        <span className="text-white font-bold text-lg">UNIBEN</span>
        <span className="text-white font-bold text-lg">UNIABJ</span>
      </div>
    </div>
  </div>
);

// Main Home Component
const Home = () => {
  const navigate = useNavigate();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const servicesData = {
    newServices: [
      { id: 1, title: 'WAEC | NECO | JAMB  | GCE', image: examinationRegImg, highlight: true, features: ['Fast Processing', 'Accurate', 'Timely', 'Affordable Rates'], showRegister: true },
      { id: 2, title: 'JAMB "RUNS" | PROCESSING', image: jambRunsImg, highlight: true, features: ['SCORE 300+ in one sitting', 'Reliable Results', 'Expert Guidance', '24/7 Support'], showRegister: true },
      { id: 3, title: 'JAMB | WAEC INTENSIVE LESSONS & COACHING', image: lessonCoachingImg, highlight: true, features: ['Private Lessons', 'JAMB CBT Prep', 'Exam Prep', 'Project/Thesis Coaching'], showRegister: true },
      { id: 4, title: 'UNIPORT | AFE BABALOLA | ABSU | UNICAL ADMISSION PROCESSING', image: admissionProcessingImg, highlight: true, features: ['Post UTME', 'Supplementary', 'Direct Admission', 'Other Services'], showRegister: false },
      { id: 5, title: 'GENERAL COMPUTER SERVICES', image: generalComputerImg, highlight: true, features: ['Printing', 'Typing', 'Scanning', 'Online Services'], showRegister: true },
      { id: 6, title: 'COMPUTER TRAINING | PROGRAMMING', image: computerTrainingImg, highlight: true, features: ['Basic Computing', 'Intermediate', 'Advanced', 'Certificate Issuance'], showRegister: true }
    ],
    existingServices: [
      { id: 7, title: 'Web Development', image: webDevelopmentImg, features: ['React/Next.js', 'Vue/Nuxt', 'Node.js', 'Responsive Design'], showRegister: true },
      { id: 8, title: 'Cloud Solutions', image: cloudSolutionsImg, features: ['AWS/Azure/GCP', 'Docker/K8s', 'CI/CD', 'Scalable'], showRegister: true },
      { id: 9, title: 'Mobile Development', image: mobileDevelopmentImg, features: ['React Native', 'Flutter', 'iOS/Android', 'Cross-platform'], showRegister: true },
      { id: 10, title: 'AI & Machine Learning', image: aiMlImg, features: ['Computer Vision', 'NLP', 'Predictive Analytics', 'Automation'], showRegister: true },
      { id: 11, title: 'Cybersecurity', image: cybersecurityImg, features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Data Protection'], showRegister: true },
      { id: 12, title: 'Digital Analytics', image: digitalAnalyticsImg, features: ['Business Intelligence', 'Data Visualization', 'Analytics', 'Reporting'], showRegister: true },
      { id: 13, title: 'IELTS', image: ieltsImg, features: ['Listening Strategies', 'Reading Comprehension', 'Writing Task 1 & 2', 'Speaking Practice'], showRegister: true },
      { id: 14, title: 'CELPIP', image: celpipImg, features: ['Complete CELPIP Prep', 'Listening Core & Pro', 'Writing Core & Pro', 'Reading Core & Pro', 'Speaking Core & Pro'], showRegister: true }, 
      { id: 15, title: 'UX/UI DESIGN', image: uxuiImg, features: ['Design Thinking', 'Wireframing', 'Figma Mastery', 'Adobe XD'], showRegister: true }
    ]
  };
  
  const handleWhatsApp = (serviceName) => {
    const phoneNumber = '2347061066372';
    const message = encodeURIComponent(`Hello! I'm interested in ${serviceName}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  
  const handlePhoneCall = () => {
    window.location.href = 'tel:+2347061066372';
  };

  const handleRegister = (serviceName) => {
    sessionStorage.setItem('interestedService', serviceName);
    navigate('/register');
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };
  
  const allServices = [...servicesData.newServices, ...servicesData.existingServices];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="w-2 h-2 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-xs sm:text-sm text-gray-300 font-bold">Trusted by 100+ schools and institutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">JEO Digital</span><br />
              <span className="text-white">Solutions</span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-bold px-4">
              From WAEC, NECO, GCE, and JAMB registration to admission processing, computer training, and everyday digital services – we make your journey seamless.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link to="/register" className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg font-semibold text-white hover:opacity-90 transition">Register Now</Link>
              <Link to="/blog" className="px-8 py-3 bg-white/10 border border-white/20 rounded-lg font-semibold text-white hover:bg-white/20 transition">View Blog</Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-20 pt-10 border-t border-white/10">
              {[
                { value: '1000+', label: 'Students Enrolled' },
                { value: '500+', label: 'Admissions Secured' },
                { value: '24/7', label: 'Support Available' },
                { value: '100%', label: 'Customer Satisfaction' },
              ].map((stat, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      <TrustBadges />
      
      <section id="services-section" className="py-12 sm:py-20 px-4 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp} transition={{ duration: 0.4 }}>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-gray-400 mt-2 px-4">Comprehensive educational and technology solutions tailored to your needs</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allServices.map((service, index) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} viewport={{ once: true, amount: 0.1 }}>
                <ServiceCard service={service} onWhatsApp={handleWhatsApp} onPhoneCall={handlePhoneCall} onRegister={handleRegister} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      <TestimonialCarousel />
      <TeamCarousel />
      <Newsletter />
      
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl p-6 sm:p-12 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Future?</h2>
            <p className="text-gray-300 mb-8 text-sm sm:text-lg px-4">Join thousands of successful students who trust <span className="text-primary-500">JEO Digital Solutions</span> for their examination, admission, and training needs.</p>
            <Link to="/register" className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg font-semibold text-white hover:opacity-90 transition inline-block">Register Now</Link>
          </motion.div>
        </div>
      </section>

      <Chatbot />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 p-3 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;