import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./yupProject.css";

import MockupYup from "./assets/mockupYup.png";
import YupComponents from "./assets/yupComponents.png";
import YupUserFlow from "./assets/yupUserFlow.png";
import YupUserTest from "./assets/yupUserTest.png";
import YupDs from "./assets/yupDS.png";

const Yupproject = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row>
        <Col
          className=" mx-auto mt-2 d-flex flex-column justify-content-center align-items-center"
          md={12}
        >
          <span className="greentag">UI/UX Design- Brazil- 2022</span>
          <h1 className="mt-4">Yup Chat</h1>
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

export default Yupproject;

export const YupprojectImage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5">
        <Col md={12}>
          <img src={MockupYup} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};

export const YupprojectComp = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5">
        <Col md={12}>
          <img src={YupComponents} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};

export const YupprojectUserFlow = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5">
        <Col md={12}>
          <img src={YupUserFlow} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};

export const YupprojectUsertest = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5 ">
        <Col md={12}>
          <img src={YupUserTest} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};

export const YupprojectDs = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5 ">
        <Col md={12}>
          <img src={YupDs} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};
