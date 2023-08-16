import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      SKILLS & EXPERTISE
    </h1>
    <p className="home-about-body">
      With a solid foundation in
      <i>
        <b className="purple"> C, C++, Java</b>
      </i>
      , I have honed my coding skills to create robust and efficient solutions.
      <br />
      <br />
      Leveraging the <b className="purple">Spring Framework</b>, I specialize in developing backend applications that power modern software systems.
      <br />
      <br />
      My proficiency extends to crafting engaging user experiences using
      <i>
        <b className="purple"> React.js, HTML, and CSS</b>
      </i>
      , ensuring seamless interactions and visually appealing interfaces.
      <br />
      <br />
      I am well-versed in a range of tools, including
      <i>
        <b className="purple"> Kafka, Kibana, Postman, Jira,</b>
      </i>
      and the <b className="purple">Microsoft Office Suite</b>, enabling efficient project management and communication.
      <br />
      <br />
      With a solid grasp of <b className="purple">AWS (Amazon Web Services)</b>, I can design, deploy, and manage cloud-based solutions.
      <br />
      <br />
      Proficient in <b className="purple">Git</b> and <b className="purple">GitHub</b>, I adopt best practices for version control and collaborative development.
      <br />
      <br />
      My database expertise spans
      <i>
        <b className="purple"> MySQL</b>
      </i>
      and
      <i>
        <b className="purple"> MongoDB</b>
      </i>
      , enabling efficient data management and storage solutions.
      <br />
      <br />
      My problem-solving prowess shines through analytical thinking and creative troubleshooting, essential for delivering innovative solutions.
      <br />
      <br />
      With strong communication skills and the ability to excel in an agile environment, I am a collaborative team player who drives project success.
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <p>Email - praveencse041@gmail.com</p>
           
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/praveenkumar-236"
                  target="_blank" 
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/__Praveen__23__"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pk-b87b3b212/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/______praveen________/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
