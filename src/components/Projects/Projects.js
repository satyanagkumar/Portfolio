import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Past <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Abc Full stack Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis est quis purus sodales efficitur. Vestibulum quis nulla congue."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Abc Full stack Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis est quis purus sodales efficitur. Vestibulum quis nulla congue."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Abc Full stack Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis est quis purus sodales efficitur. Vestibulum quis nulla congue"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Abc Full stack Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis est quis purus sodales efficitur. Vestibulum quis nulla congue"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Abc Full stack Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis est quis purus sodales efficitur. Vestibulum quis nulla congue."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
