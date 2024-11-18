import React, { ReactNode, useState } from "react";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import { default as AppUser } from "./User";
import { Divide as Hamburger } from "hamburger-react";
import ToggleMenu from "./ToggleMenu";
import { useShoppingContext } from "../hooks/useShoppingContext";

const LiIcons: React.FC<{
  element: ReactNode;
  handleClick?: () => void | undefined;
}> = ({ element, handleClick }) => {
  return (
    <>
      <motion.li
        onClick={handleClick}
        whileHover={{ opacity: 0.8, y: 4, cursor: "pointer" }}
        whileTap={{ scale: 0.8 }}
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
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showUser, setShowUser] = useState<boolean>(false);
  const [isOpen, setOpen] = useState(false);
  const { state } = useShoppingContext();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-4 px-16 bg-gray-light text-gray-dark no-copy sour-gummy-font z-50">
      <p className="hover:cursor-pointer protest-riot-regular text-brand">
        Chilli Restaurant
      </p>
      {/* PC Nav */}
      <nav>
        <ul className="hidden lg:flex  items-center gap-4">
          <LiNav label="Home" path="/" />
          <LiNav label="Menu" path="/menu" />
          <LiNav label="About" path="/about" />
          <LiNav label="Reservation" path="/reservation" />
        </ul>
      </nav>
      {/* PC Nav */}
      <div>
        <ul className="hidden lg:flex gap-4 items-center">
          <LiIcons
            handleClick={() => {
              setShowUser(true);
              setShowCart(false);
            }}
            element={<User />}
          />
          <LiIcons
            handleClick={() => {
              setShowCart(true);
              setShowUser(false);
            }}
            element={
              <div className="relative">
                <ShoppingCart />{" "}
                {state.length > 0 && (
                  <motion.span
                    animate={{ scale: 1.2 }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.5,
                      ease: "circInOut",
                    }}
                    className="absolute w-2 h-2 rounded-full -top-1 -right-1 bg-brand"
                  />
                )}
              </div>
            }
          />
          <LiIcons
            handleClick={() => setShowSearchBar(true)}
            element={<Search />}
          />
          <CTAButton
            label="Shop Online"
            handleClick={() => navigate("/menu")}
          />
        </ul>
        <motion.div className="lg:hidden text-brand">
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        </motion.div>
      </div>
      {showSearchBar && <SearchBar setShowSearchBar={setShowSearchBar} />}
      {showCart && <Cart setShowCart={setShowCart} />}
      {showUser && <AppUser setShowUser={setShowUser} />}
      {isOpen === true && (
        <ToggleMenu
          setShowSearchBar={setShowSearchBar}
          setShowCart={setShowCart}
          setShowUser={setShowUser}
          setOpen={setOpen}
        />
      )}
    </div>
  );
};

export default Header;
