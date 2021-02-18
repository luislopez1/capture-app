import React from "react";
import home1 from '../img/home1.png';


const AboutSection = () => {
    return(
        <div className = "description">
            <div className = "title">
                <div className="hide">
                    <h2> we work to make</h2>
                </div>
                <div className="hide">
                    <h2> your <span>dreams</span> come</h2>
                </div>
                <div className="hide">
                    <h2> true.</h2>
                </div>
                <p> Contact us for any photography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact us</button>
            </div>
            <div className="image">
                <img src={home1} alt="guy with a camera" />
            </div>
        </div>
    );
};

export default AboutSection;