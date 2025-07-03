import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, Briefcase, GraduationCap, User } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const typeIcons = {
    work: Briefcase,
    education: GraduationCap,
    freelance: User,
  };

  const typeColors = {
    work: 'from-blue-600 to-blue-700',
    education: 'from-green-600 to-green-700',
    freelance: 'from-purple-600 to-purple-700',
  };

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
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My journey in web development and the experiences that have shaped my skills
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-600 to-blue-600 rounded-full"
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {experiences.map((experience, index) => {
                const IconComponent = typeIcons[experience.type];
                const colorClass = typeColors[experience.type];
                
                return (
                  <motion.div
                    key={experience.id}
                    className={`relative mb-12 ${
                      index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
                    }`}
                    variants={itemVariants}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className={`absolute w-16 h-16 bg-gradient-to-r ${colorClass} rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center ${
                        index % 2 === 0 
                          ? 'left-0 md:left-auto md:-right-8' 
                          : 'left-0 md:-left-8'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.5, type: "spring", damping: 15 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : ''}`}>
                      <motion.div
                        className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        whileHover={{
                          rotateY: index % 2 === 0 ? -5 : 5,
                          rotateX: 2,
                        }}
                        style={{ perspective: "1000px" }}
                      >
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {experience.title}
                          </h3>
                          <span className="text-teal-600 dark:text-teal-400 font-semibold">
                            @ {experience.company}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span className="text-sm">{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span className="text-sm">Delhi, India</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {experience.description}
                        </p>

                        {experience.achievements && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                              <Award size={16} className="text-teal-600 dark:text-teal-400" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-1">
                              {experience.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                                    {achievement}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <motion.span 
                              key={techIndex}
                              className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm"
                              whileHover={{ scale: 1.05 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: index * 0.2 + techIndex * 0.1 + 0.8 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;