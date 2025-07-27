 import { createContext, useContext} from "react";
  
  interface AuthContextType {
     userName: string | null;
     token: string | null;
    login: (username: string, token:string) => void;
   }

  export const AuthContext = createContext<AuthContextType>({username: null, token: null, login: () => {}})
  export const useAuth = () => useContext(AuthContext);