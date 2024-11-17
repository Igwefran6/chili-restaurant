import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContextProvider";

// Hook for easier context usage
export const useShoppingContext = () => {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error(
      "useShoppingContext must be used within a ShoppingContextProvider"
    );
  }
  return context;
};
