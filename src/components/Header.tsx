import React, { ReactNode, useState } from "react";
import CTAButton from "./CTAButton"; // Import custom CTAButton component
import { motion } from "framer-motion"; // Importing framer-motion for animations
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate for routing
import { Search, ShoppingCart, User } from "lucide-react"; // Importing icons from lucide-react
import SearchBar from "./SearchBar"; // Import custom SearchBar component
import Cart from "./Cart"; // Import Cart component
import { default as AppUser } from "./User"; // Import User component (renamed as AppUser)
import { Divide as Hamburger } from "hamburger-react"; // Import Hamburger menu component for mobile
import ToggleMenu from "./ToggleMenu"; // Import the ToggleMenu component
import { useShoppingContext } from "../hooks/useShoppingContext"; // Import custom hook for shopping context

// LiIcons Component: A list item with an icon that handles clicks for various functionalities (e.g., User, Cart, Search)
const LiIcons: React.FC<{
  element: ReactNode;
  handleClick?: () => void | undefined;
}> = ({ element, handleClick }) => {
  return (
    <motion.li
      onClick={handleClick} // Trigger the handleClick function when clicked
      whileHover={{ opacity: 0.8, y: 4, cursor: "pointer" }} // Animation on hover (slightly fade and move up)
      whileTap={{ scale: 0.8 }} // Animation on tap (scale down when clicked)
      className="rounded-full"
    >
      {element} {/* Render the icon element */}
    </motion.li>
  );
};

// LiNav Component: A list item for navigation with a label and an optional path
const LiNav: React.FC<{ label: string; path?: string }> = ({
  label,
  path = "/",
}) => {
  return (
    <motion.li
      whileHover={{ opacity: 0.8, y: 4 }} // Animation on hover (slightly fade and move up)
    >
      <Link to={path}>{label}</Link> {/* Link to the specified path */}
    </motion.li>
  );
};

// Header Component: The main header for the website, includes navigation, icons, and mobile menu
const Header: React.FC = () => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false); // State for showing the search bar
  const [showCart, setShowCart] = useState<boolean>(false); // State for showing the shopping cart
  const [showUser, setShowUser] = useState<boolean>(false); // State for showing the user profile
  const [isOpen, setOpen] = useState(false); // State for mobile menu (Hamburger icon toggle)
  const { state } = useShoppingContext(); // Using shopping context to get the cart items
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex justify-between items-center py-4 px-16 bg-gray-light text-gray-dark no-copy sour-gummy-font z-50">
      <p className="hover:cursor-pointer protest-riot-regular text-brand">
        Chilli Restaurant {/* Brand name */}
      </p>
      {/* Desktop Navigation */}
      <nav>
        <ul className="hidden lg:flex items-center gap-4">
          {/* Navigation items (Home, Menu, About, Reservation) */}
          <LiNav label="Home" path="/" />
          <LiNav label="Menu" path="/menu" />
          <LiNav label="About" path="/about" />
          <LiNav label="Reservation" path="/reservation" />
        </ul>
      </nav>
      <div>
        <ul className="hidden lg:flex gap-4 items-center">
          {/* User Icon */}
          <LiIcons
            handleClick={() => {
              setShowUser(true); // Show user profile when clicked
              setShowCart(false); // Hide the cart
            }}
            element={<User />} // Render User icon
          />
          {/* Cart Icon */}
          <LiIcons
            handleClick={() => {
              setShowCart(true); // Show cart when clicked
              setShowUser(false); // Hide user profile
            }}
            element={
              <div className="relative">
                <ShoppingCart /> {/* Cart icon */}
                {state.length > 0 && (
                  <motion.span
                    animate={{ scale: 1.2 }} // Pulse effect on cart icon if there are items
                    transition={{
                      repeat: Infinity, // Repeat the pulse animation
                      duration: 0.5, // Duration of one pulse cycle
                      ease: "circInOut", // Easing function for the animation
                    }}
                    className="absolute w-2 h-2 rounded-full -top-1 -right-1 bg-brand" // Notification bubble showing item count
                  />
                )}
              </div>
            }
          />
          {/* Search Icon */}
          <LiIcons
            handleClick={() => setShowSearchBar(true)} // Show search bar when clicked
            element={<Search />} // Render Search icon
          />
          {/* Shop Online CTA Button */}
          <CTAButton
            label="Shop Online"
            handleClick={() => navigate("/menu")} // Navigate to the menu page when clicked
          />
        </ul>

        {/* Mobile Hamburger Menu */}
        <motion.div className="lg:hidden text-brand">
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />{" "}
          {/* Toggle Hamburger icon */}
        </motion.div>
      </div>
      {/* Conditional rendering of components based on state */}
      {showSearchBar && <SearchBar setShowSearchBar={setShowSearchBar} />}{" "}
      {/* Show SearchBar */}
      {showCart && <Cart setShowCart={setShowCart} />} {/* Show Cart */}
      {showUser && <AppUser setShowUser={setShowUser} />}{" "}
      {/* Show User Profile */}
      {/* Mobile menu */}
      {isOpen === true && (
        <ToggleMenu
          setShowSearchBar={setShowSearchBar}
          setShowCart={setShowCart}
          setShowUser={setShowUser}
          setOpen={setOpen} // Pass setOpen to control the mobile menu state
        />
      )}
    </div>
  );
};

export default Header;
