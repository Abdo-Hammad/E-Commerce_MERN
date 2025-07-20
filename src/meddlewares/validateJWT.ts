 
import { NextFunction, Request,  Response } from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel";
import { ExtendRequest } from "../types/extendedRequest";
 
 
const validateJWT = (req: ExtendRequest, res: Response, next: NextFunction) => {

const awthorizationHeader = req.get("authorization");

if (!awthorizationHeader) {
   
   res.status(403).send("Authorization header was not provided");
   return;
}
const token = awthorizationHeader.split(" ")[1];

 if (!token){
res.status(403).send("bearer token not found");
return;
}

jwt.verify(token, "oK9KVC4XRXFcRLHFr1nwwT88akws49i",async (err, payload) => {
  if (err) {

 res.status(403).send("Invalid token");
 return;
  }
 

if(!payload){
  res.status(403).send("Inalid token payload")
}


 const userPayload = payload as { email: string; firstName: string; lastName: string};

const user = await userModel.findOne({ email: userPayload.email});
    req.user = user;
    next();
});
};
export default validateJWT;