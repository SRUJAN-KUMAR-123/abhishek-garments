import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-background-light/50 backdrop-blur-md border border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
          
          <div className="relative px-6 py-16 sm:px-12 sm:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold text-white sm:text-4xl"
              >
                Ready to Elevate Your Style?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 text-xl text-gray-400"
              >
                Experience the perfect fit with Abhishek Garments. Join hundreds of satisfied clients who trust us for their bespoke tailoring needs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button 
                  onClick={() => navigate('/appointment')}
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Book Your Appointment
                </button>
                <button 
                  onClick={() => navigate('/collection')}
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Our Collection
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 text-sm text-gray-500"
              >
                Free Consultation • Expert Tailoring • Premium Fabrics • Perfect Fit Guaranteed
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 