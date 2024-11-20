import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Counter: React.FC = () => {
  const stats = [
    { label: "Happy Customers", number: 14680 },
    { label: "Dishes Served", number: 11651 },
    { label: "Ordered Online", number: 8510 },
    { label: "Total Positive Review", number: 1350 },
  ];

  // Hook to animate numbers
  const useCounter = (target: number, start: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return; // Start counting only when `start` is true
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < target)
            return Math.min(prev + Math.ceil(target / 50), target); // Adjust step
          clearInterval(interval);
          return target;
        });
      }, 90); // Adjust interval timing for smoothness
      return () => clearInterval(interval);
    }, [start, target]);

    return count;
  };

  return (
    <div className="bg-fixed flex flex-col items-center justify-center space-y-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-brand">
        Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const [inView, setInView] = useState(false);
          const count = useCounter(stat.number, inView);

          return (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              onViewportEnter={() => setInView(true)} // Trigger counter when in view
            >
              <motion.h3
                className="text-4xl font-bold text-brand"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {count}
              </motion.h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Counter;
