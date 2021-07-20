import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contactForm.css";


const ContactForm = () => {

    const [values, setValues] = useState({name:"",email:"",message:""});
    const [sent, setSent] = useState(false)

    const handleChanges = (e) => {
        setValues({...values,[e.target.name]: e.target.value})
    };

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_f4ahkcu', 'template_0o4u4xb', e.target, 'user_Q8V2jLf2cXpclDzP5jPEC')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setValues({name:"",email:"",message:""})
          setSent(true)
    }

    return(
        <form onSubmit={sendEmail} className="contact-form">
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
            <br />
            {sent ? <div className="popUp">
                <div className="popUp-content">
                <h3 className="message-response">message sent!<br/>
                Thank you! I will contact you as soon as possible.</h3>
                <p className="close-button" onClick={() => {setSent(false)}}>x</p>
                </div>
            </div> : ""}
            <button className="send-button">Send</button>
        </form>
    )
}

export default ContactForm;
