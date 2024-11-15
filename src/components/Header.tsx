import React, { ReactNode, useState } from "react";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";

const LiIcons: React.FC<{ element: ReactNode }> = ({ element }) => {
  return (
    <>
      <motion.li
        whileHover={{ scale: 0.9, opacity: 0.8, y: 4, cursor: "pointer" }}
        whileTap={{ scale: 0.5 }}
        className="rounded-full "
      >
        {element}
      </motion.li>
    </>
  );
};
const LiNav: React.FC<{ label: string; path?: string }> = ({
  label,
  path = "/",
}) => {
  return (
    <>
      <motion.li
        whileHover={{
          scale: 0.9,
          opacity: 0.8,
          y: 4,
        }}
      >
        <Link to={path}>{label}</Link>
      </motion.li>
    </>
  );
};

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-4 px-16 text-gray-dark no-copy sour-gummy-font">
      <p className="hover:cursor-pointer ">Chilli Restaurant</p>
      <nav>
        <ul className="flex items-center gap-4">
          <LiNav label="Home" />
          <LiNav label="Menu" />
          <LiNav label="About" />
          <LiNav label="Reservation" />
        </ul>
      </nav>
      <div>
        <ul className="flex gap-4 items-center">
          <LiIcons element={<User />} />
          <LiIcons element={<ShoppingCart />} />
          <LiIcons element={<Search />} />

          <CTAButton label="Shop Online" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
