import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return [];
  
    case 'ADD_ITEM':
      // Check if item already exists in cart
      const existingItem = state.find(item => item.id === action.item.id);
      
      if (existingItem) {
        // Increment the quantity of the existing item
        return state.map(item =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item to cart
        return [...state, { ...action.item, quantity: 1 }];
      }
      
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    case 'UPDATE_ITEM_QUANTITY':
  if (action.quantity <= 0) {
    return state.filter(item => item.id !== action.id);
  }
  return state.map(item =>
    item.id === action.id ? { ...item, quantity: action.quantity } : item
  );
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartStateContext);
};

export const useDispatchCart = () => {
  return useContext(CartDispatchContext);
};
