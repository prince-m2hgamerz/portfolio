import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingSocial from './components/FloatingSocial';
import Real3DBlackHole from './components/3D/Real3DBlackHole';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom styles for animations and scrollbar
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fade-up {
        animation: fadeUp 0.6s ease-out forwards;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgb(243 244 246);
      }
      
      .dark ::-webkit-scrollbar-track {
        background: rgb(31 41 55);
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, rgb(147 51 234), rgb(59 130 246));
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, rgb(126 34 206), rgb(37 99 235));
      }

      /* Line clamp utility */
      .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      /* Perspective utilities */
      .perspective-1000 {
        perspective: 1000px;
      }

      .preserve-3d {
        transform-style: preserve-3d;
      }

      /* Black hole glow effect */
      .black-hole-glow {
        filter: blur(1px);
        background: radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%);
      }

      /* WebGL Canvas styling */
      canvas {
        display: block;
        outline: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-black transition-colors duration-300 relative overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Real 3D Black Hole Background */}
      <Real3DBlackHole />
      
      {/* Content Overlay with cosmic gradient */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-black/80 to-black">
        <Header />
        <main>
          <Hero />
          <div className="bg-gradient-to-b from-black via-gray-900/95 to-white dark:to-gray-900">
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Services />
            <Testimonials />
            <Achievements />
            <Blog />
            <Contact />
          </div>
        </main>
        <Footer />
        <FloatingSocial />
      </div>
    </motion.div>
  );
}

export default App;