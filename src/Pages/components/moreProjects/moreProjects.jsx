import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MediumLogo from "./assets/mediumLogo.png";
import "./moreProjects.css";

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 23"
      fill="none"
    >
      <path
        d="M6.5 4.40625V6.40625H15.09L5.5 15.9963L6.91 17.4062L16.5 7.81625V16.4062H18.5V4.40625H6.5Z"
        fill="#4E5079"
      />
    </svg>
  );
};

const Button = () => {
  return (
    <button className="button">
      <Arrow />
      <span className="buttonText">Go to paper</span>
    </button>
  );
};

export const PaperComposition = () => {
  return (
    <Container className="PaperComp">
      <Row className="boxShadow p-2">
        <Col className="mediumLogo " xs={1}>
          <img
            className="mediumLogo"
            src={MediumLogo}
            width={33}
            height={34}
            alt="medium logo"
          />
        </Col>
        <Col className="boxSize">
          <p className="paragrafoBlack">
            UI/UX strategies for the Omnichannel B2B model of the Yup Chat
            platform
          </p>
          <p className="smalltext">
            Greater efficiency and autonomy in the customer service sector
          </p>
        </Col>
      </Row>
    </Container>
  );
};

const MoreProjects = () => {
  return (
    <Container className="moreProjectsComp mx-auto py-5">
      <Row>
        <Col sm={12} md={8} className="my-auto">
          {" "}
          <PaperComposition />
        </Col>
        <Col className=" mx-auto col-md-4 col-sm-8">
          <h1 className="title">More projects</h1>
          <p className="smalltext">Research and dissemination</p>
          <Button />
        </Col>
      </Row>
    </Container>
  );
};

export default MoreProjects;
