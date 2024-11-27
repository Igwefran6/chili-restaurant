import { useState, useEffect } from "react"; // Import React hooks for managing state and side effects
import { motion } from "framer-motion"; // Import Framer Motion for smooth animations
import { ArrowUp } from "lucide-react"; // Import an arrow icon to use for the button

// ScrollToTopButton component
const ScrollToTopButton: React.FC = () => {
  // State to track if the button should be shown or not
  const [showButton, setShowButton] = useState<boolean>(false);

  // useEffect hook to listen for scroll events
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the user has scrolled more than 500px
      if (window.scrollY > 500) {
        setShowButton(true); // Show the button if scrolled more than 500px
      } else {
        setShowButton(false); // Hide the button if not
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount to prevent memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top
      behavior: "smooth", // Use smooth scrolling behavior
    });
  };

  return (
    // Motion button with animated opacity for smooth transitions
    <motion.button
      initial={{ opacity: 0 }} // Initial opacity of the button (invisible)
      animate={{ opacity: showButton ? 1 : 0 }} // Animate opacity based on showButton state
      transition={{ duration: 1 }} // Transition duration for opacity change
      onClick={scrollToTop} // Call scrollToTop function when clicked
      className="fixed bottom-8 right-8 bg-brand text-white p-4 rounded-full shadow-lg cursor-pointer z-50"
      style={{
        display: showButton ? "block" : "none", // Display the button only when needed
      }}
    >
      {/* ArrowUp icon from lucide-react */}
      <ArrowUp size={24} />
    </motion.button>
  );
};

export default ScrollToTopButton;
