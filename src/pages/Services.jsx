import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const services = [
    {
      id: 1,
      title: "Computer Training",
      tagline: "From Beginner to Advanced Level",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      description: "Comprehensive computer training programs designed for all skill levels - from absolute beginners to advanced professionals.",
      fullDescription: "Our computer training program is structured to take you from zero to hero in the digital world. Whether you're a complete beginner or looking to advance your skills, we have tailored courses that suit your needs. Learn practical, job-ready skills that employers are looking for.",
      features: [
        "Beginner Level: Computer Basics, Typing, Microsoft Office",
        "Intermediate: Internet Skills, Email Management, Basic Troubleshooting",
        "Advanced: Programming, Web Design, Graphic Design",
        "Professional Certification Preparation",
        "Hands-on Practical Training",
        "Flexible Learning Schedules"
      ],
      courses: [
        { level: "Beginner", duration: "4 weeks", price: "₦30,000", topics: ["Computer Basics", "Windows OS", "Microsoft Word", "Microsoft Excel", "Internet & Email"] },
        { level: "Intermediate", duration: "6 weeks", price: "₦50,000", topics: ["Advanced Excel", "PowerPoint", "Database Management", "Basic Programming", "Digital Literacy"] },
        { level: "Advanced", duration: "8 weeks", price: "₦80,000", topics: ["Web Development", "Graphic Design", "Python Programming", "Data Analysis", "IT Support"] }
      ],
      benefits: [
        "Certified Instructors",
        "Practical Hands-on Training",
        "Free Study Materials",
        "Certificate upon Completion",
        "Job Placement Assistance",
        "Lifetime Access to Resources"
      ],
      schedule: "Morning (9am-12pm) | Afternoon (1pm-4pm) | Evening (5pm-8pm)",
      targetAudience: "Students, Working Professionals, Job Seekers, Entrepreneurs",
      outcome: "Graduates can work as IT Support Staff, Data Entry Officers, Web Designers, or pursue further certifications"
    },
    {
      id: 2,
      title: "Admission Processing & Guidance",
      tagline: "Your Path to Higher Education",
      icon: "🎓",
      color: "from-purple-500 to-pink-500",
      description: "Expert guidance and support for university, polytechnic, and college admissions both locally and internationally.",
      fullDescription: "Navigate the complex admission process with confidence. Our admission experts provide end-to-end support for students seeking admission into Nigerian universities, polytechnics, colleges of education, and international institutions.",
      features: [
        "University Admission Processing (JAMB/Direct Entry)",
        "Polytechnic & College of Education Applications",
        "International University Applications",
        "Scholarship Application Assistance",
        "Course Selection Guidance",
        "Document Verification & Processing"
      ],
      services: [
        { name: "Local Admission", price: "₦50,000", includes: ["JAMB Registration", "Post-UTME Processing", "School Selection Guidance", "Admission Follow-up"] },
        { name: "International Admission", price: "$200", includes: ["University Selection", "Application Processing", "Document Preparation", "Visa Guidance"] },
        { name: "Scholarship Guidance", price: "₦40,000", includes: ["Scholarship Search", "Application Writing", "Interview Preparation", "Documentation"] }
      ],
      benefits: [
        "100% Admission Success Rate",
        "Expert Counsellors",
        "Latest Admission Updates",
        "Post-Admission Support",
        "Scholarship Opportunities",
        "Career Counseling"
      ],
      partnerInstitutions: ["UNILAG", "UI", "OAU", "UNN", "ABU", "Covenant University", "Babcock University", "International Universities"],
      outcome: "95% of our students gain admission into their preferred institutions within one academic session"
    },
    {
      id: 3,
      title: "Sales of Post UTME Forms",
      tagline: "Direct Access to University Forms",
      icon: "📝",
      color: "from-green-500 to-emerald-500",
      description: "Easy and convenient purchase of Post UTME screening forms for all Nigerian universities and polytechnics.",
      fullDescription: "Skip the long queues and purchase your Post UTME forms directly through us. We provide forms for all Nigerian universities, polytechnics, and colleges of education with instant delivery and ongoing support throughout the application process.",
      features: [
        "All Nigerian Universities Covered",
        "Instant Form Delivery",
        "Screening Date Updates",
        "Past Questions Included",
        "Technical Support Available",
        "Group Purchase Discounts"
      ],
      availableForms: [
        { institution: "All Federal Universities", price: "₦2,000 - ₦5,000", cutoff: "Varies by institution" },
        { institution: "All State Universities", price: "₦2,000 - ₦3,500", cutoff: "Varies by institution" },
        { institution: "Private Universities", price: "₦5,000 - ₦10,000", cutoff: "Direct Entry" },
        { institution: "Polytechnics & COEs", price: "₦2,000 - ₦3,000", cutoff: "Varies" }
      ],
      benefits: [
        "No Queues",
        "Instant Processing",
        "24/7 Support",
        "Form Fill Assistance",
        "Screening Tips & Tricks",
        "Result Checking Support"
      ],
      additionalOffers: [
        "Free JAMB CBT Practice",
        "Post-UTME Past Questions",
        "Online Tutorial Access",
        "Admission Counseling"
      ],
      paymentMethods: "Bank Transfer, Card Payment, USSD, Cash at our office"
    },
    {
      id: 4,
      title: "WAEC & JAMB Intensive Lessons",
      tagline: "Ace Your Exams with Confidence",
      icon: "📚",
      color: "from-orange-500 to-red-500",
      description: "Intensive preparation classes for WAEC, NECO, and JAMB examinations with proven success strategies.",
      fullDescription: "Our intensive lesson programs are designed to help students excel in their external examinations. With experienced tutors, comprehensive materials, and proven teaching methods, we ensure students are fully prepared to achieve excellent results.",
      features: [
        "WAEC/NECO Intensive Classes",
        "JAMB UTME Preparation",
        "Post-UTME Coaching",
        "Subject-Specific Tutorials",
        "Mock Examinations",
        "Study Skills Training"
      ],
      subjects: [
        { name: "Sciences", topics: ["Mathematics", "Physics", "Chemistry", "Biology"] },
        { name: "Arts", topics: ["English", "Literature", "Government", "CRS/IRS", "History"] },
        { name: "Commercial", topics: ["Economics", "Accounting", "Commerce", "Business Studies"] }
      ],
      programs: [
        { name: "Regular Classes", duration: "3 months", price: "₦60,000", schedule: "Weekends (Saturday & Sunday)" },
        { name: "Intensive Bootcamp", duration: "6 weeks", price: "₦80,000", schedule: "Daily (Morning/Afternoon)" },
        { name: "One-on-One Tutoring", duration: "Flexible", price: "₦10,000/session", schedule: "By appointment" },
        { name: "Online Classes", duration: "3 months", price: "₦50,000", schedule: "Evenings (6pm-8pm)" }
      ],
      benefits: [
        "Experienced & Certified Tutors",
        "Comprehensive Study Materials",
        "Weekly Assessment Tests",
        "Expo-Free Learning (Real Preparation)",
        "Parent-Teacher Meetings",
        "Success Guarantee"
      ],
      successStats: {
        jamb: "85% score above 250",
        waec: "90% credit pass rate",
        students: "5000+ successful students"
      },
      outcome: "Our students consistently achieve top scores and gain admission to their desired institutions"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const handleEnquirySubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, {
        ...data,
        subject: `Enquiry: ${selectedService?.title}`,
        service: selectedService?.title
      });
      if (response.data.success) {
        toast.success('Enquiry sent successfully! We\'ll contact you within 24 hours.');
        setShowEnquiryModal(false);
        reset();
        setSelectedService(null);
      }
    } catch (error) {
      toast.error('Failed to send enquiry. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Our Educational Services</h1>
          <p className="section-subtitle">
            Empowering students and professionals with quality education and guidance
          </p>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            At <span className="text-primary-500 font-semibold">JEO Digital Solutions</span>, 
            we're committed to your educational success through comprehensive support and expert guidance
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "5000+", label: "Students Trained", icon: "👨‍🎓" },
            { value: "95%", label: "Success Rate", icon: "📈" },
            { value: "50+", label: "Partner Schools", icon: "🏫" },
            { value: "10+", label: "Years Experience", icon: "⭐" }
          ].map((stat, idx) => (
            <div key={idx} className="card text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-primary-500">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid - 4 Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="card cursor-pointer group overflow-hidden"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-2xl`}></div>
                <div className="flex items-start space-x-4">
                  <div className={`text-6xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.title}
                    </h3>
                    <p className="text-primary-500 text-sm font-semibold mb-2">{service.tagline}</p>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    {/* Quick Info Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.title === "Computer Training" && (
                        <>
                          <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">Beginner Friendly</span>
                          <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Certificate Included</span>
                        </>
                      )}
                      {service.title === "Admission Processing & Guidance" && (
                        <>
                          <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">Local & Int'l</span>
                          <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full">100% Success</span>
                        </>
                      )}
                      {service.title === "Sales of Post UTME Forms" && (
                        <>
                          <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Instant Delivery</span>
                          <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full">All Universities</span>
                        </>
                      )}
                      {service.title === "WAEC & JAMB Intensive Lessons" && (
                        <>
                          <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full">Proven Results</span>
                          <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded-full">Expert Tutors</span>
                        </>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex space-x-3 text-sm">
                        {service.title === "Computer Training" && (
                          <span className="text-primary-500">💰 From ₦30,000</span>
                        )}
                        {service.title === "Admission Processing & Guidance" && (
                          <span className="text-primary-500">💰 From ₦40,000</span>
                        )}
                        {service.title === "Sales of Post UTME Forms" && (
                          <span className="text-primary-500">💰 From ₦2,000</span>
                        )}
                        {service.title === "WAEC & JAMB Intensive Lessons" && (
                          <span className="text-primary-500">💰 From ₦50,000</span>
                        )}
                      </div>
                      <button className="text-primary-500 hover:text-primary-400 font-semibold text-sm flex items-center group">
                        Learn More 
                        <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="section-title text-center mb-12">Why Choose <span className="text-white">JEO Digital</span>?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "👨‍🏫",
                title: "Expert Instructors",
                description: "Qualified and experienced teachers with proven track records"
              },
              {
                icon: "📖",
                title: "Quality Materials",
                description: "Comprehensive study materials and resources provided"
              },
              {
                icon: "🏆",
                title: "Proven Results",
                description: "Consistent record of excellent examination results"
              },
              {
                icon: "💬",
                title: "24/7 Support",
                description: "Round-the-clock assistance for all students"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="card text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="section-title text-center mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Oluwaseun Adebayo",
                service: "WAEC & JAMB Lessons",
                text: "JEO Digital helped me score 287 in JAMB! The intensive lessons were exactly what I needed. The teachers are amazing!",
                rating: 5,
                image: "👨‍🎓"
              },
              {
                name: "Chioma Nwosu",
                service: "Admission Processing",
                text: "Got admission into UNILAG through their guidance. The process was smooth and stress-free. Highly recommend!",
                rating: 5,
                image: "👩‍🎓"
              },
              {
                name: "Emmanuel Okafor",
                service: "Computer Training",
                text: "From a complete beginner to building websites in 3 months. The practical training was invaluable for my career.",
                rating: 5,
                image: "👨‍💻"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="card"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-xs text-primary-500">{testimonial.service}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "When do computer training classes start?",
                a: "Classes start every first Monday of the month. We have morning, afternoon, and evening batches available."
              },
              {
                q: "Do you guarantee admission after processing?",
                a: "While we cannot guarantee admission, our success rate is over 95% as we guide you through the entire process effectively."
              },
              {
                q: "Are Post UTME forms refundable?",
                a: "Post UTME forms are non-refundable once purchased, but we provide full support throughout the application process."
              },
              {
                q: "What's the duration of WAEC/JAMB lessons?",
                a: "Regular classes run for 3 months, while our intensive bootcamp is 6 weeks. We also offer one-on-one tutoring."
              }
            ].map((faq, idx) => (
              <div key={idx} className="card">
                <h3 className="font-semibold text-primary-500 mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl p-12 text-center backdrop-blur-sm border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their academic goals with 
            <span className="text-primary-500 font-semibold"> JEO Digital Solutions</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-block">
              Register Now
            </Link>
            <button 
              onClick={() => {
                setSelectedService(services[0]);
                setShowEnquiryModal(true);
              }}
              className="btn-secondary inline-block"
            >
              Request Info
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-400">
             Or call us: +234 8026937159 | 📧 Email: admissions@jeods.com
          </div>
        </motion.div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && !showEnquiryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full bg-dark-100 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`sticky top-0 bg-gradient-to-r ${selectedService.color} p-6 text-white`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-5xl">{selectedService.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedService.title}</h2>
                      <p className="text-white/90 text-sm">{selectedService.tagline}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-white hover:text-gray-200 text-2xl"
                  >
                    ✕
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-500">Overview</h3>
                  <p className="text-gray-300">{selectedService.fullDescription}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-500">What We Offer</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service-Specific Details */}
                {selectedService.title === "Computer Training" && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary-500">Course Levels</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {selectedService.courses.map((course, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-4">
                          <h4 className="font-bold text-lg mb-2 text-primary-500">{course.level}</h4>
                          <p className="text-sm text-gray-400 mb-2">Duration: {course.duration}</p>
                          <p className="text-sm font-semibold mb-2">Price: {course.price}</p>
                          <p className="text-xs text-gray-400">Topics: {course.topics.join(", ")}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedService.title === "Admission Processing & Guidance" && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary-500">Service Packages</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {selectedService.services.map((service, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-4">
                          <h4 className="font-bold text-lg mb-2 text-primary-500">{service.name}</h4>
                          <p className="text-sm font-semibold mb-2">Price: {service.price}</p>
                          <ul className="text-xs text-gray-400 space-y-1">
                            {service.includes.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Partner Institutions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.partnerInstitutions.map((inst, idx) => (
                          <span key={idx} className="text-xs bg-primary-500/20 text-primary-300 px-2 py-1 rounded-full">
                            {inst}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {selectedService.title === "Sales of Post UTME Forms" && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary-500">Available Forms</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-white/5">
                          <tr>
                            <th className="p-3 text-left">Institution</th>
                            <th className="p-3 text-left">Price Range</th>
                            <th className="p-3 text-left">Cut-off Mark</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedService.availableForms.map((form, idx) => (
                            <tr key={idx} className="border-b border-white/10">
                              <td className="p-3">{form.institution}</td>
                              <td className="p-3">{form.price}</td>
                              <td className="p-3">{form.cutoff}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {selectedService.title === "WAEC & JAMB Intensive Lessons" && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary-500">Program Options</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedService.programs.map((program, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-4">
                          <h4 className="font-bold text-lg mb-2 text-primary-500">{program.name}</h4>
                          <p className="text-sm text-gray-400">Duration: {program.duration}</p>
                          <p className="text-sm font-semibold">Price: {program.price}</p>
                          <p className="text-xs text-gray-400 mt-1">Schedule: {program.schedule}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 bg-green-500/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Success Statistics:</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary-500">85%</div>
                          <div className="text-xs text-gray-400">Score above 250 in JAMB</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary-500">90%</div>
                          <div className="text-xs text-gray-400">Credit pass in WAEC</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary-500">5000+</div>
                          <div className="text-xs text-gray-400">Successful Students</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-500">Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedService.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-secondary-500">→</span>
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">🎯 Expected Outcome</h3>
                  <p className="text-gray-300">{selectedService.outcome}</p>
                </div>

                {/* Schedule/Availability */}
                {selectedService.schedule && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary-500">Schedule</h3>
                    <p className="text-gray-300">{selectedService.schedule}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setShowEnquiryModal(true)}
                    className="flex-1 btn-primary"
                  >
                    Register Now
                  </button>
                  <Link to="/contact" className="flex-1 btn-secondary text-center">
                    Contact for Details
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {showEnquiryModal && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => {
              setShowEnquiryModal(false);
              setSelectedService(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-lg w-full bg-dark-100 rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`bg-gradient-to-r ${selectedService.color} p-6 rounded-t-2xl`}>
                <h2 className="text-2xl font-bold text-white">Register for {selectedService.title}</h2>
                <p className="text-white/90 text-sm mt-1">Fill in your details to get started</p>
              </div>
              
              <form onSubmit={handleSubmit(handleEnquirySubmit)} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    {...register('name', { required: 'Full name is required' })}
                    className="input-field"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Please enter a valid email'
                      }
                    })}
                    type="email"
                    className="input-field"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    {...register('phone', { required: 'Phone number is required' })}
                    className="input-field"
                    placeholder="0801 234 5678"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Program</label>
                  <select
                    {...register('program')}
                    className="input-field"
                  >
                    <option value="">Select program</option>
                    {selectedService.title === "Computer Training" && (
                      <>
                        <option>Beginner Level</option>
                        <option>Intermediate Level</option>
                        <option>Advanced Level</option>
                      </>
                    )}
                    {selectedService.title === "WAEC & JAMB Intensive Lessons" && (
                      <>
                        <option>Regular Classes</option>
                        <option>Intensive Bootcamp</option>
                        <option>One-on-One Tutoring</option>
                        <option>Online Classes</option>
                      </>
                    )}
                    {selectedService.title === "Admission Processing & Guidance" && (
                      <>
                        <option>Local Admission Processing</option>
                        <option>International Admission</option>
                        <option>Scholarship Guidance</option>
                      </>
                    )}
                    <option>Not sure yet - Contact me</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Additional Information</label>
                  <textarea
                    {...register('message')}
                    rows="3"
                    className="input-field"
                    placeholder="Any specific questions or requirements?"
                  ></textarea>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowEnquiryModal(false);
                      setSelectedService(null);
                    }}
                    className="flex-1 px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 btn-primary disabled:opacity-50"
                  >
                    {loading ? 'Submitting...' : 'Submit Registration'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;