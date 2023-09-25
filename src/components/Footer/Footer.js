import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="is-flex is-justify-content-center footer--pin">
            <a href="https://www.linkedin.com/in/edwin-alban-94673a109/" rel="noopener noreferrer" target="blank">
                <figure className="image is-24x24">
                    <img src={process.env.PUBLIC_URL + "/images/LI-In-Bug.png"} alt="Linked In Logo" />
                </figure>
            </a>
            <a href="https://github.com/edwinalban" rel="noopener noreferrer" target="blank">
                <figure className="image is-24x24">
                    <img src={process.env.PUBLIC_URL + "/images/github-mark.png"} alt="Github Logo Logo" />
                </figure>
            </a>
            <a href="mailto:edwinalban@gmail.com" rel="noopener noreferrer" target="blank">
                <figure className="image is-24x24">
                    <img src={process.env.PUBLIC_URL + "/images/Gmail_Logo.png"} alt="Github Logo Logo" />
                </figure>
            </a>
        </footer>
    )
};