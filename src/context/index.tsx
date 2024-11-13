"use client"
import { createContext, useContext, useState } from "react";
import { UserProps } from "@/types";


type AuthContextProps = {
    user: UserProps | null;
    login: (user:UserProps)=>void;
    logout: ()=>void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider = ({children}:{children:React.ReactNode})=>{

    const [user, setUser] = useState<UserProps>({
        nome: '',
        senha: '',
        tipo: ''
    })
 
    const login = (user: UserProps)=>{
        setUser(user)
    }

    const logout = ()=>{
        setUser({nome:'',senha:'', tipo:''})        
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext}

