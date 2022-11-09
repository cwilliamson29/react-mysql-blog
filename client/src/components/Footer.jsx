import React from "react";
//import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="Logo" />
            <span>Made with react, express, node, and MySQL</span>
        </footer>
    );
};

export default Footer;
