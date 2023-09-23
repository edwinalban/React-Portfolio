import React, { useState } from "react";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import Navigation from "../Navigation/Navigation";

export default function Header() {
    const [currentView, setCurrentView] = useState("About");

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
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <p className="navbar-item is-justify-content-flex-start">
                        <span className="content is-large">Edwin Alban</span>
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
        </>
    )
};