import React from "react";
import { motion } from "framer-motion";

const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      review: "Absolutely loved the food! The flavors were amazing.",
      rating: 5,
      image: "/images/person/1.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "The service was top-notch, and the dishes were delightful!",
      rating: 4,
      image: "/images/person/1.png",
    },
    {
      id: 3,
      name: "Emily Johnson",
      review: "A wonderful experience, highly recommend the pasta!",
      rating: 5,
      image: "/images/person/1.png",
    },
    {
      id: 4,
      name: "Chris Lee",
      review: "The desserts were heavenly! Will definitely come back.",
      rating: 4,
      image: "/images/person/1.png",
    },
    {
      id: 5,
      name: "Sophia Brown",
      review: "Great ambiance and delicious food. A must-visit place.",
      rating: 5,
      image: "/images/person/1.png",
    },
    {
      id: 6,
      name: "Liam Davis",
      review: "The portions were generous, and the taste was incredible.",
      rating: 4,
      image: "/images/person/1.png",
    },
  ];

  // Animation variants for staggered reviews
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" },
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 poppins-regular">
      <h2 className="text-3xl font-bold text-center text-brand mb-8">
        Customer Reviews
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            className="bg-white rounded-lg shadow-md p-6 hover:cursor-pointer"
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover  mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-brand">
                  {review.name}
                </h3>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{review.review}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CustomerReviews;
