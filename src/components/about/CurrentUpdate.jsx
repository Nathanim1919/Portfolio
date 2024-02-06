import React ,{useEffect}from "react";
import { Container } from "./update";
import { Link } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'

function CurrentUpdate() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])
  return (
    <Container className="update">
      <h2>My Current Update</h2>
      <p>
        Hi there! 👋 I'm currently working as a full-stack software engineer at
        Atlas Computer Technology PLC, located in Addis Ababa, Ethiopia. I'm
         passionate about building innovative solutions and contributing to the
        tech community.
      </p>
      <div  data-aos="fade-up">
        <h3>Technologies I'm Currently Using</h3>
        <ul>
          <li>⚙️ Spring Boot</li>
          <li>⚛️ React.js</li>
          <li>🅰️ Angular</li>
          <li>🐘 PostgreSQL</li>
          <li>🚀 GraphQL</li> {/* Additional ingredient */}
        </ul>
      </div>
      <div  data-aos="fade-up">
        <h3>Projects and Achievements</h3>
        <p>
          🚀 Proudly part of the Smart Flow family, an AI automation agency
          that's at the forefront of innovation! Currently contributing to the
          development of cutting-edge chatbots and leveraging AI to drive lead
          generation, fuel business growth, and redefine customer support
          services.
          <Link
            to={"https://nathanim1919.github.io/SmartFlow/"}
            target="_blank"
          >
            CEO of Smart-Flow
          </Link>
        </p>
        <p>
          🌐 Contributing to open-source projects and staying updated with the
          latest industry trends keeps me excited about the ever-evolving world
          of technology.
        </p>
      </div>
      <div className="calltoaction"  data-aos="fade-up">
        <p>
          ✉️ Reach out and let's create something amazing. Describe your
          business, share your dreams, and I'll bring the tech magic to make it
          happen. I know myself, and I know innovation.
        </p>
        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>Get in touch.</Link>
      </div>
    </Container>
  );
}

export default CurrentUpdate;
