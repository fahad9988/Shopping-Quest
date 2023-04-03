import { useState } from "react";
import { createContext } from "react";

export const AuthrizeContext=createContext();

export default function AuthrizeContextProvider({children}){
    const [isAuth,setIsAuth]=useState(false)
    const  toggleAuth=()=>{
        return setIsAuth(!isAuth)
    }
   return <AuthrizeContext.Provider value={{isAuth,setIsAuth}}>{children}</AuthrizeContext.Provider>

}