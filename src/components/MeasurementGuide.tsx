import { motion } from 'framer-motion';

const measurementSteps = [
  {
    title: 'Initial Consultation',
    description: 'Meet with our expert tailors to discuss your style preferences and requirements.',
    image: '/images/measurement-consultation.jpg'
  },
  {
    title: 'Body Measurements',
    description: 'Precise measurements taken for over 20 different points to ensure the perfect fit.',
    image: '/images/precise-measurements.jpg'
  },
  {
    title: 'Fabric Selection',
    description: 'Choose from our premium collection of imported fabrics.',
    image: '/images/fabric-selection.jpg'
  },
  {
    title: 'First Fitting',
    description: 'Try on the initial garment for adjustments and refinements.',
    image: '/images/suit-fitting.jpg'
  }
];

const MeasurementGuide = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Measurement Process</h2>
          <p className="text-xl text-gray-400">Experience precision tailoring with our expert measurement process</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {measurementSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="aspect-w-16 aspect-h-9 h-[400px]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 rounded-lg" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="/book-appointment"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
          >
            Book Your Measurement Session
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MeasurementGuide; 