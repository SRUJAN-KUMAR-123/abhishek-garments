import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'James Wilson',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'The attention to detail in my bespoke suit was exceptional. The team at Abhishek Garments truly understands the art of fine tailoring.',
  },
  {
    name: 'David Thompson',
    role: 'Lawyer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'I\'ve never had a better fitting suit. The premium fabrics and expert craftsmanship at Abhishek Garments make all the difference.',
  },
  {
    name: 'Robert Chen',
    role: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'The custom shirts at Abhishek Garments are perfect for my business meetings. The collar options and fabric selection are outstanding.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Executive',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Their alteration service at Abhishek Garments is top-notch. They perfectly adjusted my evening tuxedo for a last-minute event.',
  },
  {
    name: 'Thomas Anderson',
    role: 'Professional',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'The accessories collection at Abhishek Garments is impressive. The ties and pocket squares perfectly complement my suits.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Hear what our valued clients have to say about their experience
          </p>
        </div>

        <div className="mt-20 relative h-[400px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-300 text-lg">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 