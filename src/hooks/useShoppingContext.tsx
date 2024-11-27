import { useContext } from "react"; // Importing useContext hook from React to access the context
import { ShoppingContext } from "../context/ShoppingContextProvider"; // Importing the ShoppingContext created in the context provider

// Custom hook for easier context usage
export const useShoppingContext = () => {
  const context = useContext(ShoppingContext); // Accessing the ShoppingContext using the useContext hook

  // Throwing an error if the context is used outside of the ShoppingContextProvider
  if (!context) {
    throw new Error(
      "useShoppingContext must be used within a ShoppingContextProvider" // This ensures the context is accessed within the provider
    );
  }

  return context; // Returning the context so components can use it
};
