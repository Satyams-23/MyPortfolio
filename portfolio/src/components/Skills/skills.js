import React from "react";
import "./skills.css";


const skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">My Projects</span>
            <span className="skillDesc">
                I am a skilled and passionate web developer with experience in creating
                visually apppealing and user-friendly websites. I have a
                understanding of backend side also and a keen eye for detail. I am proficient in
                Frontend and Backend.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Blogs Website</h2>
                        <p>This is blogs website. Just try how to use some feature of react.  </p>

                        <a href="https://blogswebsite.vercel.app/" class="learn-more-link">Click to visit
                            <svg class="arrow-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Restaurant Menu</h2>
                        <p>Our restaurant menu website, beautifully &nbsp;crafted with React to enhance your skills.   </p>
                        <a href="https://restaurant-23.vercel.app/" class="learn-more-link">Click to visit
                            <svg class="arrow-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>CV-Generator </h2>
                        <p>
                            Creating your resume with our well designed resume templates.
                        </p>
                        <a href="https://expertcv.netlify.app/" class="learn-more-link">Click to visit
                            <svg class="arrow-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>


            </div>
            <button onClick={() => {
                window.open('https://github.com/Satyams-23/', '_blank');;
            }} className="workBtn">Click here to more projects</button>
        </section >
    );
};

export default skills;
