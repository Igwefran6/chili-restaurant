import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react"; // Or use any icon you prefer.

const ScrollToTopButton: React.FC = () => {
  // Track scroll position to show button
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 500) {
        // Button appears after scrolling 300px
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling to the top
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: showButton ? 1 : 0 }}
      transition={{ duration: 1 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-brand text-white p-4 rounded-full shadow-lg cursor-pointer z-50"
      style={{
        display: showButton ? "block" : "none", // Hide when not needed
      }}
    >
      <ArrowUp size={24} />
    </motion.button>
  );
};

export default ScrollToTopButton;
