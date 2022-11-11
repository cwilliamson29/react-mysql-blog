import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import LoggedIn from "../utils/loggedIn";
import { useEffect } from "react";

const AdminPanel = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [err, setErr] = useState(null);
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    const { currentUser, login } = useContext(AuthContext);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
        } catch (err) {
            setErr(err.response.data);
        }
    };
    const authHeader = () => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user && user.token) {
            // for Node.js Express back-end
            return { "x-access-token": user.token };
        } else {
            return {};
        }
    };
    const getAdmin = () => {
        return axios.get("/adminpanel", { headers: authHeader() });
    };

    useEffect(() => {
        getAdmin().then((res) => {
            setContent(res.data);
        });
    }, []);

    if (currentUser !== null) {
        return <LoggedIn />;
    } else {
        return (
            <div className="auth">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" name="username" onChange={handleChange} />
                    <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                    <button type="submit">Login</button>
                    {err && <p>Wrong Username or password</p>}
                    <span>
                        Don't have an account?{" "}
                        <Link to="/register" className="link">
                            Register
                        </Link>
                    </span>
                </form>
            </div>
        );
    }
};

export default AdminPanel;
