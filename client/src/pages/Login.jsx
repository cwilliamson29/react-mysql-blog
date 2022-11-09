import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    const { currentUser, login } = useContext(AuthContext);

    console.log(currentUser);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
            //navigate("/");
        } catch (err) {
            setErr(err.response.data);
        }
    };
    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" name="username" onChange={handleChange} />
                <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                <button onSubmit={handleSubmit}>Login</button>
                {err && <p>Wrong Username or password</p>}
                <span>
                    Don't have an account? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    );
};

export default Login;
