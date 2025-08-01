import { Box, Container, Typography } from "@mui/material";
 import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useCart } from "../context/Cart/CartContext";
    
    const CartPage = () => {
       
      const { cartItems, totalAmount, updateItemInCart, removeItemInCart,  clearCart } = useCart(); 
       
   const handleQuantity=(productId: string, quantity: number) => {
     if (quantity <=0) {
      return;

    };
    updateITemInCart(productId, quantity);
}

const  handleRemoveItem = (productId: string) => {
    removeItemInCart     ()
  }

 
      function handleRemoveItem(productId: any): void {
        throw new Error("Function not implemented.");
      }

      

return ( 
    
   <Container fixed sx={{ mt: 2 }}>
    <Box display='flex' flexDirection='row' justifyContent='space-between' sx={{mb: 2}}>
       <Typography variant="h4">My Cart </Typography>
        <Button onClick={() => clearCart()}>Clear Cart</Button>
    </Box>
     
    {cartItems.length ? 
    <Box gap={4} display='flex' flexDirection="column"> 
    {cartItems.map((item) => (
         <Box
          
          display= "flex"
          flexDirection ="row"
          justifyContent="space-between"
          alignItems="center"
          
          sx={{
            border: 1,
            borderColor: '#f5f5f5',
            borderRadius: 5,
            padding: 2
     }}  
         >
          <Box display='flex'  flexDirection="row" alignItems='center' gap={2}> 
           <img src={item.image} width={150} />
           <Box> 
       <Typography variant="h5">{item.title}</Typography>
       <Typography>{item.quantity} x {item.unitPrice} EGP</Typography>
          <Button onClick={() => handleRemoveItem(item.productId)}>Remove Item</Button>  
       </Box>
       </Box>
        <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={() => handleQuantity(item.product, item.quantity - 1)}>+</Button>
          <Button onClick={() => handleQuantity(item.product, item.quantity + 1)}>-</Button>
          
        </ButtonGroup>

       </Box>
        ))};
         <Box>
            <Typography variant="h4">Total Amount: {totalAmount.toFi} EGP</Typography>
        </Box>
        </Box>:  (
        <Typography>
          Cart is empty. Please start shopping and add items first.
        </Typography>
         )}
   </Container>
   
 );

 };

  export default CartPage;

 
  