import React from "react";
import CTAButton from "./CTAButton"; // Import custom button component for call-to-action
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { useNavigate } from "react-router-dom"; // Import the navigate hook from react-router for page navigation
import { ImageLoader } from "../utils/ImageLoader"; // Import the ImageLoader utility function

// Define interface for the props expected by the Hero component (image source and optional alt text)
interface ImageDisplayProps {
  src: string; // The source of the image to be displayed
  alt?: string; // Optional alt text for the image
}

// Hero component
const Hero: React.FC<ImageDisplayProps> = ({ src }) => {
  // Call the ImageLoader function to preload or optimize the image
  ImageLoader(src);

  // Get the navigate function from react-router to allow navigation on button click
  const navigate = useNavigate();

  return (
    // Main container with full-width and height on large screens, gradient background
    <div className="w-screen lg:h-[80vh] bg-gradient-to-r from-brand to-brand-dark flex flex-col lg:flex-row">
      {/* Left Section: Text Content */}
      <div className="lg:w-1/2 flex flex-col justify-center px-16 py-16 lg:py-0 gap-4">
        {/* Heading for the hero section */}
        <h1 className="protest-riot-regular text-accent-beige text-4xl">
          Hearty Food Restaurant
        </h1>

        {/* Description paragraph for the restaurant */}
        <p className="poppins-regular text-accent-beige opacity-90 max-w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          veritatis non maiores facere quae at.
        </p>

        {/* Call-to-action button, animated using motion.div from framer-motion */}
        <motion.div
          initial={{ x: -100 }} // Initial position: off-screen to the left
          whileInView={{ x: 0 }} // Animate to normal position when in view
          viewport={{ once: true }} // Trigger animation only once when in view
        >
          {/* CTA Button that navigates to the menu page */}
          <CTAButton label="Order Now!" handleClick={() => navigate("/menu")} />
        </motion.div>
      </div>

      {/* Right Section: Image */}
      <div className="grid place-items-center pb-16 lg:py-0">
        {/* Animated image that fades in and slides in from the right */}
        <motion.img
          initial={{ x: 50, opacity: 0 }} // Initial state: image is slightly off-screen and invisible
          whileInView={{ x: 0, opacity: 1 }} // Animate to fully visible and in place when in view
          transition={{ duration: 1 }} // Set the animation duration
          viewport={{ once: true }} // Trigger the animation only once when the image is in view
          className="" // Optionally apply custom styles for the image
          src={src} // Set the image source passed as a prop
          alt="" // Optional alt text for the image (can be passed as a prop)
        />
      </div>
    </div>
  );
};

// Export the Hero component for use in other parts of the application
export default Hero;
