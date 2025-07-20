 import productModel from "../models/productModel";

export const getAllProducts = async () => {

   return await productModel.find();
};

export const seedInitialProducts = async () =>{

   try {
       const products = [
     {title: "Product 1", image: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChsSEwjIs5OhgL2OAxWOqIMHHW4GLE4YACICCAEQIBoCZWY&co=1&ase=2&gclid=CjwKCAjw1dLDBhBoEiwAQNRiQU5AaX3XSV2X8bwRIY6rxHyWEpm_qM0jp_T4npZsgUGLcPMtLW38FxoCwlMQAvD_BwE&ohost=www.google.com&cid=CAESeuD2x_XiD0Vml8KNUOaAL_4BLP-eFjqYSik1CCD_NIYkZeymMu9knlKeLTeWj8pXd0UKVKzXR_zacDlmFpEusAANhtGvHrxjxq1Dwb-76kuRK9PHl4BxReMMo1J1v01u8Le4KdAdyeswI8vB3ec9HCAB8CWeBy80wUrH&category=acrcp_v1_40&sig=AOD64_3asfT95P7VmKYkWdUtXkRvudvFog&ctype=5&q=&nis=4&ved=2ahUKEwjup4-hgL2OAxWH3wIHHYePHQsQ9aACKAB6BAgFEBs&adurl=", price: 1500 , stock: 150},
     
];

const existingProducts = await getAllProducts();

  if(existingProducts.length === 0 ) {
   await productModel.insertMany(products)

}

   }catch(err){
     console.error("cannot see database", err);
   }

  
};
