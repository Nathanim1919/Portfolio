import React, { useEffect } from "react";
import { AboutStyle } from "./aboutStyle";
import AboutImg from "../../assets/about.jpg";
import { FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import AboutImage from '../../assets/images/about.png'

import {
  BiLogoFlask,
  BiLogoDjango,
  BiLogoMongodb,
  BiLogoCss3,
} from "react-icons/bi";
import { DiJavascript1, DiMysql } from "react-icons/di";
import Aos from "aos";
import "aos/dist/aos.css";


function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const handleDownload = () => {
    // Define the path to your CV file
    const cvFilePath = "./cv.pdf"; // Update the path accordingly

    // Create a temporary anchor element to trigger the download
    const link = document.createElement("a");
    link.href = cvFilePath;
    link.download = "./cv.pdf"; // Set the desired download filename
    link.click();

    window.open("/Portfolio/cv.pdf", "_blank");
  };

  return (
    <>
      <AboutStyle>
      <div className='bottonDesign'>

</div>
        <div className="skills" data-aos="zoom-in">
          <img src={AboutImage} alt="" />
        </div>
        <div className="about-me" data-aos="zoom-in">
          <h1>About me</h1>
          <h2>Hello, I'am Nathanim Tadele </h2>
          <p className="about">
            I 'm a full-stack software developer with a passion for JavaScript
            and Python. My expertise spans front-end and back-end development,
            creating user-friendly interfaces, and building scalable server-side
            applications. I thrive on solving complex problems, embrace
            continuous learning, and collaborate effectively in team
            environments. Let's connect and explore how we can work together on
            exciting projects.
          </p>
          <button onClick={handleDownload}>CV here</button>
        </div>
      </AboutStyle>
    </>
  );
}

export default About;
