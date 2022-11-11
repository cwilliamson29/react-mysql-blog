import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import LoggedIn from "../utils/loggedIn";

const Register = () => {
    const { currentUser } = useContext(AuthContext);

    const [inputs, setInputs] = useState({
        firstName: "",
        LastName: "",
        username: "",
        email: "",
        password: "",
    });
    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/users/register", inputs);
            navigate("/login");
        } catch (err) {
            setErr(err.response.data);
        }
    };

    if (currentUser !== null) {
        return <LoggedIn />;
    } else {
        return (
            <div className="auth">
                <h1>Register</h1>
                <form>
                    <input required type="text" placeholder="First Name" name="firstName" onChange={handleChange} />
                    <input required type="text" placeholder="Last Name" name="lastName" onChange={handleChange} />
                    <input required type="text" placeholder="Username" name="username" onChange={handleChange} />
                    <input required type="email" placeholder="Email" name="email" onChange={handleChange} />
                    <input required type="password" placeholder="Password" name="password" onChange={handleChange} />
                    <button onClick={handleSubmit}>Register</button>
                    {err && <p>Username Taken!</p>}
                    <span>
                        Do you have an account? <Link to="/login">Login</Link>
                    </span>
                </form>
            </div>
        );
    }
};

export default Register;
