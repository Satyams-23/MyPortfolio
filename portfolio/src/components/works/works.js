import React from 'react'
import react from "../../assets/react.png"
import express from "../../assets/express.png"
import node from "../../assets/node.png"
import mongodb from "../../assets/mongodb.png"
import html from "../../assets/html.png"
import next from "../../assets/next.png"
import "../works/works.css"

const works = () => {
    return (
        <section id='works'>
            <h1 className="workstitle">My  Skills</h1>
            <span className="workDesc"></span>
            <div className="workImgs">
                <img src={react} className='workImg react' alt="" />
                <img src={next} className='workImg' alt="" />
                <img src={node} className='workImg' alt="" />
                <img src={express} className='workImg' alt="" />
                <img src={mongodb} className='workImg' alt="" />
                <img src={html} className='workImg' alt="" />
            </div>


        </section>
    )
}

export default works
