import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAuth } from "../context/Auth/AuthContext";
 
    
    const CartPage = () => {
      const { token } = useAuth();
      const { cartItems, totalAmount } = useCart(); 
      const [error, setError] = useState("");
 
 
return ( 
   <Container sx={{ mt: 2 }}>
    <Typography variant="h4">My Cart </Typography>
    {cartItems.map((item) => (
         <Box>{item.title}</Box>
        ))}
   </Container>

 );

 };

  export default CartPage;

 
  