import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import expimage1 from "../../Assets/Projects/expimage1.jpg";
import expimage2 from "../../Assets/Projects/expimg2.jpg";
import expimage3 from "../../Assets/Projects/expimg3.jpg";
import expimage4 from "../../Assets/Projects/expimg4.jpg";
import expimage5 from "../../Assets/Projects/expimg5.jpg";

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
              imgPath={expimage1}
              isBlog={false}
              title="AIDENAI"
              description="Senior Full Stack Developer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expimage2}
              isBlog={false}
              title="Freddie Mac"
              description="Full Stack Developer"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expimage3}
              isBlog={false}
              title="Arvest Bank"
              description="Full Stack Developer"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expimage4}
              isBlog={false}
              title="Office Depot"
              description= "Full Stack Developer"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expimage5}
              isBlog={false}
              title="Zivame"
              description="Java Developer Intern"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
