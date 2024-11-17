import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Reservation", href: "/reservation" },
  ];

  const socialIcons = [
    { name: "Facebook", href: "#", icon: "fab fa-facebook" },
    { name: "Twitter", href: "#", icon: "fab fa-twitter" },
    { name: "Instagram", href: "#", icon: "fab fa-instagram" },
  ];

  return (
    <footer className="bg-gradient-to-br from-orange-100 via-white to-yellow-50 text-gray-700 pt-12 pb-6 z-50">
      {/* Top Section */}
      <div className="container mx-auto px-8 sm:px-16 lg:px-32 flex flex-wrap justify-between items-start gap-8">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full sm:w-1/3"
        >
          <h3 className="text-xl font-semibold text-brand mb-4">About Us</h3>
          <p className="text-sm">
            At Chilli Restaurant, we’re committed to serving fresh, delicious
            meals that bring people together. Visit us to experience culinary
            delight and heartfelt hospitality.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full sm:w-1/3"
        >
          <h3 className="text-xl font-semibold text-brand mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-brand hover:underline transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
          className="w-full sm:w-1/3"
        >
          <h3 className="text-xl font-semibold text-brand mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition"
                aria-label={icon.name}
              >
                <i className={icon.icon}></i>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="my-8 mx-auto w-4/5 border-t border-gray-200"></div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Chilli Restaurant. All Rights
          Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
