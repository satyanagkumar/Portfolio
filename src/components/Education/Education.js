import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import schoolImg from "../../Assets/12th.jpg";
import bachelorsImg from "../../Assets/Bachelor.jpg";
import mastersImg from "../../Assets/Masters.png";

function Education() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a quick overview of my academic background.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schoolImg}
              isBlog={false}
              title="12th Grade - [School Name]"
              description="Completed 12th Grade with a focus on Math, Physics, and Chemistry. [Add your year and any honors if needed]"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bachelorsImg}
              isBlog={false}
              title="Bachelor of Technology - [KL University]"
              description="Graduated with a major in [Your Major] in [Year]. Participated in technical clubs and academic projects."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mastersImg}
              isBlog={false}
              title="Master of Science - [Saint Louis University]"
              description="Completed Master's in [Your Major] from [University Name] in [Year]. Specialized in [any specialization or thesis topic]."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
