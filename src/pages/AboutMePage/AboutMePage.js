import React, { Component } from "react";

import "./AboutMePage.css";

class AboutMePage extends Component {

  render() {
    return (
      <div className="AboutMe">
        <div className="profilePicDiv">
          <img className="profilePic" alt="DanielLuna" src="https://avatars0.githubusercontent.com/u/22847879?s=460&v=4"/>
        </div>
        <h5 className="text">
        I'm a 21 year old programmer with a passion for learning and problem solving. I love to do projects so that I can constantly challenge myself and push my abilities forward. I like to build and design, In highschool I was more focused on physical building and learned how to 3D model prototypes in an Engineering Design course. I also worked with my hands and built a robot for our schools robotics team. Although building physical objects was fun, I was really interested in the digital world, the new frontier of engineering and design. Learning to code was perhaps one of the most challenging tasks I undertook but it is incredibly rewarding. Programming allows me not only to build, it allows me to design, improve, and bring to life ideas. It's so gratifying to be able to understand how all the components of extensive network of code form a functional program.
        </h5>
      </div>
    );
  };
};

export default AboutMePage;