import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/portfolio';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];

  const cardVariants = {
    enter: {
      x: 300,
      opacity: 0,
      rotateY: 90,
    },
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    exit: {
      x: -300,
      opacity: 0,
      rotateY: -90,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
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
              Client Testimonials
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              What my clients say about working with me
            </p>
          </motion.div>

          <div className="relative" style={{ perspective: "1000px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl"
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-center mb-8">
                  <motion.div
                    className="relative inline-block mb-6"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Quote className="w-16 h-16 text-teal-600 dark:text-teal-400 mx-auto" />
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                  
                  <motion.p
                    className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{currentTestimonial.content}"
                  </motion.p>
                  
                  <motion.div
                    className="flex justify-center mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.img 
                      src={currentTestimonial.avatar} 
                      alt={currentTestimonial.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="text-center md:text-left">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-teal-600 dark:text-teal-400 font-semibold">
                        {currentTestimonial.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {currentTestimonial.company}
                      </p>
                      {currentTestimonial.projectType && (
                        <span className="inline-block mt-2 px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm">
                          {currentTestimonial.projectType}
                        </span>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            <motion.button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Dots Navigation */}
          <motion.div
            className="flex justify-center mt-8 space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-200 ${
                  index === activeIndex
                    ? 'bg-teal-600 dark:bg-teal-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;