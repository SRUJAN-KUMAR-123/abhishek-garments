import { motion } from 'framer-motion';

const About = () => {
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
          <h2 className="text-3xl font-bold text-white mb-4">About Abhishek Garments</h2>
          <p className="text-xl text-gray-400">Crafting Excellence Since 1995</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="aspect-w-16 aspect-h-9 h-[500px] rounded-lg overflow-hidden">
              <img
                src="/images/work-shop.jpg"
                alt="Expert Tailoring at Abhishek Garments"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Story</h3>
              <p className="text-gray-300">
                Founded in 1995, Abhishek Garments has been at the forefront of bespoke tailoring in India. 
                Our journey began with a simple mission: to provide exceptional custom-made garments that 
                reflect the unique style and personality of each client.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Craft</h3>
              <p className="text-gray-300">
                We combine traditional tailoring techniques with modern innovations to create garments of 
                exceptional quality. Our master tailors have decades of experience in crafting bespoke 
                suits, sherwanis, and formal wear.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Promise</h3>
              <p className="text-gray-300">
                Every garment we create is a testament to our commitment to excellence. We source the 
                finest fabrics from around the world and ensure each piece is crafted to perfection, 
                meeting the highest standards of quality and style.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center">
            <h4 className="text-4xl font-bold text-primary mb-2">25+</h4>
            <p className="text-gray-400">Years of Excellence</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-primary mb-2">10,000+</h4>
            <p className="text-gray-400">Happy Clients</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-primary mb-2">50+</h4>
            <p className="text-gray-400">Expert Tailors</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 