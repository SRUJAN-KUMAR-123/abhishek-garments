import React from 'react';
import { motion } from 'framer-motion';

const Collection = () => {
  const collections = [
    {
      id: 1,
      title: "Bespoke Suits",
      description: "Custom-tailored suits made to your exact measurements",
      image: "/images/bespoke-suits.jpg",
      category: "Suits"
    },
    {
      id: 2,
      title: "Wedding Collection",
      description: "Elegant wedding attire for your special day",
      image: "/images/wedding-collection.jpg",
      category: "Wedding"
    },
    {
      id: 3,
      title: "Traditional Wear",
      description: "Classic traditional garments with modern touches",
      image: "/images/traditional-wear.jpg",
      category: "Traditional"
    },
    {
      id: 4,
      title: "Casual Elegance",
      description: "Sophisticated casual wear for everyday occasions",
      image: "/images/casual-elegance.jpg",
      category: "Casual"
    }
  ];

  return (
    <div className="bg-[#0A0A0A] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Collection</h2>
          <p className="text-gray-400 text-lg">Explore our range of premium tailored garments</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                <span className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection; 