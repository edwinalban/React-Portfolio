import React from "react";

export default function Resume() {
    return (
        <div>
            <div>
                <p className="has-text-centered has-text-weight-semibold">If you would like to contact me, please email me at edwinalban@gmail.com and I will be in touch soon! There is a gmail icon at the bottom of the page for your convenience.</p>
                <p className="has-text-centered has-text-weight-semibold">My LinkedIn and GitHub profiles can be viewed by clicking the corresponding icons at the bottom of the page as well.</p>
            </div>
            <hr></hr>
            <div>
                <p className="content is-large has-text-centered has-text-weight-bold">Resume</p>
                <p className="has-text-weight-semibold">
                    Click to download my resume:
                    <a href='/React-Portfolio/images/Resume.pdf' download>
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
        </div>
    )
};