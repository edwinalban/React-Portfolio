import React from "react";

export default function About() {
    return (
        <div>
            <div>
                <p className="content is-medium">Business Operations Analyst, Aspiring Web Developer, and
                    BBQ aficianado</p>
            </div>
            <img className="profile" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Edwin Alban" />
            <p className="content">
                I have worked with multiple lenders in various departments. I have done everything from
                Collections to Data Analysis for Consumer Loans, Mortgage, and Credit Cards. The steps 
                along the way include Data Entry, working as a Team Lead and Manager, setting up and redisclosing 
                Mortgage Loans, and functioning as a Third-Party Letter Vendor Manager.
                <br></br>
                <br></br>
                I used to be a pitmaster for a BBQ restaraunt, have worked in several kitchens, and now it's time
                for something new! I am happiest when I am learning something new and pushing myself to improve,
                regardless of context, and Web Development seems like an endless resource for growth.
            </p>
        </div>
    )
};