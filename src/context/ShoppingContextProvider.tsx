import { createContext, Dispatch, ReactNode, useReducer } from "react";

type Action =
  | { type: "ADDTOCART"; payload: CartItem }
  | { type: "REMOVEFROMCART"; payload: string };

interface CartItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

type StateType = CartItem[];

const initialState: StateType = [];

type CreateContextType = {
  state: StateType;
  dispatch: Dispatch<Action>;
};

export const ShoppingContext = createContext<CreateContextType | undefined>(
  undefined
);

const Reducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case "ADDTOCART": {
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        // Update quantity for existing item
        const updatedState = [...state];
        updatedState[existingItemIndex].quantity = action.payload.quantity;
        return updatedState;
      } else {
        // Add new item to the cart
        return [...state, action.payload];
      }
    }
    case "REMOVEFROMCART":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

function ShoppingContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <ShoppingContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingContext.Provider>
  );
}

export default ShoppingContextProvider;
