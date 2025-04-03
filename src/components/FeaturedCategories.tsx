import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Bespoke Suits',
    description: 'Custom-tailored suits made to your exact measurements',
    image: '/images/bespoke-suits.jpg',
    link: '/collection/bespoke'
  },
  {
    title: 'Wedding Collection',
    description: 'Elegant wedding suits for your special day',
    image: '/images/wedding-collection.jpg',
    link: '/collection/wedding'
  },
  {
    title: 'Traditional Wear',
    description: 'Classic Indian formal wear with modern touches',
    image: '/images/traditional-wear.jpg',
    link: '/collection/traditional'
  },
  {
    title: 'Casual Elegance',
    description: 'Comfortable yet stylish everyday wear',
    image: '/images/casual-elegance.jpg',
    link: '/collection/casual'
  }
];

const FeaturedCategories = () => {
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
          <h2 className="text-3xl font-bold text-white mb-4">Featured Categories</h2>
          <p className="text-xl text-gray-400">Explore our collection of premium garments</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-3 aspect-h-4 h-[400px]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover opacity-70 transform group-hover:scale-110 transition-all duration-500 group-hover:opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <Link
                  to={category.link}
                  className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
                >
                  View Collection
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;