import { motion } from "framer-motion"; // Import motion for animations
import React from "react";
import { ImageLoader } from "../utils/ImageLoader"; // Import ImageLoader utility function

const Chefs: React.FC = () => {
  // Example data for chefs
  const chefs = [
    {
      name: "Chef John Doe",
      role: "Executive Chef",
      image: "/images/chefs/chef1.png", // Image path
      description: "Specializing in French and Italian cuisine.",
    },
    {
      name: "Chef Jane Smith",
      role: "Pastry Chef",
      image: "/images/chefs/chef2.png",
      description: "Bringing the finest desserts to the table.",
    },
    {
      name: "Chef Carlos Martinez",
      role: "Sous Chef",
      image: "/images/chefs/chef3.png",
      description: "Passionate about creating innovative dishes.",
    },
  ];

  // Pre-load images using ImageLoader utility for each chef's image
  chefs.map((item) => ImageLoader(item.image));

  return (
    <div className="py-16 z-10">
      {/* Header section for the chefs' introduction */}
      <h2 className="text-center text-3xl font-bold mb-8 text-brand">
        Meet Our Chefs
      </h2>

      {/* Flexbox container to display chef cards */}
      <div className="flex justify-center gap-16 flex-wrap">
        {/* Map over chefs data and render individual chef cards */}
        {chefs.map((chef, index) => {
          // Pre-load images for each chef card
          ImageLoader(chef.image);

          return (
            <motion.div
              initial={{ y: 100, opacity: 0.2 }} // Initial animation values (slide up and fade-in)
              whileInView={{ y: 0, opacity: 1 }} // Animation when the card enters the viewport
              transition={{ duration: 1 + index / 2 }} // Transition duration with a slight delay for each chef card
              viewport={{ once: true }} // Animation triggers only once when the card is in view
              key={index}
              className="text-center max-w-xs bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Chef's image */}
              <img
                src={chef.image}
                alt={chef.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                {/* Chef's name */}
                <h3 className="text-xl font-semibold text-brand">
                  {chef.name}
                </h3>
                {/* Chef's role */}
                <p className="text-gray-600">{chef.role}</p>
                {/* Chef's description */}
                <p className="mt-2 text-gray-500">{chef.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Chefs;
