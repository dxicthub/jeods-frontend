import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import team member images
import teamImg1 from '../assets/team_members_imgs/teamImg1.jpg';
import teamImg2 from '../assets/team_members_imgs/teamImg2.jpg';
import teamImg3 from '../assets/team_members_imgs/teamImg3.jpg';
import teamImg4 from '../assets/team_members_imgs/teamImg4.jpg';
import teamImg5 from '../assets/team_members_imgs/teamImg5.jpg';
import teamImg6 from '../assets/team_members_imgs/teamImg6.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['mission', 'journey', 'values', 'team', 'impact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          setIsVisible(prev => ({ ...prev, [section]: rect.top < window.innerHeight - 100 }));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { value: "10,000+", label: "Students Empowered", icon: "" },
    { value: "98%", label: "Success Rate", icon: "" },
    { value: "50+", label: "Expert Instructors", icon: "" },
    { value: "15+", label: "Years of Excellence", icon: "" },
    { value: "100+", label: "Partner Schools", icon: "" },
    { value: "24/7", label: "Student Support", icon: "" }
  ];

  const values = [
    { title: "Excellence", description: "We strive for excellence in everything we do, from our teaching methods to our student support services.", icon: "", color: "from-yellow-500/20 to-yellow-600/20" },
    { title: "Innovation", description: "We embrace cutting-edge technology and innovative teaching methods to deliver the best learning experience.", icon: "", color: "from-blue-500/20 to-blue-600/20" },
    { title: "Integrity", description: "We operate with transparency, honesty, and ethical practices in all our dealings.", icon: "", color: "from-green-500/20 to-green-600/20" },
    { title: "Student-Centric", description: "Our students' success is our ultimate goal. We tailor our approach to meet individual needs.", icon: "", color: "from-purple-500/20 to-purple-600/20" },
    { title: "Community", description: "We build a supportive community where students can learn, grow, and succeed together.", icon: "", color: "from-orange-500/20 to-orange-600/20" },
    { title: "Quality", description: "Continuous improvement and commitment to delivering exceptional results.", icon: "", color: "from-red-500/20 to-red-600/20" }
  ];

  const team = [
    { name: "Chief Justice Ekueme O.", role: "Founder & CEO", experience: "20+ years in education", image: teamImg1, bio: "Visionary leader with a passion for transforming education through technology." },
    { name: "Dr. Sarah Johnson", role: "Head of Academics", experience: "15+ years teaching experience", image: teamImg2, bio: "Curriculum expert with a PhD in Educational Technology." },
    { name: "Engr. Michael Adeleke", role: "Technical Director", experience: "12+ years in software engineering", image: teamImg3, bio: "Leading our technology initiatives and digital transformation." },
    { name: "Mrs. Grace Okonkwo", role: "Student Affairs Director", experience: "10+ years in student counseling", image: teamImg4, bio: "Passionate about student success and well-being." },
    { name: "Mr. David Nwachukwu", role: "Data Science Lead", experience: "8+ years in data analytics", image: teamImg5, bio: "Expert in transforming data into actionable insights." },
    { name: "Dr. Mrs. Ifeoma Eze", role: "Academic Advisor", experience: "15+ years in education", image: teamImg6, bio: "Dedicated to helping students achieve academic excellence." }
  ];

  const milestones = [
    { year: "2010", title: "Founded", description: "JEO Digital Solutions was established with a vision to transform education.", icon: "" },
    { year: "2013", title: "First 1000 Students", description: "Reached the milestone of training 1000+ students.", icon: "" },
    { year: "2016", title: "Expansion", description: "Expanded operations to multiple locations across Nigeria.", icon: "" },
    { year: "2019", title: "Digital Innovation", description: "Launched online learning platform and digital resources.", icon: "" },
    { year: "2022", title: "Partnerships", description: "Partnered with 50+ schools and institutions nationwide.", icon: "" },
    { year: "2024", title: "Global Reach", description: "Expanded services to international students.", icon: "" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000"></div>
          <div className="absolute bottom-0 right-20 w-96 h-96 bg-secondary-600 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float animation-delay-6000"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-sm text-gray-300">Since 2010</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                About JEO Digital
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Empowering the next generation through innovative technology and quality education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-5xl mb-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To bridge the digital divide by providing accessible, quality technology education and guidance services that empower students and professionals to achieve their academic and career goals.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-primary-500 font-semibold">Our Commitment:</p>
                <p className="text-gray-400 text-sm mt-2">✓ 100% Student Satisfaction Guaranteed</p>
                <p className="text-gray-400 text-sm">✓ Continuous Support & Guidance</p>
                <p className="text-gray-400 text-sm">✓ Quality Education at Affordable Rates</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-secondary-500/10 to-primary-500/10 rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-5xl mb-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To become Africa's leading educational technology hub, recognized globally for excellence in transforming lives through innovative learning solutions.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-secondary-500 font-semibold">Our Goal:</p>
                <p className="text-gray-400 text-sm mt-2"> Reach 1 Million Students by 2030</p>
                <p className="text-gray-400 text-sm"> Become Africa's #1 EdTech Platform</p>
                <p className="text-gray-400 text-sm"> Revolutionize Education Through Technology</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="impact" className="py-20 px-4 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="section-title text-3xl md:text-4xl">Our Impact in Numbers</h2>
            <p className="section-subtitle text-base md:text-lg">
              Making a difference through measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-primary-500">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="values" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="section-title text-3xl md:text-4xl">Our Core Values</h2>
            <p className="section-subtitle text-base md:text-lg">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className={`bg-gradient-to-br ${value.color} rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 group cursor-pointer`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="py-20 px-4 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="section-title text-3xl md:text-4xl">Our Journey</h2>
            <p className="section-subtitle text-base md:text-lg">
              Milestones that shaped our story
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block"></div>
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className={`relative mb-12 ${idx % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:text-left'}`}
              >
                <div className={`flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4`}>
                  <div className={`hidden md:block w-1/2 ${idx % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-dark-100/50 rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                      <div className="text-4xl mb-2">{milestone.icon}</div>
                      <div className="text-primary-500 font-bold text-sm">{milestone.year}</div>
                      <h3 className="text-xl font-bold mt-2">{milestone.title}</h3>
                      <p className="text-gray-400 text-sm mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="md:hidden w-full mb-4">
                    <div className="bg-dark-100/50 rounded-2xl p-6 border border-white/10">
                      <div className="text-4xl mb-2">{milestone.icon}</div>
                      <div className="text-primary-500 font-bold text-sm">{milestone.year}</div>
                      <h3 className="text-xl font-bold mt-2">{milestone.title}</h3>
                      <p className="text-gray-400 text-sm mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white font-bold z-10">
                    {idx + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="section-title text-3xl md:text-4xl">Meet Our Leadership</h2>
            <p className="section-subtitle text-base md:text-lg">
              Passionate experts dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="card group cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary-500/50 shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                    {member.experience}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center">{member.name}</h3>
                <p className="text-primary-500 text-center text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-center text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="section-title text-3xl md:text-4xl">What People Say</h2>
            <p className="section-subtitle text-base md:text-lg">
              Real stories from our students and partners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Oluwaseun Adebayo", role: "Medical Student, UNILAG", quote: "JEO Digital Solutions transformed my JAMB preparation. Their CBT training was exceptional and I scored 287!", rating: 5 },
              { name: "Emmanuel Okafor", role: "Engineering Student, UNN", quote: "The admission processing service was seamless. They secured my admission into UNN within weeks. Highly recommended!", rating: 5 },
              { name: "Fatima Bello", role: "Web Developer", quote: "I learned web development in just 3 months. Now I'm working as a freelance developer. Thank you JEO Digital!", rating: 5 }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="card p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="section-title text-3xl md:text-4xl">Our Partners</h2>
            <p className="section-subtitle text-base md:text-lg">
              Trusted by leading institutions and organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["UNIPORT", "UNICAL", "ABSU", "Afe Babalola", "UNN", "OAU", "UNILAG", "ABU"].map((partner, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-2"></div>
                <p className="text-white font-semibold">{partner}</p>
                <p className="text-gray-500 text-xs mt-1">Partner Institution</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl p-12 backdrop-blur-sm border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of successful students who have trusted JEO Digital Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-block">
                Get Started Today
              </Link>
              <Link to="/services" className="px-6 py-2 rounded-lg border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;