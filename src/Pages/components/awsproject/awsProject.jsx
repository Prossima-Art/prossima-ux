import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./awsProject.css";

import MockupAws from "./assets/mockupAws.png";
import AwsComponents from "./assets/AwsComponents.png";
import AwsUserTest from "./assets/awsUserTest.png";
import AwsDs from "./assets/awsDS.png";

const Awsproject = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row>
        <Col
          className=" mx-auto mt-2 d-flex flex-column justify-content-center align-items-center"
          md={12}
        >
          <sapn className="greentag">UI/UX Design- Brazil- 2022</sapn>
          <h1 className="mt-4">Amazon AWS</h1>
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

export default Awsproject;

export const AwsprojectImage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5">
        <Col md={12}>
          <img src={MockupAws} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};

export const AwsprojectComp = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5">
        <Col md={12}>
          <img src={AwsComponents} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};



export const AwsprojectUsertest = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5 ">
        <Col md={12}>
          <img src={AwsUserTest} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};

export const AwsprojectDs = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5 ">
        <Col md={12}>
          <img src={AwsDs} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};
