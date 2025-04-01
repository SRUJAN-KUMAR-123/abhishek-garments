import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  'All',
  'Business Suits',
  'Evening Wear',
  'Casual Blazers',
  'Custom Shirts',
  'Accessories',
];

const collections = [
  {
    id: 1,
    title: 'Classic Business Suit',
    category: 'Business Suits',
    price: 'Starting from $1,200',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Timeless elegance with modern comfort',
    fabric: 'Italian Wool',
    color: 'Navy Blue',
  },
  {
    id: 2,
    title: 'Evening Tuxedo',
    category: 'Evening Wear',
    price: 'Starting from $2,500',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Perfect for special occasions',
    fabric: 'Silk Blend',
    color: 'Black',
  },
  {
    id: 3,
    title: 'Casual Blazer',
    category: 'Casual Blazers',
    price: 'Starting from $800',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Versatile style for everyday wear',
    fabric: 'Cotton Blend',
    color: 'Gray',
  },
  {
    id: 4,
    title: 'Custom Dress Shirt',
    category: 'Custom Shirts',
    price: 'Starting from $300',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Perfect fit and comfort',
    fabric: 'Egyptian Cotton',
    color: 'White',
  },
  // Add more items as needed
];

const CollectionShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredCollections = selectedCategory === 'All'
    ? collections
    : collections.filter(item => item.category === selectedCategory);

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
            Our Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Discover our range of bespoke garments
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
                <div className="mt-2 text-sm text-gray-400">
                  <p>Fabric: {item.fabric}</p>
                  <p>Color: {item.color}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-primary font-medium">{item.price}</span>
                  <Link
                    to={`/collection/${item.id}`}
                    className="text-white hover:text-primary transition-colors duration-300"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase; 