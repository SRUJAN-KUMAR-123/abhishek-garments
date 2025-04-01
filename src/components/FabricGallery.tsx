import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fabricCategories = [
  'All',
  'Wool',
  'Silk',
  'Cotton',
  'Linen',
  'Blends',
];

const fabrics = [
  {
    id: 1,
    name: 'Italian Super 150s Wool',
    category: 'Wool',
    price: 'From $200/meter',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Premium Italian wool with exceptional softness and durability',
    colors: ['Navy', 'Charcoal', 'Black'],
    weight: '280g/m²',
    origin: 'Italy',
  },
  {
    id: 2,
    name: 'Egyptian Cotton',
    category: 'Cotton',
    price: 'From $150/meter',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Luxurious Egyptian cotton with superior breathability',
    colors: ['White', 'Light Blue', 'Pink'],
    weight: '180g/m²',
    origin: 'Egypt',
  },
  {
    id: 3,
    name: 'Silk Blend',
    category: 'Silk',
    price: 'From $300/meter',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Elegant silk blend perfect for evening wear',
    colors: ['Black', 'Navy', 'Burgundy'],
    weight: '220g/m²',
    origin: 'China',
  },
  {
    id: 4,
    name: 'Irish Linen',
    category: 'Linen',
    price: 'From $180/meter',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Classic Irish linen with natural texture',
    colors: ['Natural', 'White', 'Beige'],
    weight: '200g/m²',
    origin: 'Ireland',
  },
  // Add more fabrics as needed
];

const FabricGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFabric, setSelectedFabric] = useState<number | null>(null);

  const filteredFabrics = selectedCategory === 'All'
    ? fabrics
    : fabrics.filter(fabric => fabric.category === selectedCategory);

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
            Premium Fabric Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Explore our selection of finest fabrics from around the world
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {fabricCategories.map((category) => (
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

        {/* Fabric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFabrics.map((fabric) => (
            <motion.div
              key={fabric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group bg-white/5 rounded-lg overflow-hidden"
              onClick={() => setSelectedFabric(fabric.id)}
            >
              <div className="relative h-64">
                <img
                  src={fabric.image}
                  alt={fabric.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{fabric.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{fabric.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                  <div>
                    <p className="font-medium">Weight:</p>
                    <p>{fabric.weight}</p>
                  </div>
                  <div>
                    <p className="font-medium">Origin:</p>
                    <p>{fabric.origin}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-400 mb-2">Available Colors:</p>
                  <div className="flex gap-2">
                    {fabric.colors.map((color) => (
                      <div
                        key={color}
                        className="w-6 h-6 rounded-full border border-white/20"
                        style={{ backgroundColor: color.toLowerCase() }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-primary font-medium">{fabric.price}</span>
                  <button className="text-white hover:text-primary transition-colors duration-300">
                    Request Sample →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FabricGallery; 