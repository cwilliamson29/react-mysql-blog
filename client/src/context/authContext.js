import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem("user"));

    /*const check = () => {
        const s = JSON.parse(localStorage.getItem("useer"));
        console.log(s, " - is S");
        if (s) {
            setCurrentUser(s);
        } else {
            setCurrentUser(null);
        }
    };*/

    const login = async (inputs) => {
        const res = await axios.post("/users/authenticate", inputs);
        //setCurrentUser(res.data.username);
        console.log(currentUser, "res data username");
        localStorage.setItem("user", JSON.stringify(res.data.username));

        console.log("inside login + ", res.data);
    };
    const logout = async (inputs) => {
        const res = await axios.post("/auth/logout", inputs);
        //setCurrentUser(null);
        console.log("inside logout asdf + ", res.data);
    };
    /*useEffect(() => {
        //check();
        //localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);*/

    return <AuthContext.Provider value={{ currentUser, login, logout }}> {children} </AuthContext.Provider>;
};
