import React, { useState, useEffect } from "react"; // Import React hooks for state and effect
import { motion } from "framer-motion"; // Importing motion from framer-motion for animations

const Counter: React.FC = () => {
  // Static data for different achievements
  const stats = [
    { label: "Happy Customers", number: 14680 },
    { label: "Dishes Served", number: 11651 },
    { label: "Ordered Online", number: 8510 },
    { label: "Total Positive Review", number: 1350 },
  ];

  // Custom hook to animate numbers towards a target
  const useCounter = (target: number, start: boolean) => {
    const [count, setCount] = useState(0); // State to store the current count

    useEffect(() => {
      if (!start) return; // Only start counting when `start` is true
      // Set interval to update the count gradually towards the target
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < target)
            return Math.min(prev + Math.ceil(target / 50), target); // Gradually increase count towards target
          clearInterval(interval); // Stop interval once the target is reached
          return target;
        });
      }, 90); // 90ms interval for smooth animation
      return () => clearInterval(interval); // Cleanup on component unmount or when counting stops
    }, [start, target]); // Dependencies: re-run effect when `start` or `target` changes

    return count; // Return the current count value
  };

  return (
    <div className="bg-fixed flex flex-col items-center justify-center space-y-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-brand">
        Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const [inView, setInView] = useState(false); // State to track if the counter is in view
          const count = useCounter(stat.number, inView); // Call useCounter with the target value and inView state

          return (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }} // Initial state for animation (hidden and slightly moved)
              whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and normal position when in view
              viewport={{ once: true }} // Only trigger animation once when the element enters the viewport
              transition={{ delay: index * 0.2, duration: 0.8 }} // Stagger animation based on index
              onViewportEnter={() => setInView(true)} // Set inView to true when the element is in the viewport
            >
              <motion.h3
                className="text-4xl font-bold text-brand"
                initial={{ opacity: 0 }} // Initial state for the number (hidden)
                whileInView={{ opacity: 1 }} // Animate to full opacity when in view
                viewport={{ once: true }} // Trigger animation only once
              >
                {count} {/* Render the animated count value */}
              </motion.h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>{" "}
              {/* Label for the achievement */}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Counter;
