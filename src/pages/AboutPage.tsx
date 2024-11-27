// Import React and necessary dependencies
import React, { Suspense } from "react"; // Suspense is used for lazy loading
import { motion } from "framer-motion"; // Motion is used for animations
import MainLayout from "../layouts/MainLayout"; // Layout wrapper for the page
import Loading from "./Loading"; // Loading component for fallback during lazy loading
import { ImageLoader } from "../utils/ImageLoader"; // Utility for preloading images

// Define the main component to render the page content
const PageToRender: React.FC = () => {
  // Animation for a floating effect applied to images
  const floatVariant = {
    float: {
      y: [0, -15, 0], // Moves up and down
      transition: { duration: 5, ease: "easeInOut", repeat: Infinity }, // Smooth, infinite animation
    },
  };

  // Animation for hover effect (scaling and rotation)
  const hoverEffect = {
    scale: 1.2, // Enlarges slightly
    rotate: 5, // Rotates slightly
    transition: {
      duration: 0.5, // Smooth transition
      ease: "easeInOut",
    },
  };

  // Section animation for smooth appearance (fade-in and slide-up)
  const sectionAnimation = {
    hidden: { opacity: 0, y: 50 }, // Initial state: invisible and slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }, // Visible state
  };

  // List of image URLs to display in the floating images section
  const imageLinks = [
    "/images/reservation/1.png",
    "/images/reservation/2.png",
    "/images/reservation/3.png",
    "/images/reservation/4.png",
  ];

  // Corresponding text for each floating image
  const text = [
    "Serene Environ",
    "Delicious Meals",
    "Made with Love",
    "A Smile Guaranteed",
  ];

  return (
    <MainLayout>
      {/* Main container with background and padding */}
      <div className="relative min-h-screen bg-gradient-to-br from-orange-100 via-white to-yellow-50 poppins-regular pb-16">
        {/* Page heading */}
        <div className="text-center py-8 px-4 sm:px-10">
          <motion.h1
            initial={{ y: -100, opacity: 0 }} // Slide-in animation for heading
            whileInView={{ y: 0, opacity: 1 }} // Makes the heading visible
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-brand mb-6"
          >
            Welcome to Our Story
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }} // Slide-in animation for paragraph
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-8 max-w-3xl mx-auto"
          >
            At{" "}
            <span className="text-brand protest-riot-regular">
              Chilli Restaurant
            </span>
            , we believe in creating moments that delight all your senses. From
            our carefully curated ingredients to the artistry of our chefs, our
            story is about passion, flavors, and a relentless pursuit of
            excellence.
          </motion.p>
        </div>

        {/* Floating images section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }} // Slide-in animation for the section
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex-wrap justify-center gap-8 mt-12 px-8 flex"
        >
          {/* Map through images to create floating image elements */}
          {imageLinks.map((image, index) => {
            ImageLoader(image[index]); // Preload the image
            return (
              <motion.div
                key={index}
                variants={floatVariant} // Apply floating animation
                animate="float"
                whileHover={hoverEffect} // Apply hover animation
                className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full shadow-lg bg-cover bg-center overflow-hidden group"
                style={{
                  backgroundImage: `url('${image}')`, // Set the image as background
                }}
              >
                {/* Dark overlay on hover */}
                <motion.div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></motion.div>

                {/* Text to display on hover */}
                <motion.div className="absolute inset-0 flex justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="lg:text-lg font-semibold">{text[index]}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          className="mt-16 px-8 sm:px-24 lg:px-48 text-center"
          initial="hidden" // Initial hidden state
          whileInView="visible" // Become visible when in view
          viewport={{ once: true }}
          variants={sectionAnimation} // Use defined animation variant
        >
          <h2 className="text-3xl font-semibold text-brand mb-4">
            Our Philosophy
          </h2>
          <p className="text-lg text-gray-600 leading-8">
            We believe that every meal tells a story. From the first bite to the
            last sip, every element on your plate has been crafted to bring joy,
            comfort, and unforgettable memories. Join us and be part of our
            legacy!
          </p>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          className="mt-16 px-8 sm:px-24 lg:px-48 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionAnimation}
        >
          <h2 className="text-3xl font-semibold text-brand mb-6">
            Find Us Here
          </h2>
          <p className="text-lg text-gray-600 leading-8">
            <strong>Address:</strong> 123 Food Street, Flavor Town, FT 12345
          </p>
          <p className="text-lg text-gray-600 leading-8">
            <strong>Opening Hours:</strong> Mon-Sun: 9:00 AM - 11:00 PM
          </p>
          <p className="text-lg text-gray-600 leading-8">
            <strong>Contact:</strong> (123) 456-7890
          </p>
        </motion.div>

        {/* Location Section */}
        <motion.div
          className="mt-16 px-8 sm:px-24 lg:px-48 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionAnimation}
        >
          <h2 className="text-3xl font-semibold text-brand mb-6">
            Our Location
          </h2>
          <div className="w-full h-96">
            {/* Embed Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093484!2d-122.41941508468158!3d37.7749292797594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d6b108e47%3A0xa857a9792b3f68ef!2sFlavor%20Town%20Restaurant!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

// Main wrapper component for lazy loading
function AboutPage() {
  return (
    <Suspense fallback={<Loading />}>
      <PageToRender />
    </Suspense>
  );
}

export default AboutPage; // Export the component
