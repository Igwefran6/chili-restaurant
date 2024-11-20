import { motion } from "framer-motion";
import { CupSoda, Coffee, Utensils } from "lucide-react";

function Loading() {
  const icons = [
    <CupSoda key="fork" />,
    <Coffee key="knife" />,
    <Utensils key="utensils" />,
  ];

  return (
    <motion.div
      className="flex justify-center items-center h-screen w-screen bg-brand no-copy"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex space-x-4 mb-4">
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              className="text-white"
              initial={{ y: 0 }}
              animate={{
                y: [-10, 10, -10], // Bouncing effect
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.3, // Staggered animation
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
        <p className="text-2xl text-white font-bold">Loading</p>
      </motion.div>
    </motion.div>
  );
}

export default Loading;
