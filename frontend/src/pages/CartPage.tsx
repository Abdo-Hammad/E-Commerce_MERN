import { Box, Container, Typography } from "@mui/material";
 import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
    
    const CartPage = () => {
       
      const { cartItems, totalAmount } = useCart(); 
       
 
 
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
          <Button>Remove Item</Button>  
       </Box>
       </Box>
        <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>+</Button>
          <Button>-</Button>
          
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

 
  