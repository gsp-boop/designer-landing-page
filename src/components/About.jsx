import React from "react";
import { aboutCard } from "../js/about";
import "../styles/about.css";

const About = () => {
  return (
    <div id="about-section" className="about-section">
      <h2 className="about-header">
        About
      </h2>
      <div className="flex-container">
        {aboutCard.map((item, i) => (
          <div className="card-container">
            <div className="img-container">
              <div style={{background: `url(${item.img}) no-repeat center bottom`}} className="polaroid-img"></div>
            </div>

            <div className="body-wrapper">
              <div className="card-body">
                <div className="card-content">
                  <div className="card-header">
                    <h2>{item.title}</h2>
                  </div>
                  <p className='card-p'>{item.desc1}
                    <p className='card-p'>
                      {item.desc2}
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
