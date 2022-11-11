import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../images/logo.png";

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=art">
                        <h6>Art</h6>
                    </Link>
                    <Link className="link" to="/?cat=science">
                        <h6>Science</h6>
                    </Link>
                    <Link className="link" to="/?cat=technology">
                        <h6>Technology</h6>
                    </Link>
                    <Link className="link" to="/?cat=cinema">
                        <h6>Cinema</h6>
                    </Link>
                    <Link className="link" to="/?cat=design">
                        <h6>Design</h6>
                    </Link>
                    <Link className="link" to="/?cat=food">
                        <h6>food</h6>
                    </Link>
                    {currentUser === null ? (
                        <>
                            <Link className="link loginLinks" to="/login">
                                Login
                            </Link>
                            <Link className="link loginLinks" to="/register">
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <span className="userName">{currentUser}</span>
                            <span
                                onClick={() => {
                                    logout();
                                }}
                            >
                                Logout
                            </span>
                            <span className="write">
                                <Link to="/write" className="link">
                                    Write
                                </Link>
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
