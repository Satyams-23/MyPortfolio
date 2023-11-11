import React, { useRef } from 'react'
import "./contact.css"

import twittericon from "../../assets/twitter.png"
import instagramicon from "../../assets/instagram.png"
import linked from "../../assets/linked.png"
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3mptrqp', 'template_gva88n6', form.current, '3-rh-uc65Mqh5z_0Z')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contact" className='contactPage'>


            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to contact me</span>

                <form className="contactForm" onSubmit={sendEmail} ref={form}>
                    <input type="text" className="name" name="from_name" placeholder="Your Name" required />
                    <input type="email" className="email" name="from_email" placeholder="Your Email" required />
                    <textarea name="message" cols="30" rows="5" placeholder="Your Message" className="msg" required></textarea>
                    <button className="submitBtn" type="submit">Submit</button>

                    <div className="links">

                        <a href="https://twitter.com/Satyam___23/" target="_blank" rel="noopener noreferrer">

                            <img src={twittericon} alt="" className="link" />
                        </a>
                        <a href="https://www.instagram.com/satyams__23/" target="_blank" rel="noopener noreferrer">

                            <img src={instagramicon} alt="" className="link" />
                        </a>
                        <a href="https://www.linkedin.com/in/satyam-sharma-7530b9280" target="_blank" rel="noopener noreferrer">

                            <img src={linked} alt="" className="link" />
                        </a>
                    </div>
                </form>
            </div>


        </section>

    )
}

export default Contact
