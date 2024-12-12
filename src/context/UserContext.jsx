import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios
                .get("http://localhost:5000/api/verify-token", {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    setUser({ token });
                })
                .catch(() => {
                    localStorage.removeItem("token");
                });
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("token", userData.token);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
