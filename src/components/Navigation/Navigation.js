import React from "react";
import './Navigation.css';

export default function Navigation(props) {
    const links = ["About Me", "Portfolio", "Contact", "Resume"]
    return (
        <div className="links is-flex-direction-row">
            <ul className="is-justify-content-flex-end">
                {links.map((link) => (
                    <li className={props.currentView === link ? "nav-item is-active" : "nav-item"} key={link}>
                        <a
                            href={"#" + link.toLowerCase()}
                            onClick={() => props.setCurrentView(link)}
                            className={props.currentView === link ? "nav-link is-active" : "nav-link"}
                        ></a>
                    </li>
                ))}
            </ul>
        </div>
    )
}