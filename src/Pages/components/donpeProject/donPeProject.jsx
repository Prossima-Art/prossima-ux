import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./donPeProject.css";

import MockupDonPe from "./assets/mockupDonPe.png";
import DonPeComponents from "./assets/donPeComponents.png";

import DonPeUserTest from "./assets/donPeUserTest.png";
import yupDs from "./assets/yupDS.png";

const DonPeproject = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row>
        <Col
          className=" mx-auto mt-2 d-flex flex-column justify-content-center align-items-center"
          md={12}
        >
          <sapn className="greentag">UI/UX Design- Spain- 2020</sapn>
          <h1 className="mt-4">DonPe Restaurant</h1>
          <p className="mt-4 d-flex flex-column justify-content-center align-items-center paragraph">
            The UI/UX design project for the DonPé restaurant in Spain aimed to
            create a pleasant and integrated digital experience for customers.
            By understanding DonPé's unique brand identity and values, the
            design and development team created an intuitive and visually
            appealing user interface that reflects the restaurant's ambience and
            style. 
            <br/>
            The project began with thorough research and analysis of user
            behaviors, preferences and expectations in the context of restaurant
            applications. This research guided design decisions and helped
            create a user-centric interface that prioritized ease of use and
            efficiency. The design team will collaborate closely with DonPé
            stakeholders to gather valuable insights and align the digital
            experience with the restaurant's goals. Through wireframing and
            prototyping, different design concepts will be explored and refined
            to ensure a seamless navigation flow and intuitive interactions.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default DonPeproject;

export const DonPeprojectImage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5">
        <Col md={12}>
          <img src={MockupDonPe} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};

export const DonPeprojectComp = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5">
        <Col md={12}>
          <img src={DonPeComponents} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};

export const DonPeprojectUsertest = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5 ">
        <Col md={12}>
          <img src={DonPeUserTest} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};

export const DonPeprojectDs = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Row className="mt-5 ">
        <Col md={12}>
          <img src={yupDs} alt="brb" className="ImgSize" />
        </Col>
      </Row>
    </Container>
  );
};
