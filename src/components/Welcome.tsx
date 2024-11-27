import { motion } from "framer-motion"; // Import motion from framer-motion for animations
import { ImageLoader } from "../utils/ImageLoader"; // Import custom ImageLoader utility to handle image loading

// Functional component for rendering paragraph text with a given string
const P: React.FC<{ text: string }> = ({ text }) => {
  return <p className="opacity-90 lg:pr-8">{text}</p>; // Renders the text with slight opacity and right padding on large screens
};

// Interface for the props of the ImageDisplay component
interface ImageDisplayProps {
  src: string; // Image source URL
  alt?: string; // Optional alt text for the image
}

// Welcome component for displaying a welcome section with an image and text
const Welcome: React.FC<ImageDisplayProps> = ({ src }) => {
  ImageLoader(src); // Calls the ImageLoader utility to preload the image

  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center p-14 lg:px-48 py-16 bg-gradient-to-br from-orange-100 via-white to-yellow-50 z-0">
      {/* Main wrapper div for the welcome section, with a gradient background and responsive layout */}

      <motion.div
        initial={{ x: -100, opacity: 0.5 }} // Initial state: position off-screen and slightly transparent
        whileInView={{ x: 0, opacity: 1 }} // Animate to position on screen and full opacity when in view
        viewport={{ once: true }} // Trigger the animation once when the element comes into view
        transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
        className="flex flex-col gap-4 lg:w-1/2"
      >
        {/* Left-side content, containing text */}
        <h1 className="text-brand text-xl protest-riot-regular">
          Chilli Restaurant {/* Header with a custom font */}
        </h1>
        <h2 className="text-5xl font-bold ">Welcome</h2> {/* Main title */}
        {/* Text paragraphs */}
        <P text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        <P
          text=" Facere ea tempore ipsam? Officia, assumenda facere vitae atque velit
          reprehenderit."
        />
        <P
          text="Quasi consectetur fugit saepe sequi, cumque harum
          quisquam debitis numquam ea."
        />
      </motion.div>

      <motion.div
        initial={{ y: 100, rotate: 0, opacity: 0.5 }} // Initial state: start with opacity and position shifted down
        whileInView={{ y: 0, rotate: -4, opacity: 1 }} // Animate position to normal, slight rotation, and full opacity
        viewport={{ once: true }} // Trigger animation only once when the element comes into view
        transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
        whileHover={{ cursor: "pointer" }} // Show pointer cursor when hovering over the image container
        className="lg:w-1/2 p-4 h-fit bg-accent-beige border shadow-xl rounded-lg"
      >
        {/* Right-side content, containing an image with hover effects */}
        <div className="overflow-hidden rounded-lg">
          {/* Container for image with overflow hidden for rounded corners */}
          <motion.img
            whileHover={{ scale: 1.1 }} // On hover, scale up the image slightly
            transition={{ duration: 0.5 }} // Smooth transition for scaling effect
            className="rounded-lg bg-cover"
            src={src} // Dynamically passed image source URL
            alt="" // Empty alt attribute (consider adding a description for accessibility)
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Welcome;
