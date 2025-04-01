import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Abhishek Garments
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link to="/collection" className="text-gray-300 hover:text-white transition-colors duration-200">
                Collection
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                Services
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </Link>
              <Link
                to="/book"
                className="px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 rounded-b-2xl"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/collection"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Collection
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/book"
              className="block px-3 py-2 rounded-md text-base font-medium bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar; 