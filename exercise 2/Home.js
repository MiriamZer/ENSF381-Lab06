import React from "react";

function Home(props) {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    );
}

export default Home;