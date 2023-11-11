import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import btnimg from '../../assets/hireme.png'

const intro = () => {
    return (
        <section id="intro">
            <div className="introcontent">
                <span className="hello">Hello</span>
                <span className="introtext">    I'm <span className="introname"> Satyam</span> </span>
                <span className='student'>Student  |   Full-stack Developer </span>
                <p className="intropara">I'm passionate full-stack developer on a mission to turn ideas into powerful, user-friendly software solutions.<br />  With a strong foundation in both front-end and back-end technologies. </p>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}><button className="btn"><img src={btnimg} alt="Hire Me" className='btnimg' />Hire Me</button></Link>

                {/* <img src={bg} alt="profile" className="bg" /> */}
            </div>
        </section>
    )
}

export default intro
