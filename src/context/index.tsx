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

    const [user, setUser] = useState<UserProps | null>(null);
 
    const login = (user: UserProps)=>{
        setUser(user);
        localStorage.setItem('@Auth:user', JSON.stringify(user));
    }

    const logout = ()=>{
        setUser(null);
        localStorage.removeItem('@Auth:user');
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext}


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};

