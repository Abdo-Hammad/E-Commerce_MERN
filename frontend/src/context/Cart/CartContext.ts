 import { createContext, useContext} from "react";
import type { CartItem } from "../../types/Cartitem";
 
  
  interface CartContextType {
     cartItems: CartItem[];
     totalAmount: number;
        addTtiemToCart: (productId: string) => void;
          updateItemInCart: (productId: string, quantity: number) => void
          removeItemInCart: (productId: string ) => void
           clearCart: () => void
    
   }

  export const CartContext = createContext<CartContextType>(
    { 
       cartItems: [],
     totalAmount: 0 ,
      addTtiemToCart: () => {} ,
      updateItemInCart: () => {},
      removeItemInCart: () => {},
      clearCart: () => {}
    }) 
  export const useCart = () => useContext(CartContext);