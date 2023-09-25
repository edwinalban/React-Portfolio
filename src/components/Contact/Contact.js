import React, { useState, } from "react";
import "./Contact.css";
import validateEmail from "../../utils/validateEmail";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    const handleNameChange = (e) => {
        const { name, value } = e.target;

        if (!value) {
            setNameError("This field is required. Please enter a name.");
        }

        if (value) {
            setNameError("");
        }

        return name === setName(value);
    }

    const handleEmailChange = (e) => {
        const { name, value } = e.target;

        const isValid = validateEmail(value);

        if (!value) {
            setEmailError("This field is required. Please enter an email.");
        } else if (!isValid) {
            setEmailError("This is not a valid email address.");
        } else {
            setEmailError("");
        }

        return name === setEmail(value);
    }

    const handleMessageChange = (e) => {
        const { name, value } = e.target;

        if (!value) {
            setMessageError("This field is required. Please enter a message.");
        }

        if (value) {
            setMessageError("");
        }

        return name === setMessage(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setName("");
        setEmail("");
        setMessage("");
        setNameError("");
        setEmailError("");
        setMessageError("");
    }

    return (
        <section>
            <p className="has-text-centered has-text-weight-semibold">If you would like to contact me, please fill out the form below and I will be in touch soon!</p>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="Your name here"
                        value={name}
                        name="name"
                        onBlur={handleNameChange}
                        onChange={handleNameChange}
                    />
                </div>
            </div >

            {nameError && (
                <div>
                    <p className="is-italic has-text-weight-bold">{nameError}</p>
                </div>
            )}

            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input
                        className="input"
                        type="email"
                        placeholder="email@email.com"
                        value={email}
                        name="email"
                        onBlur={handleEmailChange}
                        onChange={handleEmailChange}
                    />
                </div>
            </div>

            {emailError && (
                <div>
                    <p className="is-italic has-text-weight-bold">{emailError}</p>
                </div>
            )}

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea
                        className="textarea"
                        placeholder="Feel free to leave me a message here!"
                        value={message}
                        name="message"
                        onBlur={handleMessageChange}
                        onChange={handleMessageChange}>
                    </textarea>
                </div>
            </div>

            {messageError && (
                <div>
                    <p className="is-italic has-text-weight-bold">{messageError}</p>
                </div>
            )}

            <button
                className="button is-normal is-responsive"
                onClick={handleSubmit}>
                Submit
            </button>
        </section>
    )
};
