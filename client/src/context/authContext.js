import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const login = async (inputs) => {
        const res = await axios.post("/users/authenticate", inputs);
        localStorage.setItem("user", JSON.stringify(res.data.username));
        setCurrentUser(res.data.username);
        console.log(res.data.userType);
    };

    const logout = async (inputs) => {
        const res = await axios.post("/auth/logout", inputs);
        setCurrentUser(null);
        console.log("inside logout asdf + ", res.data);
    };

    useEffect(() => {
        let s = JSON.parse(localStorage.getItem("user"));

        if (s !== null) {
            setCurrentUser(s);
        } else {
            setCurrentUser(null);
        }
    }, [currentUser]);

    return <AuthContext.Provider value={{ currentUser, login, logout }}> {children} </AuthContext.Provider>;
};
