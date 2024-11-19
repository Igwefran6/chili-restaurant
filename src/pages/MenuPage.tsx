import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import { useShoppingContext } from "../hooks/useShoppingContext";
import ScrollingImageGrid from "../components/ScrollingImageGrid";

const MenuPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupLabel, setPopupLabel] = useState("");
  const { state, dispatch } = useShoppingContext();

  const menuItems = [
    {
      id: "123e4567e89b12d3",
      name: "Spicy Chicken Wings",
      description: "Crispy chicken wings tossed in our signature spicy sauce.",
      price: 12.99,
      image: "/images/menu/spicy-chicken-wings.png",
    },
    {
      id: "456f7891g23h45i6",
      name: "Classic Margherita Pizza",
      description: "Stone-baked pizza with fresh basil and mozzarella.",
      price: 15.99,
      image: "/images/menu/margherita-pizza.png",
    },
    {
      id: "789j0123k67l89m0",
      name: "Creamy Alfredo Pasta",
      description: "Fettuccine pasta with a rich and creamy Alfredo sauce.",
      price: 14.99,
      image: "/images/menu/alfredo-pasta.png",
    },
    {
      id: "234n5678o90p12q3",
      name: "Grilled Salmon",
      description: "Perfectly grilled salmon served with lemon butter sauce.",
      price: 19.99,
      image: "/images/menu/grilled-salmon.png",
    },
    {
      id: "567r8901s34t56u7",
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, croutons, and Caesar dressing.",
      price: 10.99,
      image: "/images/menu/caesar-salad.png",
    },
  ];

  // Animation variants for cards
  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" },
  };

  // Animation variant for popup
  const popupAnimation = {
    hidden: { opacity: 0, y: 50, x: "50%" },
    visible: { opacity: 1, y: 0, x: "50%" },
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleAddToCart = (item: (typeof menuItems)[0]) => {
    const payloadItem = { ...item, quantity: 1 };
    const exists = state.some((cartItem) => cartItem.id === payloadItem.id);

    setPopupLabel(exists ? "Already in cart" : "Added to cart");
    if (!exists) dispatch({ type: "ADDTOCART", payload: payloadItem });
    setShowPopup(true);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-yellow-50 p-8 poppins-regular">
        {/* Popup Notification */}
        <motion.span
          initial="hidden"
          animate={showPopup ? "visible" : "hidden"}
          variants={popupAnimation}
          className="fixed bottom-4 right-1/2 bg-accent-green text-gray-light py-1 px-2 rounded-lg z-50"
        >
          {popupLabel}
        </motion.span>

        {/* Page Header */}
        <div className="text-center pb-16">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-brand mb-6"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg text-gray-600 leading-8 max-w-3xl mx-auto"
          >
            Explore our delicious selection of dishes, made with the freshest
            ingredients and love.
          </motion.p>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 hover:cursor-pointer"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              custom={index}
              variants={cardAnimation}
            >
              {/* Image */}
              <motion.div
                className="h-40 w-full bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: `url(${item.image})` }}
                role="img"
                aria-label={item.name}
              ></motion.div>

              {/* Info */}
              <h2 className="text-2xl font-semibold text-brand mb-2">
                {item.name}
              </h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-accent-green">
                  ${item.price.toFixed(2)}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleAddToCart(item)}
                  className="px-4 py-2 bg-brand text-white rounded-md shadow hover:bg-brand-dark focus:outline-none"
                  aria-label={`Add ${item.name} to cart`}
                >
                  Add to cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        <ScrollingImageGrid />
      </div>
    </MainLayout>
  );
};

export default MenuPage;
