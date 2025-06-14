import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Venkata Satya Siva</span>,
           from <span className="purple">India.</span>
            <br />I am a passionate <span className="purple">Software Developer</span> with a keen interest in building products that make a difference.
            I have completed my masters in computer science from
            <span className="purple"> Saint Louis University Missouri</span>.
            <br />
            <br />
            Apart from Developing Products, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Venkata Satya Siva</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
