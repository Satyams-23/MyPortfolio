import React, { useState, useRef } from 'react'
import "./contact.css"

import twittericon from "../../assets/twitter.png"
import instagramicon from "../../assets/instagram.png"
import linked from "../../assets/linked.png"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [desc, setdesc] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const data = { name, email, desc };



        emailjs.sendForm('service_3mptrqp', 'template_gva88n6', form.current, '3-rh-uc65Mqh5z_0Z').then((response) => {
            console.log('Email sent successfully:', response);
            alert("Thanks for contacting us");
            setname('');
            setdesc('');
            setemail('');
        })
            .catch((error) => {
                console.error('Email send failed:', error);
            });
        ;
    }
    return (
        <section id="contact" className='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to contact me</span>

                <form className="contactForm" onSubmit={sendEmail} ref={form}>
                    <input value={name} onChange={(e) => setname(e.target.value)} type="text" className="name" name="from_name" placeholder="Your Name" required />
                    <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className="email" name="from_email" placeholder="Your Email" required />
                    <textarea value={desc} onChange={(e) => setdesc(e.target.value)} name="message" cols="30" rows="5" placeholder="Your Message" className="msg" required></textarea>
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
