import { motion } from "framer-motion"; // Import motion for animations
import {
  ChefHat,
  Home,
  List,
  Search,
  ShoppingCart,
  User,
  Utensils,
} from "lucide-react"; // Import icons from lucide-react
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import { Dispatch, SetStateAction, useState } from "react"; // Import hooks for state management

// ToggleMenu component receives props for managing visibility of different sections
const ToggleMenu: React.FC<{
  setShowSearchBar: Dispatch<SetStateAction<boolean>>; // Function to toggle search bar visibility
  setShowCart: Dispatch<SetStateAction<boolean>>; // Function to toggle cart visibility
  setShowUser: Dispatch<SetStateAction<boolean>>; // Function to toggle user section visibility
  setOpen: Dispatch<SetStateAction<boolean>>; // Function to close the menu
}> = ({ setShowSearchBar, setShowCart, setShowUser, setOpen }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // State to track the active menu item
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Menu items with their corresponding paths and icons
  const menuItems = [
    { icon: <Home />, label: "Home", path: "/" },
    { icon: <Utensils />, label: "Our Menu", path: "/menu" },
    { icon: <ChefHat />, label: "About Us", path: "/about" },
    { icon: <List />, label: "Make Reservation", path: "/reservation" },
  ];

  // Handle navigation with a slight delay
  const handleNavigation = (path: string) => {
    setTimeout(() => {
      navigate(path); // Navigate to the path after 500ms
    }, 500);
  };

  return (
    // Animated menu wrapper that slides up from the bottom
    <motion.div
      initial={{ translateY: "100vh" }} // Initially hidden below the screen
      animate={{ translateY: "0" }} // Slide up to the top of the screen
      transition={{ duration: 0.4 }} // Duration of the slide animation
      className="lg:hidden fixed bottom-0 right-0 w-screen h-fit shadow-xl bg-accent-beige text-brand border-b-8 border-brand"
    >
      {/* Menu items list */}
      <ul className="flex flex-col gap-4 p-8 text-2xl">
        {menuItems.map((item, index) => (
          // Motion-enabled list item with sliding and fading animation
          <motion.li
            key={index}
            initial={{ x: -20, opacity: 0 }} // Initial position and opacity for animation
            whileInView={{ x: 0, opacity: 1 }} // When in view, animate to original position and opacity
            transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }} // Delay animation based on index
            className="flex items-center gap-2 w-fit relative cursor-pointer"
            onClick={() => {
              setActiveIndex(index); // Set active index to highlight the item
              handleNavigation(item.path); // Trigger navigation
            }}
          >
            {item.icon} {/* Render the icon for the menu item */}
            <span>{item.label}</span> {/* Label for the menu item */}
            {/* Animated underline that shows when the menu item is active */}
            <motion.div
              initial={{ scaleX: 0 }} // Initially hidden (no width)
              animate={{
                scaleX: activeIndex === index ? 1 : 0, // If active, show underline
              }}
              transition={{ duration: 0.4 }} // Duration of underline animation
              className="absolute bottom-0 left-0 w-full h-[2px] bg-brand origin-left"
            />
          </motion.li>
        ))}

        {/* Additional icons for user, cart, and search functionalities */}
        <motion.ul
          initial={{ x: -20, opacity: 0 }} // Initial animation for the section
          whileInView={{ x: 0, opacity: 1 }} // Animate into view
          transition={{ duration: 0.5, delay: 1 }} // Delay for the next section animation
          className="border-t-4 flex gap-4 my-2 py-4"
        >
          {/* User icon - Opens user section */}
          <motion.li
            whileTap={{ scale: 0.8 }} // Scale down when clicked
            onClick={() => {
              setShowUser(true); // Show user section
              setOpen(false); // Close the menu
            }}
          >
            <User />
          </motion.li>

          {/* Shopping cart icon - Opens cart section */}
          <motion.li
            whileTap={{ scale: 0.8 }} // Scale down when clicked
            onClick={() => {
              setShowCart(true); // Show cart section
              setOpen(false); // Close the menu
            }}
          >
            <ShoppingCart />
          </motion.li>

          {/* Search icon - Opens search bar */}
          <motion.li
            whileTap={{ scale: 0.8 }} // Scale down when clicked
            onClick={() => {
              setShowSearchBar(true); // Show search bar
              setOpen(false); // Close the menu
            }}
          >
            <Search />
          </motion.li>
        </motion.ul>
      </ul>
    </motion.div>
  );
};

export default ToggleMenu;
