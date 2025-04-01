import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Initial Consultation',
    description: 'Meet with our master tailors at Abhishek Garments to discuss your style preferences, occasion, and fabric selection.',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Precise Measurements',
    description: 'Our expert tailors at Abhishek Garments take over 20 measurements to ensure a perfect fit that\'s uniquely yours.',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    title: 'Fabric Selection',
    description: 'Choose from our extensive collection of premium fabrics at Abhishek Garments from renowned mills worldwide.',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'First Fitting',
    description: 'Try on your garment in progress at Abhishek Garments to ensure perfect fit and make any necessary adjustments.',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Final Fitting',
    description: 'Your garment is perfected with final adjustments and hand-finished details at Abhishek Garments.',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const MeasurementProcess = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            The Abhishek Garments Process
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Experience our meticulous approach to creating your perfect garment
          </p>
        </div>

        <div className="mt-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center gap-8 mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="flex-1">
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeasurementProcess; 