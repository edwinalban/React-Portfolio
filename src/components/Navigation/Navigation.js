import React from "react";
import "./Navigation.css";

export default function Navigation(props) {
    const links = ["About", "Portfolio", "Resume/Contact"]
    return (
        <div className="tabs is-right has-text-weight-bold is-responsive">
            <ul>
                {links.map((link) => (
                    <li className={props.currentView === link ? "nav-item is-active" : "nav-item"} key={link}>
                        <a
                            href={"#" + link.toLowerCase()}
                            onClick={() => props.setCurrentView(link)}
                            className={props.currentView === link ? "nav-link active" : "nav-link"}
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
};