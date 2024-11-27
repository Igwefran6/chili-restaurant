import React from "react";
import { motion } from "framer-motion"; // Import motion for animations

const CustomerReviews: React.FC = () => {
  // Example reviews data
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

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial hidden state
    visible: {
      opacity: 1, // Final visible state
      transition: {
        staggerChildren: 0.2, // Staggered animation for each review card
      },
    },
  };

  // Animation variants for individual review cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initially hidden with slight vertical offset
    visible: {
      opacity: 1, // Fade in
      y: 0, // Slide to normal position
      transition: { duration: 0.5 }, // Duration for animation
    },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }, // Hover effect (slightly enlarge and shadow)
  };

  // Function to render star ratings based on the review rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-500" : "text-gray-300"
        }`} // Yellow stars for rating, gray for empty
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 poppins-regular">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-brand mb-8">
        Customer Reviews
      </h2>

      {/* Container for the review cards with animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden" // Initial state of container
        animate="visible" // Animated state when in view
        variants={containerVariants} // Applying container variants
      >
        {/* Iterate over reviews and render each card */}
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            className="bg-white rounded-lg shadow-md p-6 hover:cursor-pointer"
            initial="hidden" // Initial state for each card
            whileInView="visible" // Become visible when in view
            whileHover="hover" // Apply hover effect
            viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of the card is in view
            variants={cardVariants} // Apply card-specific animation variants
          >
            {/* Reviewer's image and details */}
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover  mr-4"
              />
              <div>
                {/* Reviewer's name */}
                <h3 className="text-xl font-semibold text-brand">
                  {review.name}
                </h3>
                {/* Star ratings */}
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
            </div>

            {/* Review text */}
            <p className="text-gray-600 text-sm">{review.review}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CustomerReviews;
