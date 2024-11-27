import React, { Dispatch, SetStateAction, useEffect } from "react";
import { motion } from "framer-motion";
import { X, XCircle } from "lucide-react";
import { useShoppingContext } from "../hooks/useShoppingContext";

// Cart component to display and manage the shopping cart
const Cart: React.FC<{
  setShowCart: Dispatch<SetStateAction<boolean>>; // Function to toggle cart visibility
}> = ({ setShowCart }) => {
  // Placeholder image URL in case an item has no image
  const placeholderImage = "https://via.placeholder.com/64";

  // Access shopping cart state and dispatch function from ShoppingContext
  const { state, dispatch } = useShoppingContext();

  // Function to update the quantity of an item in the cart
  const updateQuantity = (id: string, delta: number) => {
    // Find the index of the item in the cart based on its ID
    const itemIndex = state.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      // If item is found, create an updated cart state with modified quantity
      const updatedState = state.map((item, index) =>
        index === itemIndex
          ? {
              ...item,
              quantity: Math.max(item.quantity + delta, 1), // Ensure quantity is at least 1
            }
          : item
      );

      // Log updated item for debugging purposes
      console.log(updatedState[itemIndex]);
      // Dispatch updated item to the cart context state
      dispatch({ type: "ADDTOCART", payload: updatedState[itemIndex] });
    } else {
      // Warn if the item is not found in the cart
      console.warn(`Item with id ${id} not found.`);
    }
  };

  // Effect hook (currently empty) that could be used for side-effects if needed in the future
  useEffect(() => {}, []);

  // Calculate total price of all items in the cart
  const totalPrice = state.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    // Animated cart container with framer-motion
    <motion.div
      className="fixed lg:right-8 right-1/2 top-1/2 translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:rotate-3 z-40 shadow-lg lg:rounded-lg bg-gray-light w-svw h-svh lg:w-96 lg:h-[520px] p-4 flex flex-col"
      initial={{ opacity: 0 }} // Initial opacity for fade-in effect
      animate={{ opacity: 1 }} // Final opacity for fade-in effect
      transition={{ duration: 0.5 }} // Transition duration for the fade-in effect
    >
      <h2 className="text-lg font-bold text-gray-700 mb-4">Your Cart</h2>

      {/* Conditional rendering if there are items in the cart */}
      {state.length > 0 ? (
        <>
          {/* Loop through each item in the cart and display it */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {state.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-white rounded shadow-sm hover:shadow-md relative"
              >
                {/* Button to remove item from cart */}
                <span
                  onClick={
                    () => dispatch({ type: "REMOVEFROMCART", payload: item.id }) // Dispatch action to remove item
                  }
                  className="absolute right-1 top-1 text-brand hover:cursor-pointer opacity-95"
                >
                  <XCircle size={18} />
                </span>

                {/* Display item image or a placeholder image */}
                <img
                  src={item.image || placeholderImage}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover"
                />

                {/* Item details container */}
                <div className="flex-1 ml-3 min-w-0">
                  <h3
                    className="text-[14px] font-semibold truncate"
                    title={item.name} // Tooltip shows full name on hover
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)} {/* Display item price */}
                  </p>
                </div>

                {/* Quantity adjustment buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)} // Decrease quantity by 1
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span> {/* Display current quantity */}
                  <button
                    onClick={() => updateQuantity(item.id, 1)} // Increase quantity by 1
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total price and checkout button */}
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold text-lg">
                ${totalPrice.toFixed(2)} {/* Display total cart price */}
              </span>
            </div>

            {/* Checkout button with hover effect */}
            <motion.button
              whileHover={{
                background: "linear-gradient(90deg, #F8B400, #FF8C00)", // Gradient color change on hover
              }}
              className="w-full py-2 text-gray-dark rounded shadow"
              style={{
                background: "linear-gradient(90deg, #F8B400, #FFD700)", // Default gradient background
              }}
            >
              Checkout
            </motion.button>
          </div>
        </>
      ) : (
        // Display message if the cart is empty
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}

      {/* Close cart button */}
      <motion.div
        whileHover={{ scale: 0.8, cursor: "pointer" }} // Shrink button on hover
        whileTap={{ scale: 0.8 }} // Shrink button on tap
        onClick={() => setShowCart(false)} // Close cart when clicked
        className="absolute top-4 right-4"
      >
        <X size={20} />
      </motion.div>
    </motion.div>
  );
};

export default Cart;
