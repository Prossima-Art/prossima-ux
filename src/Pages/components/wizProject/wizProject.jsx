import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./wizProject.css";

import MockupWiz from "./assets/mockupWiz.png";
import WizComponents from "./assets/wizComponents.png";
import WizUserFlow from "./assets/wizUserFlow.png";
import WizUserTest from "./assets/wizUserTest.png";
import WizDs from "./assets/wizDS.png";

const Wizproject = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row>
        <Col
          className=" mx-auto mt-2 d-flex flex-column justify-content-center align-items-center"
          md={12}
        >
          <sapn className="greentag">UI/UX Design- Brazil- 2022</sapn>
          <h1 className="mt-4">Wiz.co</h1>
          <p className="mt-4 d-flex flex-column justify-content-center align-items-center paragraph">
            Leading the way in user research and design, we craft top-notch
            digital solutions that perfectly align with user and business
            requirements. Our expertise includes creating wireframes,
            interactive prototypes, user flows, conducting usability testing,
            and delivering exceptional UI designs for web and mobile
            applications.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Wizproject;

export const WizprojectImage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5">
        <Col md={12}>
          <img src={MockupWiz} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};

export const WizprojectComp = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5">
        <Col md={12}>
          <img src={WizComponents} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};

export const WizprojectUserFlow = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5">
        <Col md={12}>
          <img src={WizUserFlow} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};

export const WizprojectUsertest = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5 ">
        <Col md={12}>
          <img src={WizUserTest} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};

export const WizprojectDs = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5 ">
        <Col md={12}>
          <img src={WizDs} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};
