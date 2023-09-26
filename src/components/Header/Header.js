import React, { useState } from "react";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header() {
    const [currentView, setCurrentView] = useState("");

    const renderView = () => {

        switch (currentView) {
            case "About":
                return <About />;

            case "Portfolio":
                return <Portfolio />;

            case "Contact":
                return <Contact />;

            case "Resume":
                return <Resume />;

            default:
                return <About />;
        }
    }

    return (
        <div className="main-container">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <p className="navbar-item content is-large has-text-weight-bold">
                        Edwin Alban
                    </p>
                </div>
            </nav>
            <Navigation
                currentView={currentView}
                setCurrentView={setCurrentView}

            />

            <main>
                <div>{renderView(currentView)}</div>
            </main>
        </div>
    )
};