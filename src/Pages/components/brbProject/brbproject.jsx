import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./brbproject.css";

import MockupBrb from "./assets/mockupBrb.png";
import BrbComponents from "./assets/brbComponents.png";
import BrbUserFlow from "./assets/brbUserFlow.png";
import BrbUserTest from "./assets/brbUserTest.png";
import BrbDs from "./assets/brbDs.png";

const Brbproject = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row>
        <Col
          className=" mx-auto mt-2 d-flex flex-column justify-content-center align-items-center"
          md={12}
        >
          <sapn className="greentag">UI/UX Design- Brazil- 2022</sapn>
          <h1 className="mt-4">BRB Bank</h1>
          <p className="mt-4 d-flex flex-column justify-content-center align-items-center paragraph">
            Designed and executed user research to identify opportunities to
            improve the user experience for the insurance sales platform. Worked
            closely with the development team to implement effective and
            efficient design solutions. Conducted usability testing to validate
            design solutions and provide useful feedback for improvements.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Brbproject;



export const BrbprojectImage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5">
        <Col md={12}>
          <img src={MockupBrb} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};


export const BrbprojectComp = () => {
    return (
      <Container className="d-flex justify-content-center align-items-center ">
        <Row className="mt-5">
          <Col md={12}>
            <img src={BrbComponents} alt="brb" className="ImgSize" />
          </Col>
        </Row>
      </Container>
    );
  };


  export const BrbprojectUserFlow = () => {
    return (
      <Container className="d-flex justify-content-center align-items-center ">
        <Row className="mt-5">
          <Col md={12}>
            <img src={BrbUserFlow} alt="brb" className="ImgSize" />
          </Col>
        </Row>
      </Container>
    );
  };


  export const BrbprojectUsertest = () => {
    return (
      <Container className="d-flex justify-content-center align-items-center ">
        <Row className="mt-5 ">
            
          <Col md={12}>
            <img src={BrbUserTest} alt="brb" className="ImgSize" />
          </Col>
        </Row>
      </Container>
    );
  };


  export const BrbprojectDs = () => {
    return (
      <Container className="d-flex justify-content-center align-items-center ">
        <Row className="mt-5 ">
            
          <Col md={12}>
            <img src={BrbDs} alt="brb" className="ImgSize" />
          </Col>
        </Row>
      </Container>
    );
  };