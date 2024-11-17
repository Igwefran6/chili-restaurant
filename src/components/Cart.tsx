import React, { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useShoppingContext } from "../hooks/useShoppingContext";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart: React.FC<{
  setShowCart: Dispatch<SetStateAction<boolean>>;
}> = ({ setShowCart }) => {
  const placeholderImage = "https://via.placeholder.com/64";

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "abc",
      name: "New Boots",
      price: 120,
      image: "/images/food2.png",
      quantity: 1,
    },
    {
      id: "abcd",
      name: "Cozy Sweater with a Really Long Name That Should Be Truncated",
      price: 60,
      quantity: 2,
      image: "",
    },
  ]);

  const { state } = useShoppingContext();

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <motion.div
      className="fixed lg:right-8 right-1/2 top-1/2 translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:rotate-3 z-40 shadow-lg rounded-lg bg-gray-light w-80 h-[520px] p-4 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-bold text-gray-700 mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <div className="flex-1 overflow-y-auto space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-white rounded shadow-sm hover:shadow-md"
              >
                <img
                  src={item.image || placeholderImage}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="flex-1 ml-3 min-w-0">
                  {/* Constrain the name container */}
                  <h3
                    className="text-sm font-semibold truncate"
                    title={item.name} // Tooltip shows full name on hover
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold text-lg">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <motion.button
              whileHover={{
                background: "linear-gradient(90deg, #F8B400, #FF8C00)", // Adjust gradient colors
              }}
              className="w-full py-2 text-gray-dark rounded shadow "
              style={{
                background: "linear-gradient(90deg, #F8B400, #FFD700)", // Default gradient
              }}
            >
              Checkout
            </motion.button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
      <motion.div
        whileHover={{ scale: 0.8, cursor: "pointer" }}
        whileTap={{ scale: 0.5 }}
        onClick={() => setShowCart(false)}
        className="absolute top-4 right-4"
      >
        <X size={20} />
      </motion.div>
    </motion.div>
  );
};

export default Cart;
