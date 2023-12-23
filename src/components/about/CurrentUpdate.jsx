import React from "react";
import { Container } from "./update";

function CurrentUpdate() {
  return (
    <Container className="update">
      <h2>My Current Update</h2>
      <p>
        Hi there! 👋 I'm currently working as a full-stack software engineer at
        Atlas Computer Technology PLC, located in Addis Ababa, Ethiopia. I'm
        passionate about building innovative solutions and contributing to the
        tech community.
      </p>
      <div>
        <h3>Technologies I'm Currently Using</h3>
        <ul>
          <li>⚙️ Spring Boot</li>
          <li>⚛️ React.js</li>
          <li>🅰️ Angular</li>
          <li>🐘 PostgreSQL</li>
          <li>🚀 GraphQL</li> {/* Additional ingredient */}
          <li>📱 Mobile App Development</li> {/* Additional ingredient */}
        </ul>
      </div>
      <div>
        <h3>Projects and Achievements</h3>
        <p>
          🏆 I recently led a team in developing an innovative project that
          streamlined our internal processes, resulting in increased efficiency
          and productivity.
        </p>
        <p>
          🚀 Proudly part of the Smart Flow family, an AI automation agency
          that's at the forefront of innovation! Currently contributing to the
          development of cutting-edge chatbots and leveraging AI to drive lead
          generation, fuel business growth, and redefine customer support
          services.
        </p>
        <p>
          🌐 Contributing to open-source projects and staying updated with the
          latest industry trends keeps me excited about the ever-evolving world
          of technology.
        </p>
      </div>
      <div>
        <h3>Upcoming Goals (2024)</h3>
        <p>
          🚀 Embarking on an exhilarating journey into the realm of AI and deep
          learning, transcending the boundaries of my current coding prowess.
          Excited to unravel the mysteries of artificial intelligence and
          contribute to groundbreaking advancements in technology.
        </p>
        <p>
          🌌 In 2024, my goal is to dive headfirst into the world of AI,
          exploring the depths of deep learning, understanding neural networks,
          and pushing the boundaries of what's possible in the realm of
          intelligent systems. Here's to a year of learning, growth, and
          pioneering the future of technology!
        </p>
      </div>
    </Container>
  );
}

export default CurrentUpdate;
