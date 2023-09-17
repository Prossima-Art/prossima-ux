import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./hero.css";
import Painel from "./assets/painel.png";

import { IconData, IconShield, IconLightBulb, IconBuildCircle } from "./icons";

const Hero = () => {
  return (
    <Container className="heroComp mt-5">
      <Row>
        <Col className="col-md-7 mx-auto mt-2">
          <sapn className="greentag">UI/UX Solutions for Business</sapn>
          <h1 className="mt-4">Turn your Business vision into Surprising Experiences</h1>
        </Col>
      </Row>

      <Row className=" col-md-7  mx-auto mt-5 rowComp">
        <Col className="TagDecoration" >
          {" "}
          <IconLightBulb />
          UX Design
        </Col>
        <Col className="TagDecoration">
          <IconShield />
          Prototyping
        </Col>
        <Col className="TagDecoration">
          <IconBuildCircle />
          User testing
        </Col>
        <Col className="TagDecoration">
          <IconData />
          Metrics
        </Col>
      </Row>

      <Row>
        <Col className="mx-auto mt-5" >
          <img src={Painel} className="imageSize" alt="painel" />
        </Col>
        <p className="textinfoPainel">
          Build exceptional experiences with UI and usability design, driven by
          metrics and accurate testing.
        </p>
      </Row>
    </Container>
  );
};

export default Hero;
