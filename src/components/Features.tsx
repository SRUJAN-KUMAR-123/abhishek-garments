import { motion } from 'framer-motion';

const features = [
  {
    title: 'Custom Fitting',
    description: "Experience our precise measurement process at Abhishek Garments where we take over 20 measurements to ensure a perfect fit that's uniquely yours.",
    image: '/images/custom-fitting.jpg',
  },
  {
    title: 'Premium Fabrics',
    description: 'Choose from our extensive collection of premium Italian and British fabrics at Abhishek Garments, carefully selected for their quality and durability.',
    image: '/images/premium-fabrics.jpg',
  },
  {
    title: 'Expert Tailoring',
    description: 'Our master tailors at Abhishek Garments bring decades of experience, crafting each garment with meticulous attention to detail and traditional techniques.',
    image: '/images/expert-tailoring.jpg',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Why Choose Abhishek Garments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Experience the difference of true bespoke tailoring
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-background-light/50 backdrop-blur-md rounded-lg overflow-hidden border border-gray-800"
            >
              {/* Feature Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover opacity-70"
                  whileHover={{ scale: 1.05, opacity: 0.85 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-light/50 via-black/30 to-transparent" />
              </div>

              {/* Feature Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 