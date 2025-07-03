import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const elements = [
    { size: 'w-4 h-4', delay: 0, duration: 6 },
    { size: 'w-6 h-6', delay: 1, duration: 8 },
    { size: 'w-3 h-3', delay: 2, duration: 7 },
    { size: 'w-5 h-5', delay: 0.5, duration: 9 },
    { size: 'w-2 h-2', delay: 1.5, duration: 5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} bg-gradient-to-r from-teal-400 to-blue-500 rounded-full opacity-20`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;