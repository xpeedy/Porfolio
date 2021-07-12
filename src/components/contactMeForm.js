import React, { useState } from "react";
import "./contactForm.css"


const ContactForm = () => {

    const [values, setValues] = useState({name:"",email:"",message:""})

    const handleChanges = (e) => {
        setValues({...values,[e.target.name]: e.target.value})
        console.log(values)
    }

    const handleSubmit = () => {

    }

    return(
        <form onSubmit={handleSubmit} className="contact-form">
            <h2 className="get-in-touch">Get in touch</h2>
            <div className="info-container">
            <label className="name-label">
            <h3 className="name-h3">Name</h3>
                <input className="name-input"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChanges}
                />
            </label>
            <label className="email-label">
            <h3 className="email-h3">Email</h3>
                <input className="email-input"
                name="email"
                type="text"
                value={values.email}
                onChange={handleChanges}
                />
            </label>
            </div>
            <br/>
            <h3 className="message-h3">Message</h3>
            <label className="message-label">
                <textarea className="message-input"
                name="message"
                type="text-area"
                value={values.message}
                onChange={handleChanges}
                />
            </label>
        </form>
    )
}

export default ContactForm;
