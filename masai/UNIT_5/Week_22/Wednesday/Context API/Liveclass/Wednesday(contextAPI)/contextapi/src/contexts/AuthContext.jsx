import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState("");
    const handleToken = (newToken) => {
        setToken(newToken);
    }
    return <AuthContext.Provider value={{ token, handleToken }} >
        {children}
    </AuthContext.Provider >
}

export { AuthContextProvider, AuthContext };