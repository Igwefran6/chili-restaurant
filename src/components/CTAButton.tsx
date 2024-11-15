import { motion } from "framer-motion";
import React from "react";

const CTAButton: React.FC<{
  label: string;
  path?: string;
  disabled?: boolean;
  handleClick?: () => void;
}> = ({ label, path, disabled, handleClick }) => {
  function handleButtonClick() {
    if (path) {
      // move to location
    }
    if (handleClick != undefined) {
      handleClick();
    }
  }

  return (
    <motion.button
      disabled={disabled}
      onClick={handleButtonClick}
      className="min-h-6 w-fit px-4 py-1 rounded-full bg-accent-yellow text-gray-dark font-semibold drop-shadow-xl transition-all duration-300"
      whileHover={{
        background: "linear-gradient(90deg, #F8B400, #FF8C00)", // Adjust gradient colors
      }}
      whileTap={{ scale: 0.9, y: 4 }}
      style={{
        background: disabled
          ? "#d3d3d3" // Disabled state background
          : "linear-gradient(90deg, #F8B400, #FFD700)", // Default gradient
      }}
      transition={{ duration: 0.1 }}
    >
      {label}
    </motion.button>
  );
};

export default CTAButton;
