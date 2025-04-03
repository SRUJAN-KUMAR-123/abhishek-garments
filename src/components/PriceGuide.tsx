import { motion } from 'framer-motion';

const pricingData = [
  {
    category: 'Bespoke Suits',
    items: [
      { name: 'Classic Two-Piece Suit', price: '₹25,000 onwards' },
      { name: 'Premium Three-Piece Suit', price: '₹35,000 onwards' },
      { name: 'Luxury Tuxedo', price: '₹45,000 onwards' }
    ]
  },
  {
    category: 'Wedding Collection',
    items: [
      { name: 'Wedding Suit', price: '₹40,000 onwards' },
      { name: 'Groom Sherwani', price: '₹50,000 onwards' },
      { name: 'Reception Tuxedo', price: '₹45,000 onwards' }
    ]
  },
  {
    category: 'Traditional Wear',
    items: [
      { name: 'Classic Sherwani', price: '₹30,000 onwards' },
      { name: 'Indo-Western Suit', price: '₹35,000 onwards' },
      { name: 'Bandhgala', price: '₹28,000 onwards' }
    ]
  },
  {
    category: 'Alterations',
    items: [
      { name: 'Basic Alterations', price: '₹2,000 onwards' },
      { name: 'Complex Alterations', price: '₹5,000 onwards' },
      { name: 'Rush Service', price: 'Additional ₹1,000' }
    ]
  }
];

const PriceGuide = () => {
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
          <h2 className="text-3xl font-bold text-white mb-4">Price Guide</h2>
          <p className="text-xl text-gray-400">Transparent pricing for our premium services</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background-light/10 backdrop-blur-sm rounded-lg p-6 border border-gray-800"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center border-b border-gray-700 pb-4"
                  >
                    <span className="text-gray-300">{item.name}</span>
                    <span className="text-primary font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 text-gray-400"
        >
          <p>* Prices may vary based on fabric selection and customization options</p>
          <p>* All prices are inclusive of taxes</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceGuide; 