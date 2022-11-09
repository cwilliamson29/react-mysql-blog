import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const posts = [
        {
            id: 1,
            title: "Lorem Ipsum Dolor Sit",
            desc: "Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.",
            img: "https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg",
        },
        {
            id: 2,
            title: "Lorem Ipsum Dolor Sit",
            desc: "Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.",
            img: "https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg",
        },
        {
            id: 3,
            title: "Lorem Ipsum Dolor Sit",
            desc: "Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.",
            img: "https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg",
        },
        {
            id: 4,
            title: "Lorem Ipsum Dolor Sit",
            desc: "Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.",
            img: "https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg",
        },
        {
            id: 5,
            title: "Lorem Ipsum Dolor Sit",
            desc: "Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.Lorem Ipsum dolar sit amer consectetur pompei hellfire club lorem consecitur.",
            img: "https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg",
        },
    ];

    return (
        <div className="home">
            <div className="posts">
                {posts.map((p) => {
                    return (
                        <div className="post" key={p.id}>
                            <div className="img">
                                <img src={p.img} alt="img" />
                            </div>
                            <div className="content">
                                <Link to={`/post/${p.id}`} className="link">
                                    <h1>{p.title}</h1>
                                    <p>{p.desc}</p>
                                    <button>Read more...</button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
