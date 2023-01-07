import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiIbm,
} from "react-icons/si";
import {
  DiEclipse,
  DiVisualstudio,
  DiDocker,
  DiJira,
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={2} className="tech-icons">
        <DiEclipse />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiIbm />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      {/* <Col xs={3} md={2} className="tech-icons">
        <DiGit/>
      </Col> */}
      <Col xs={3} md={2} className="tech-icons">
        <DiJira />
      </Col>
    </Row>
  );
}

export default Toolstack;
