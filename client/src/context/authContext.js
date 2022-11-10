import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const s = JSON.parse(localStorage.getItem("user"));

    const check = () => {
        console.log(s, " + INSIDE CHECK");
        if (s) {
            setCurrentUser(s);
        } else {
            setCurrentUser(null);
        }
    };

    const login = async (e, inputs) => {
        e.preventDefault();
        const res = await axios.post("/auth/login", inputs);
        setCurrentUser(res.data.username);
        console.log("inside login + ", res.data);
    };
    const logout = async (inputs) => {
        const res = await axios.post("/auth/logout", inputs);
        setCurrentUser(null);
        console.log("inside logout + ", res.data);
    };
    useEffect(() => {
        check();
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return <AuthContext.Provider value={{ currentUser, login, logout }}> {children} </AuthContext.Provider>;
};
