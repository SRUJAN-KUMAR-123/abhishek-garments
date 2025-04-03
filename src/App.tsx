import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import EditorComponent from './components/Editor'
import PriceGuide from './components/PriceGuide'
import MeasurementGuide from './components/MeasurementGuide'
import AppointmentBooking from './components/AppointmentBooking'
import About from './components/About'
import Collection from './components/Collection'

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
                <Home />
              </motion.div>
            }
          />
          <Route path="/editor" element={<EditorComponent />} />
          <Route path="/price-guide" element={<PriceGuide />} />
          <Route path="/measurement-guide" element={<MeasurementGuide />} />
          <Route path="/book-appointment" element={<AppointmentBooking />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 