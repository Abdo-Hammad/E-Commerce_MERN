/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState, type FC, type PropsWithChildren } from "react";
import { CartContext } from "./CartContext";
import type { CartItem } from "../../types/Cartitem";
import { useAuth } from "../Auth/AuthContext";

   const CartProvider: FC<PropsWithChildren> =({ children }) => {
      const {token} = useAuth();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
 const [totalAmount, setTotalAmount] = useState<number>(0);
   const [error, setError] = useState('');



     useEffect(() => {
      if (!token) {
      return;
   }
    const fetchCart = async () => {
      const response = await fetch ('${BASE_URL}/cart', {
      headers: {
   
            'Authorization': 'Bearer ${token}'
   }

});
 

  if (!response.ok) {
  
     
     setError("Failed to fetch user cart. Pleas try again");

  }
  

   const cart = await response.json();
   const CartItemsMapped  = cart .items.map(
    ({ product, quantity }:{ product: any; quantity: number }) => ({
         productId: product._id,
         title: product.title, 
         image: product.image, quantity, 
         unitPrice: product.unitPrice})
        );
  setCartItems(CartItemsMapped);
  };
    
  fetchCart();
  }, [token]);





 const addItemToCart = async (productId: string) => {
  
  try {
   
      const response = await fetch ('${BASE_URL}/cart/items',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ${token}',
         },

       body: JSON.stringify({ 
        productId,
        quantity: 1 
  }),
});

  if(!response.ok) {
      setError('Failed to add to cart');

  }
     const cart = await response.json();
    if (!cart) {
    setError("Failed to parse cart data");
}  
const CartItemsMapped  = cart .items.map(
    ({ product, quantity }:{ product: any; quantity: number }) => ({
         productId: product._id,
         title: product.title, 
         image: product.image, quantity, 
         unitPrice: product.unitPrice})
        );
 
   setCartItems([...CartItemsMapped ]);
   setTotalAmount(cart.totalAmount)
  } catch (error){

   console.error(error)
}
};
 

         

     return (

         <CartContext.Provider 
         value={{ cartItems, totalAmount,  addItemToCart }}
         >
          {children}
        </CartContext.Provider>
   )
}

  export default CartProvider;
