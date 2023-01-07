import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiAws,
  DiJava,
  DiMongodb,
  DiGit,
  DiGithub,
  DiMysql,
  
 
 
} from "react-icons/di";
import {
  SiSpringboot,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={3} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/* <Col xs={3} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col> */}
      <Col xs={3} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col> */}
      <Col xs={3} md={2} className="tech-icons">
        <DiAws />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiGithub />
      </Col>
      
    </Row>
  );
}

export default Techstack;
