import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import FloatingElements from './3D/FloatingElements';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // In a real implementation, this would download an actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would replace this with actual resume file
    link.download = 'Prince_Kumar_Resume.pdf';
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <FloatingElements />
      
      {/* Cosmic Dust Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-8" variants={itemVariants}>
            <motion.div
              className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 via-purple-600 to-black p-1 shadow-2xl"
              variants={floatingVariants}
              animate="animate"
              style={{
                boxShadow: '0 0 50px rgba(147, 51, 234, 0.5), inset 0 0 50px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden border-2 border-purple-500/30">
                <img 
                  src="blob:https://web.whatsapp.com/d0a43422-181a-4a66-be65-a0a54ab8915e" 
                  alt="Prince Kumar"
                  className="w-36 h-36 rounded-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              variants={itemVariants}
            >
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="text-purple-400 font-semibold">
                Available for Freelance Projects
              </span>
              <Sparkles className="w-6 h-6 text-purple-400" />
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Hi, I'm{' '}
              <motion.span
                className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Prince Kumar
              </motion.span>
            </motion.h1>
            
            <motion.div variants={itemVariants}>
              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-4"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Full-Stack Web Developer & Digital Creator
              </motion.p>
            </motion.div>
            
            <motion.p
              className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Passionate about creating beautiful, functional websites and web applications. 
              Currently pursuing Computer Science while building digital solutions for businesses across India.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.button
              onClick={downloadResume}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-200 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.3), 0 10px 10px -5px rgba(147, 51, 234, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.button>
            
            <motion.button
              onClick={scrollToAbout}
              className="flex items-center gap-2 border-2 border-purple-600 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown size={20} />
              </motion.div>
            </motion.button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            {[
              { icon: Mail, href: "mailto:m2hgamerz.prince@gmail.com", color: "hover:text-red-400" },
              { icon: Linkedin, href: "https://linkedin.com/in/prince-kumar-m2h", color: "hover:text-blue-400" },
              { icon: Github, href: "https://github.com/prince-m2hgamerz", color: "hover:text-gray-300" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`p-3 rounded-full bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 text-gray-300 ${social.color} border border-purple-500/20`}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.2), 0 10px 10px -5px rgba(147, 51, 234, 0.1)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-purple-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
