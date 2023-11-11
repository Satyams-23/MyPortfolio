import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
// import contactimg from '../../assets/contact.png'
import logo from '../../assets/logo.png';
import menu from "../../assets/menu.png"
// import CVpdf from "../../assets/cv.pdf "



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    // Function to handle the download
    const downloadCV = () => {
        // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
        const cvPath = '../../assets/cv.pdf';

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'Satyam_Sharma_CV.pdf'; // You can change the downloaded file name
        document.body.appendChild(link);

        // Trigger a click on the link to start the download
        link.click();

        // Remove the link element
        document.body.removeChild(link);
    };

    return (

        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' /> {/* Use the logo variable here */}
            <div className="desktopmenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulistitem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulistitem">Projects</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulistitem">Skills</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulistitem">Contact</Link>
                <Link className="desktopmenulistitem" onClick={downloadCV}>CV-Download</Link>

            </div>
            {/* <button className="desktopmenuBtn" onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }}>
                <img src={contactimg} alt="" className="desktopmenuImg" />Contact Me                </button> */}


            <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }} >
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={() => setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={() => setShowMenu(false)}>Contact me</Link>
                <Link className="listitem" onClick={downloadCV}>CV-Download</Link>
            </div>

        </nav>
    )
}


export default Navbar
