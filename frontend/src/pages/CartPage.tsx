import { Box, Container, Typography } from "@mui/material";
 import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
    
    const CartPage = () => {
       
      const { cartItems, totalAmount, updateItemInCart } = useCart(); 
       
   const handleQuantity=(productId: string, quantity: number) => {
     if (quantity <=0) {
      return;

    };
    updateITemInCart(productId, quantity);
}

const  handleRemoveItem = (productId: string) => {
    deleteItemInCart()
  }

 
      function handleRemoveItem(productId: any): void {
        throw new Error("Function not implemented.");
      }

return ( 
    
   <Container fixed sx={{ mt: 2 }}>
    <Typography variant="h4">My Cart </Typography>
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
        </Box>
   </Container>
   
 );

 };

  export default CartPage;

 
  