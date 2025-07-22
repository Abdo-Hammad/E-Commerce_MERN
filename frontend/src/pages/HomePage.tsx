 
import  Grid  from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
 
const HomePage = ()=> {

    const [products, setProducts] = useState<Product[]>([])

  useEffect(() =>{
   fetch("http://localhost:${port}/product").then(async(response) => {
  const data= await response.json();
    setProducts(data);
   })
}, [])
  
  return ( <Container sx={{ mt: 2 }}> 
  <Grid container spacing={2} >
    
   {products.map((p) => (
          <Grid item md={4}>
          <ProductCard    {...p}/>
           </Grid>
    
        ))}
  
    
 </Grid> 
</Container>
);
};
export default HomePage;