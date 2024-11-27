import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion for animations
import Marquee from "react-fast-marquee"; // Import Marquee for horizontal scrolling of content
import { ImageLoader } from "../utils/ImageLoader"; // Import ImageLoader for image preloading

// ScrollingImageGrid component
const ScrollingImageGrid: React.FC = () => {
  // Array of images with their src (path to images)
  const images = [
    { src: "/images/grid/1.png" },
    { src: "/images/grid/2.png" },
    { src: "/images/grid/3.png" },
    { src: "/images/grid/4.png" },
    { src: "/images/grid/5.png" },
    { src: "/images/grid/6.png" },
    { src: "/images/grid/7.png" },
    { src: "/images/grid/8.png" },
    { src: "/images/grid/9.png" },
    { src: "/images/grid/10.png" },
  ];

  return (
    // Motion wrapper to animate the appearance of the scrolling grid
    <motion.div
      initial={{ opacity: 0.2 }} // Initial opacity: low to make it fade in
      whileInView={{ opacity: 1 }} // When in view, opacity increases to full (1)
      viewport={{ once: true }} // Animation happens only once when the component is in view
      transition={{ duration: 1.5 }} // Duration of the fade-in effect
      className="relative overflow-hidden h-fit w-full py-16" // Styling for the container
    >
      {/* Marquee component for horizontal scrolling effect */}
      <Marquee gradient={false} speed={50} style={{ overflow: "hidden" }}>
        {images.map((image, index) => {
          // Call ImageLoader function to preload the image before rendering
          ImageLoader(image.src);

          return (
            // Image container with spacing and styling
            <div
              key={index}
              className={`m-4 w-40 h-40 rounded shadow border-8 bg-cover`} // Style the container with margin, width, height, and other properties
            >
              {/* Image element */}
              <img
                src={image.src} // Source of the image
                className="rounded-lg h-full w-full" // Apply rounded corners and make the image fit the container
                alt={`Image ${index + 1}`} // Set alt text dynamically based on the index
              />
            </div>
          );
        })}
      </Marquee>
    </motion.div>
  );
};

// Export the component for use in other parts of the application
export default ScrollingImageGrid;
