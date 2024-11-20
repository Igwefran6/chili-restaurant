import { motion } from "framer-motion";
import {
  ChefHat,
  Home,
  List,
  Search,
  ShoppingCart,
  User,
  Utensils,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";

const ToggleMenu: React.FC<{
  setShowSearchBar: Dispatch<SetStateAction<boolean>>;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  setShowUser: Dispatch<SetStateAction<boolean>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ setShowSearchBar, setShowCart, setShowUser, setOpen }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const menuItems = [
    { icon: <Home />, label: "Home", path: "/" },
    { icon: <Utensils />, label: "Our Menu", path: "/menu" },
    { icon: <ChefHat />, label: "About Us", path: "/about" },
    { icon: <List />, label: "Make Reservation", path: "/reservation" },
  ];

  const handleNavigation = (path: string) => {
    setTimeout(() => {
      navigate(path); // Delay navigation by 500ms
    }, 500);
  };

  return (
    <motion.div
      initial={{ translateY: "100vh" }}
      animate={{ translateY: "0" }}
      transition={{ duration: 0.4 }}
      className="lg:hidden fixed bottom-0 right-0 w-screen h-fit shadow-xl bg-accent-beige text-brand border-b-8 border-brand"
    >
      <ul className="flex flex-col gap-4 p-8 text-2xl">
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
            className="flex items-center gap-2 w-fit relative cursor-pointer"
            onClick={() => {
              setActiveIndex(index);
              handleNavigation(item.path); // Trigger delayed navigation
            }}
          >
            {item.icon}
            <span>{item.label}</span> {/* Replace Link with span */}
            {/* Animated border */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-0 left-0 w-full h-[2px] bg-brand origin-left"
            />
          </motion.li>
        ))}

        <motion.ul
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="border-t-4 flex gap-4 my-2 py-4"
        >
          <motion.li
            whileTap={{ scale: 0.8 }}
            onClick={() => {
              setShowUser(true);
              setOpen(false);
            }}
          >
            <User />
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.8 }}
            onClick={() => {
              setShowCart(true);
              setOpen(false);
            }}
          >
            <ShoppingCart />
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.8 }}
            onClick={() => {
              setShowSearchBar(true);
              setOpen(false);
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
