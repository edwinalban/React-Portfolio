import React from "react";
import Project from "../Project/Project"
import "./Portfolio.css";

const projects = [
    {
        title: "Social Whiskers Pet Adoption",
        image: "/images/social-whiskers.png",
        repo: "https://github.com/edwinalban/Social-Whiskers-Pet-Adoption",
        deployed: "https://social-whiskers-ad907fdaaf47.herokuapp.com/",
        icon: "/images/github-mark.png",
        description: `Social Whiskers is an exercise in utilizing Handlebars.js to implement the Model-View-Controller 
        (MVC) architecture with a RESTful API. Along with Handlebars, we have used MySQL, Sequelize, Bcrypt, Node.js, 
        Express.js, Bootstrap, Predictionary.js, JavaScript, and HTML.`
    },
    {
        title: "What's On Hand",
        image: "/images/whats-on-hand.png",
        repo: "https://github.com/edwinalban/Whats_On_Hand_Cocktail_Search",
        deployed: "https://quagsire369.github.io/Whats_On_Hand_Cocktail_Search/",
        icon: "/images/github-mark.png",
        description: `What's On Hand is meant for building/suggesting beverages based on available ingredients. It includes a search 
        function for searching out a beverage by name, as well as entering ingredients that you have on hand for drinks suggestions 
        based on what you've entered. JavaScript/JQuery were used along with the Materialize CSS Framework, CSS, and HTML.`
    },
    {
        title: "Coding Quiz",
        image: "/images/coding-quiz.png",
        repo: "https://github.com/edwinalban/Coding-Quiz-Challenge",
        deployed: "https://edwinalban.github.io/Coding-Quiz-Challenge/index.html",
        icon: "/images/github-mark.png",
        description: `This is a timed coding quiz challenge. I focused on creating elements dynamically in the DOM via JavaScript 
        for conditional rendering based on user interactions. Elements are displayed, or hidden through event listeners and Local Storage is 
        utilized for saving persistent score data. I used JavaScript, CSS, HTML to create the quiz.`
    },
    {
        title: "Note Taker",
        image: "/images/note-taker.png",
        repo: "https://github.com/edwinalban/Note-Taker",
        deployed: "https://basic-note-taker-1ebef20d0f5f.herokuapp.com",
        icon: "/images/github-mark.png",
        description: `The Note Taker is for scheduling appointments in 1-hour increments. HTML elements are created in the DOM via JQuery, 
        based on user input. I used the Bootstrap CSS Framework for styling and the Day.js library for formatting timestamps. HTML 
        elements are conditionally styled based on the local time and Local Storage is utilized to save appointments.`
    },
    {
        title: "Weather Forecast",
        image: "/images/weather-forecast.png",
        repo: "https://github.com/edwinalban/Weather-Forecast",
        deployed: "https://edwinalban.github.io/Weather-Forecast/",
        icon: "/images/github-mark.png",
        description: `This is a five-day weather forecasting app, based on which city a user has searched. 
        JavaScript and JQuery were used to dynamically create HTML elements in the DOM in response to user input for the city. 
        I used the Bootstrap CSS Framework for styling, JavaScript to make API calls and retrieve data, and the Day.js library 
        to convert timestamps.`
    },
    {
        title: "Mt Hermon Cleaning Schedule",
        image: "/images/mt-hermon.png",
        repo: "https://github.com/edwinalban/Mt-Hermon-Room-Manager",
        deployed: "https://still-caverns-65052-3e7b82029131.herokuapp.com/",
        icon: "/images/github-mark.png",
        description: `This is a work-in-progress scheduling app. I am working on converting a Google Docs spreadsheet 
        to an application for Mt Hermon Family Camp using React, React-Bootstrap (CSS Framework), MongoDB, Mongoose,  
        Apollo Express, Node.js, JavaScript, Day.js, and HTML.`
    }
];

export default function Portfolio() {
    return (
        <div>
            <p className="content is-medium has-text-weight-bold">Portfolio</p>
            <br></br>
            <br></br>

            <Project projects={projects} />
        </div>
    )
};