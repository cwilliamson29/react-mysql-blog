import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function LoggedIn() {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="auth">
            <form className="loggedIn">
                <h3>Currently logged in as:</h3>
                <h1>{currentUser.toUpperCase()}</h1>
                <div className="bottomButtons">
                    <div className="left">
                        <Link to="/" className="link">
                            <i className="fa-solid fa-chevron-left"></i>
                            <span> Home</span>
                        </Link>
                    </div>
                    <div className="center"></div>
                    <div className="right">
                        <Link to="/account" className="link">
                            <span>Account </span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
