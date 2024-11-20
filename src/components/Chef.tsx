import { motion } from "framer-motion";
import React from "react";
import { ImageLoader } from "../utils/ImageLoader";

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
      description: " Passionate about creating innovative dishes.",
    },
  ];

  chefs.map((item) => ImageLoader(item.image));

  return (
    <div className="py-16 z-10">
      <h2 className="text-center text-3xl font-bold mb-8 text-brand">
        Meet Our Chefs
      </h2>
      <div className="flex justify-center gap-16 flex-wrap">
        {chefs.map((chef, index) => {
          ImageLoader(chef.image);
          return (
            <motion.div
              initial={{ y: 100, opacity: 0.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 + index / 2 }}
              viewport={{ once: true }}
              key={index}
              className="text-center max-w-xs bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={chef.image}
                alt={chef.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-brand">
                  {chef.name}
                </h3>
                <p className="text-gray-600">{chef.role}</p>
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
