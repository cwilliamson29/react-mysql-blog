import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const login = async (inputs) => {
        const res = await axios.post("/users/authenticate", inputs);
        localStorage.setItem("user", JSON.stringify(res.data));
        setCurrentUser(res.data.username);
    };

    const logout = async (inputs) => {
        setCurrentUser(null);
        localStorage.clear();
    };

    useEffect(() => {
        let s = JSON.parse(localStorage.getItem("user"));

        if (s !== null) {
            console.log(s.token);
            setCurrentUser(s.username);
        } else {
            setCurrentUser(null);
        }
    }, [currentUser]);

    return <AuthContext.Provider value={{ currentUser, login, logout }}> {children} </AuthContext.Provider>;
};
