import { useState } from "react";
import AuthContext from '../context/AuthContext'

export const AuthProvider = ({ children }) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(storedUser);

    const userContextValue = {
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={userContextValue}>
            {children}
        </AuthContext.Provider>
    );
};