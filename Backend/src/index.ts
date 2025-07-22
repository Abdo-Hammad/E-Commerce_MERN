import dotenv from "dotenv";
import('dotenv/config');
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import { seedInitialProducts } from "./services/productService";
import productRoute from "./routes/productRoute";
import cartRoute  from "./routes/productRoute";
  import  cors from "cors";
 

dotenv.config();

const app = express();
const port = 3001;


app.use(express.json());
  app.use(cors());
app.use("/product", productRoute);
 
 
mongoose
    .connect(process.env.DATABASE_URL || '')
    .then(() => console.log("Mongo connected!"))
    .catch((err) => console.log("Failed to conncet", err));

    seedInitialProducts();
     app.use('/user', userRoute);
     app.use("/product", productRoute);
    app.use("/cart", cartRoute)

  app.listen(port,  () => {
   
   console.log('Server is running at: http://localhost:${port}')
})

function cors(): any {
  throw new Error("Function not implemented.");
}
function cirs(): any {
  throw new Error("Function not implemented.");
}

