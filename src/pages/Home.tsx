import React from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import QuickAccess from '../components/QuickAccess';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import PriceGuide from '../components/PriceGuide';
import MeasurementGuide from '../components/MeasurementGuide';
import About from '../components/About';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <FeaturedCategories />
      <QuickAccess />
      <Features />
      <About />
      <MeasurementGuide />
      <PriceGuide />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Home;