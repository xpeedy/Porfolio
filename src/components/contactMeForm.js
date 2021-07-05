import React, { useState } from "react";
import "./contactForm.css"


const ContactForm = () => {

    const [values, setValues] = useState({email:"",message:""})

    const handleChanges = (e) => {
        setValues({...values,[e.target.name]: e.target.value})
        console.log(values)
    }

    const handleSubmit = () => {

    }

    return(
        <form onSubmit={handleSubmit} className="contact-form">
            <h3 className="email-h3">Email</h3>
            <label className="email-label">
                <input className="email-input"
                name="email"
                type="text"
                value={values.email}
                onChange={handleChanges}
                />
            </label>
            <br/>
            <h3>Message</h3>
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
