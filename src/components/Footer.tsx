import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.css"; // Importing Font Awesome for social icons

// Footer Component
const Footer: React.FC = () => {
  // List of navigation links in the footer
  const links = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Reservation", href: "/reservation" },
  ];

  // List of social media icons with respective links
  const socialIcons = [
    { name: "Facebook", href: "#", icon: "fab fa-facebook" },
    { name: "Twitter", href: "#", icon: "fab fa-twitter" },
    { name: "Instagram", href: "#", icon: "fab fa-instagram" },
  ];

  return (
    <footer className="bg-gradient-to-br from-orange-100 via-white to-yellow-50 text-gray-700 pt-12 pb-6 z-40">
      {/* Top Section */}
      <div className="container mx-auto px-8 sm:px-16 lg:px-32 flex flex-wrap justify-between items-start gap-8">
        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initially hidden and translated down
          whileInView={{ opacity: 1, y: 0 }} // Fade in and translate to original position when in view
          transition={{ duration: 1 }} // Duration of the animation
          viewport={{ once: true }} // Trigger animation only once when in view
          className="w-full sm:w-1/3" // Responsively adjusting width
        >
          <h3 className="text-xl font-semibold text-brand mb-4">About Us</h3>
          <p className="text-sm">
            At Chilli Restaurant, we’re committed to serving fresh, delicious
            meals that bring people together. Visit us to experience culinary
            delight and heartfelt hospitality.
          </p>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial hidden state (translated down)
          whileInView={{ opacity: 1, y: 0 }} // Fade in and move to position
          transition={{ duration: 1.2 }} // Duration of animation
          viewport={{ once: true }} // Animation triggers only once when in view
          className="w-full sm:w-1/3"
        >
          <h3 className="text-xl font-semibold text-brand mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            {/* Loop through links array and create a list item for each */}
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-brand hover:underline transition" // Hover effect
                >
                  {link.name} {/* Display the link name */}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with hidden and translated
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible state when in view
          transition={{ duration: 1.4 }} // Duration of animation
          viewport={{ once: true }} // Animation triggers only once when in view
          className="w-full sm:w-1/3"
        >
          <h3 className="text-xl font-semibold text-brand mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            {/* Loop through socialIcons and display each icon */}
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer" // For security when opening in a new tab
                className="hover:text-brand transition" // Hover effect on icons
                aria-label={icon.name} // For accessibility, the aria-label provides context for screen readers
              >
                <i className={icon.icon}></i> {/* Display FontAwesome icon */}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Divider */}
      <div className="my-8 mx-auto w-4/5 border-t border-gray-200"></div>{" "}
      {/* Horizontal line for visual separation */}
      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }} // Start with invisible
        whileInView={{ opacity: 1 }} // Fade in when in view
        transition={{ duration: 1 }} // Duration of the fade-in effect
        viewport={{ once: true }} // Only trigger once when in view
        className="text-center" // Center the text
      >
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Chilli Restaurant. All Rights
          Reserved. {/* Display current year dynamically */}
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
