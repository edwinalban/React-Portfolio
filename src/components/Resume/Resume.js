import React from "react";

export default function Resume() {
    return (
        <div>
            <p className="content is-large has-text-centered has-text-weight-bold">Resume</p>
            <p className="has-text-weight-semibold">
                Click to download:
                <a href={process.env.PUBLIC_URL + '/images/resume.pdf'} download>
                    <span> Edwin Alban - MERN</span>
                </a>
            </p>
            <br></br>
            <p className="content is-medium has-text-weight-bold">Proficiencies:</p>
            <ul className="has-text-weight-semibold">
                <li>React</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Node</li>
                <li>MySQL</li>
                <li>Responsive Design</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>Bootstrap</li>
            </ul>
        </div>
    )
};