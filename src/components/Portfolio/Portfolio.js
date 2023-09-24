import React from "react";
import Project from "../Project/Project"
import "./Portfolio.css";

const projects = [
    {
        title: "Social Whiskers Pet Adoption",
        image: "/images/social-whiskers.png",
        repo: "https://github.com/edwinalban/Social-Whiskers-Pet-Adoption",
        deployed: "https://social-whiskers-ad907fdaaf47.herokuapp.com/",
        icon: "/images/github-mark.png"
    },
    {
        title: "What's On Hand",
        image: "/images/whats-on-hand.png",
        repo: "https://github.com/edwinalban/Whats_On_Hand_Cocktail_Search",
        deployed: "https://quagsire369.github.io/Whats_On_Hand_Cocktail_Search/",
        icon: "/images/github-mark.png"
    },
    {
        title: "Coding Quiz",
        image: "/images/coding-quiz.png",
        repo: "https://github.com/edwinalban/Coding-Quiz-Challenge",
        deployed: "https://edwinalban.github.io/Coding-Quiz-Challenge/index.html",
        icon: "/images/github-mark.png"
    },
    {
        title: "Note Taker",
        image: "/images/note-taker.png",
        repo: "https://github.com/edwinalban/Note-Taker",
        deployed: "https://basic-note-taker-1ebef20d0f5f.herokuapp.com",
        icon: "/images/github-mark.png"
    },
    {
        title: "Weather Forecast",
        image: "/images/weather-forecast.png",
        repo: "https://github.com/edwinalban/Weather-Forecast",
        deployed: "https://edwinalban.github.io/Weather-Forecast/",
        icon: "/images/github-mark.png"
    },
    {
        title: "Day Planner",
        image: "/images/day-planner.png",
        repo: "https://github.com/edwinalban/Day-Planner",
        deployed: "https://edwinalban.github.io/Day-Planner/",
        icon: "/images/github-mark.png"
    }
];

export default function Portfolio() {
    return (
        <div>
            <p className="content is-medium">Portfolio</p>
            <br></br>
            <br></br>

            <Project projects={projects} />
        </div>
    )
};