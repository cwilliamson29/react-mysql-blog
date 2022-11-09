import React from "react";

const Menu = () => {
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
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map((p) => {
                return (
                    <div className="post" key={p.id}>
                        <img src={p.img} alt="" />
                        <h2>{p.title}</h2>
                        <button>Read more</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;
