import React from "react";
import "./Project.css";

export default function Project(props) {
    return (
        <div className="columns is-flex-wrap-wrap is-flex-direction-row">
            {props.projects.map((project) => (
                <div className="column is-one-third" key={project.title}>
                    <div className="card">
                        <div className="card-header">
                            <p className="card-header-title">
                                {project.title}
                            </p>
                            <button className="github">
                                <a href={project.repo} target="blank" rel="noopener noreferrer">
                                    <figure className="image is-24x24">
                                        <img src={process.env.PUBLIC_URL + project.icon} alt="Github Logo" />
                                    </figure>
                                </a>
                            </button>
                        </div>
                        <div className="card-image">
                            <a href={project.deployed}  target="blank" rel="noopener noreferrer">
                                <figure className="image is-4by3">
                                    <img src={process.env.PUBLIC_URL + project.image} alt="Screenshot of App" />
                                </figure>
                            </a>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    )
};