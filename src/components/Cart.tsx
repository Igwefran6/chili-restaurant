import React, { Dispatch, SetStateAction, useEffect } from "react";
import { motion } from "framer-motion";
import { X, XCircle } from "lucide-react";
import { useShoppingContext } from "../hooks/useShoppingContext";

const Cart: React.FC<{
  setShowCart: Dispatch<SetStateAction<boolean>>;
}> = ({ setShowCart }) => {
  const placeholderImage = "https://via.placeholder.com/64";

  const { state, dispatch } = useShoppingContext();

  const updateQuantity = (id: string, delta: number) => {
    const itemIndex = state.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      const updatedState = state.map((item, index) =>
        index === itemIndex
          ? {
              ...item,
              quantity: Math.max(item.quantity + delta, 1), // Ensure quantity is at least 1
            }
          : item
      );

      console.log(updatedState[itemIndex]);
      dispatch({ type: "ADDTOCART", payload: updatedState[itemIndex] });
    } else {
      console.warn(`Item with id ${id} not found.`);
    }
  };

  useEffect(() => {}, []);

  const totalPrice = state.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <motion.div
      className="fixed lg:right-8 right-1/2 top-1/2 translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:rotate-3 z-40 shadow-lg lg:rounded-lg bg-gray-light w-svw h-svh lg:w-96 lg:h-[520px] p-4 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-bold text-gray-700 mb-4">Your Cart</h2>
      {state.length > 0 ? (
        <>
          <div className="flex-1 overflow-y-auto space-y-4">
            {state.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-white rounded shadow-sm hover:shadow-md relative"
              >
                <span
                  onClick={() =>
                    dispatch({ type: "REMOVEFROMCART", payload: item.id })
                  }
                  className="absolute right-1 top-1 text-brand hover:cursor-pointer opacity-95"
                >
                  <XCircle size={18} />
                </span>
                <img
                  src={item.image || placeholderImage}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="flex-1 ml-3 min-w-0">
                  {/* Constrain the name container */}
                  <h3
                    className="text-[14px] font-semibold truncate"
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
        whileTap={{ scale: 0.8 }}
        onClick={() => setShowCart(false)}
        className="absolute top-4 right-4"
      >
        <X size={20} />
      </motion.div>
    </motion.div>
  );
};

export default Cart;
