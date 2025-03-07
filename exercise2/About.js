import React from "react";

function About(props) {
    return (
        <div>
            <h1>About Us</h1>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    );
}

export default About;