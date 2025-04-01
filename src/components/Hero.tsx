import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img 
          src="/images/hero-bg.jpg" 
          alt="Luxury Tailoring Workshop" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 1.5,
            ease: "easeOut"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-[#2D1B3D]/30 to-black/40 animate-gradient-x" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] animate-gradient-y" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-black/60 to-transparent rounded-full blur-3xl"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 2.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-black/60 to-transparent rounded-full blur-3xl"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 2.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-b from-[#2D1B3D]/25 to-transparent rounded-full blur-3xl"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a4a4a10_1px,transparent_1px),linear-gradient(to_bottom,#4a4a4a10_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2,
            ease: [0.34, 1.56, 0.64, 1]
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.2,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            Bespoke Tailoring at its Finest
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            Experience the art of custom tailoring with Abhishek Garments
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.6,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            <Link
              to="/book"
              className="relative bg-gradient-to-b from-[#3D2B4D] to-[#2D1B3D] text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-500 group hover:from-[#4D3B5D] hover:to-[#3D2B4D] shadow-lg hover:shadow-xl"
            >
              <span className="absolute inset-0 rounded-md bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute -inset-[2px] rounded-md bg-gradient-to-r from-white/80 via-white/40 to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[border-rotate_3s_linear_infinite] bg-[length:200%_100%]" />
              <span className="absolute inset-[2px] rounded-[4px] bg-gradient-to-b from-[#3D2B4D] to-[#2D1B3D] group-hover:from-[#4D3B5D] group-hover:to-[#3D2B4D] transition-all duration-500" />
              <span className="relative">Book Appointment</span>
            </Link>
            <Link
              to="/collection"
              className="relative bg-gradient-to-b from-[#2D1B3D]/70 to-[#1D0B2D]/70 text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-500 group hover:from-[#3D2B4D]/70 hover:to-[#2D1B3D]/70 shadow-lg hover:shadow-xl"
            >
              <span className="absolute inset-0 rounded-md bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute -inset-[2px] rounded-md bg-gradient-to-r from-white/80 via-white/40 to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[border-rotate_3s_linear_infinite] bg-[length:200%_100%]" />
              <span className="absolute inset-[2px] rounded-[4px] bg-gradient-to-b from-[#2D1B3D]/70 to-[#1D0B2D]/70 group-hover:from-[#3D2B4D]/70 group-hover:to-[#2D1B3D]/70 transition-all duration-500" />
              <span className="relative">View Collection</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Quick Info Cards */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm py-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 0.8,
          ease: [0.34, 1.56, 0.64, 1]
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div 
              className="text-center text-white"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1,
                delay: 1,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              <div className="text-2xl font-bold">20+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </motion.div>
            <motion.div 
              className="text-center text-white"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1,
                delay: 1.2,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </motion.div>
            <motion.div 
              className="text-center text-white"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1,
                delay: 1.4,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-gray-300">Premium Fabrics</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero; 