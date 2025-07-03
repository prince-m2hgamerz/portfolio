import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Rocket, Users, Award, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices and industry standards"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Modern Design",
      description: "Creating beautiful, user-friendly interfaces with attention to detail and accessibility"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance",
      description: "Building fast, optimized websites that deliver exceptional user experience"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Focus",
      description: "Understanding business needs and delivering solutions that drive real results"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "25+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "3+", label: "Years Experience", icon: <Code className="w-6 h-6" /> },
    { number: "1000+", label: "Cups of Coffee", icon: <Coffee className="w-6 h-6" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Coding workspace"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  3+ Years
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.h3
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                variants={itemVariants}
              >
                Passionate Web Developer from India
              </motion.h3>
              
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                variants={itemVariants}
              >
                I'm a Computer Science student and freelance web developer based in Delhi, India. 
                With a passion for creating digital experiences that make a difference, I specialize 
                in building modern, responsive websites and web applications that help businesses grow.
              </motion.p>
              
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                My journey began with curiosity about how websites work, and has evolved into a 
                deep love for crafting clean code and beautiful interfaces. I enjoy working with 
                local businesses to help them establish their online presence and achieve their digital goals.
              </motion.p>

              <motion.div
                className="grid sm:grid-cols-2 gap-6"
                variants={containerVariants}
              >
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-teal-600 dark:text-teal-400 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-xl"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="text-teal-600 dark:text-teal-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring", damping: 15 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;