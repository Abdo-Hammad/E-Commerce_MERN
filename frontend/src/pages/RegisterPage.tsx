 
  import Box from "@mui/material/Box";
  import Typography  from "@mui/material/Typography";
  import Container from "@mui/material/Container";
import TextField   from "@mui/material/TextField";
import  Button from "@mui/material/Button";
import { useRef, useState } from "react";
import { useAuth } from "../context/Auth/AuthContext";

 const RegisterPage = () =>{
    const [error, setError] = useState("")
    const firstNameRef = useRef <HTMLInputElement>(null);
    const  lastNameRef = useRef <HTMLInputElement>(null);
    const emailRef = useRef <HTMLInputElement>(null);
    const passwordRef = useRef <HTMLInputElement>(null);
    

      const onSubmit = async   () => { 
         // eslint-disable-next-line react-hooks/rules-of-hooks
           const  {login} = useAuth();  
         
    
        const firstName =  firstNameRef.current?.value;
        const lastName = lastNameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
         if (!firstName || !lastName || !email || !password) {
          setError("Incorrect token")

   return;
}

         const response = await fetch('${BASE_URL}/user/register', {
    method: "POST",
    headers: {
     'Content-Type' : 'application/json'
   },
     
     body: JSON.stringify({
       firstName,  
       lastName,
       email,
       password,
       }),
      
    });
    if (!response.ok) {
    setError("Unable to register user, please try defferent credientials!");
    return;
}
    const token = await response.json();
        if(!token) {

     setError("Incorrect token")
     return;
  }
    login(email, token)

     
  };
   return ( 
   <Container> 
    <Box
      sx={{
       display: "flex",
       flexDirection: "column",
       justifyContent:  "center",
       alingItems: "Center",
       mt: 4,
     }}
     
    >

        <Typography  variant ="h4">Register New ACCount</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2, border: 1, p: 2 , borderColor: "f5f5f5f5" }}>

      <TextField inputRef={firstNameRef} label=" First Name" name="firstNameRef" />       
      <TextField inputRef={lastNameRef} label=" Last Name" name="lastNameRef" />
    
    <TextField inputRef={emailRef} label="Email" name="email" />
    <TextField inputRef={passwordRef} type="password" label="Password" name="password" />
    <Button onClick={onSubmit} Variant="contained">Register</Button>
     {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
</Box>
    </Box>
     
    </Container>
   )
}

export default RegisterPage;