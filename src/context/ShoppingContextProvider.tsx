import { createContext, Dispatch, ReactNode, useReducer } from "react"; // Importing necessary React hooks and types

// Action types that define possible actions for the shopping cart
type Action =
  | { type: "ADDTOCART"; payload: CartItem } // Action for adding an item to the cart
  | { type: "REMOVEFROMCART"; payload: string }; // Action for removing an item from the cart by its ID

// CartItem interface defines the structure of an item in the cart
interface CartItem {
  id: string; // Unique identifier for the item
  name: string; // Name of the item
  price: number; // Price of the item
  image?: string; // Optional image URL for the item
  quantity: number; // Quantity of the item in the cart
}

// StateType is an array of CartItems, representing the state of the cart
type StateType = CartItem[];

// Initial state of the cart is an empty array
const initialState: StateType = [];

// CreateContextType defines the context's structure, containing the state and dispatch function
type CreateContextType = {
  state: StateType; // Cart state
  dispatch: Dispatch<Action>; // Dispatch function to trigger actions
};

// Create the ShoppingContext with an initial undefined value
export const ShoppingContext = createContext<CreateContextType | undefined>(
  undefined
);

// Reducer function that handles state updates based on actions
const Reducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case "ADDTOCART": {
      // Check if the item already exists in the cart
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        // If the item exists, update its quantity
        const updatedState = [...state];
        updatedState[existingItemIndex].quantity = action.payload.quantity;
        return updatedState;
      } else {
        // If the item doesn't exist, add it to the cart
        return [...state, action.payload];
      }
    }

    case "REMOVEFROMCART":
      // Remove the item with the given ID from the cart
      return state.filter((item) => item.id !== action.payload);

    default:
      return state; // Return the current state if the action type is not recognized
  }
};

// ShoppingContextProvider component that wraps the app and provides the context to children components
function ShoppingContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(Reducer, initialState); // Using useReducer to manage the cart state

  return (
    <ShoppingContext.Provider value={{ state, dispatch }}>
      {" "}
      {/* Providing the state and dispatch function to the context */}
      {children} // Rendering the children components within the provider
    </ShoppingContext.Provider>
  );
}

export default ShoppingContextProvider; // Exporting the context provider for use in the app
