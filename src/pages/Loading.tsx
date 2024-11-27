// Import necessary dependencies
import { motion } from "framer-motion"; // For animations
import { CupSoda, Coffee, Utensils } from "lucide-react"; // Icons for the loading animation

// Define the Loading component
function Loading() {
  // Array of icons to be animated
  const icons = [
    <CupSoda key="fork" />, // CupSoda icon
    <Coffee key="knife" />, // Coffee icon
    <Utensils key="utensils" />, // Utensils icon
  ];

  return (
    // Outer wrapper for the loading screen
    <motion.div
      className="flex justify-center items-center h-screen w-screen bg-brand no-copy"
      initial={{ opacity: 1 }} // Initial opacity
      animate={{ opacity: 1 }} // Maintain opacity during animation
      exit={{ opacity: 0.5 }} // Fade-out effect on exit
      transition={{ duration: 0.5 }} // Transition duration and effect
    >
      {/* Inner container for the animation */}
      <motion.div
        className="flex flex-col items-center"
        animate={{
          scale: [1, 1.2, 1], // Scale effect to create a subtle pulse
        }}
        transition={{ duration: 2, repeat: Infinity }} // Repeat the animation infinitely
      >
        {/* Row of animated icons */}
        <div className="flex space-x-4 mb-4">
          {icons.map((icon, index) => (
            // Individual icon animation
            <motion.div
              key={index} // Key for each icon
              className="text-white" // Icon color
              initial={{ y: 0 }} // Initial position
              animate={{
                y: [-10, 10, -10], // Bounce effect
              }}
              transition={{
                duration: 1.5, // Duration of each bounce
                repeat: Infinity, // Repeat indefinitely
                delay: index * 0.3, // Staggered start for each icon
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
        {/* Loading text */}
        <p className="text-2xl text-white font-bold">Loading</p>
      </motion.div>
    </motion.div>
  );
}

export default Loading;
