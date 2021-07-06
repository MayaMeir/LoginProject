import React, { useContext } from "react";

export const AuthContext = React.createContext();

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    
    if (!context){
        throw new Error('useAuthContext should be used inside a provider');
    }
    return context;
}