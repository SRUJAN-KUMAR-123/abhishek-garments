import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import EditorComponent from './components/Editor'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <Features />
                <Testimonials />
                <CTA />
              </motion.div>
            }
          />
          <Route
            path="/editor"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <EditorComponent />
              </motion.div>
            }
          />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App 