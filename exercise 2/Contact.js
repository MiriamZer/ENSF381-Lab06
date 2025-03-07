import React from "react";

function Contact(props) {
    return (
        <div>
            <h1>Contact Us</h1>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    );
}

export default Contact;