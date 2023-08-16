import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Resume from "../Education/Resume";
 
function About() {
  return (
    <section className="about-section">
      <Particle />
      <Container>
        <Row className="about-row">
          <Col md={7} className="about-content">
            <h1 className="about-heading">
              Know Who <strong className="purple">I Am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className="about-image">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I Use
        </h1>
        <Toolstack />
        <Resume />
        <Github />
      </Container>
    </section>
  );
}

export default About;
