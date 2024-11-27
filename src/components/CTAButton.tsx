import { motion } from "framer-motion"; // Import motion for animations
import React from "react";

// CTAButton component to display a customizable button
const CTAButton: React.FC<{
  label: string; // Button text label
  path?: string; // Optional path for navigation
  disabled?: boolean; // Optional disabled state
  handleClick?: () => void; // Optional function to handle the click event
}> = ({ label, path, disabled, handleClick }) => {
  // Function to handle button click event
  function handleButtonClick() {
    if (path) {
      // If a path is provided, navigate to the specified location
      // For example, you can use `window.location.href = path` or a router method
      // window.location.href = path;
    }

    // If a custom click handler is provided, call it
    if (handleClick !== undefined) {
      handleClick();
    }
  }

  return (
    <motion.button
      disabled={disabled} // Disable the button if the `disabled` prop is true
      onClick={handleButtonClick} // Handle click event
      className="min-h-6 w-fit px-4 py-1 rounded-full bg-accent-yellow text-gray-dark font-semibold drop-shadow-xl transition-all duration-300"
      // Animation properties from framer-motion
      whileHover={{
        background: "linear-gradient(90deg, #F8B400, #FF8C00)", // Gradient effect on hover
      }}
      whileTap={{ scale: 0.8, y: 4 }} // Scale and shift the button on tap (click)
      style={{
        background: disabled
          ? "#d3d3d3" // If the button is disabled, use a gray background
          : "linear-gradient(90deg, #F8B400, #FFD700)", // Default gradient background
      }}
      transition={{ duration: 0.1 }} // Set the transition duration for button animations
    >
      {label} {/* Display the label text passed as a prop */}
    </motion.button>
  );
};

export default CTAButton;
