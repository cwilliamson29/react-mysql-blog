import React from "react";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg" />
                <div className="user">
                    <img src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link className="link" to={`/write?edit=2`}>
                            <img src={Edit} alt="Edit" />
                        </Link>
                        <Link className="link" to="">
                            <img src={Delete} alt="Delete" />
                        </Link>
                    </div>
                </div>
                <h1>Lorem Ipsum</h1>
                <p>
                    Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.Lorem Ipsum dolar sit
                    amer consectetur pompei hellfire club lorem consecitur.Lorem Ipsum dolar sit amer consectetur pompei
                    hellfire club lorem consecitur.
                </p>
            </div>
            <Menu />
        </div>
    );
};

export default Single;
