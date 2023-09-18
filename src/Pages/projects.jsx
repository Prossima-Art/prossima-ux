import NavbarComp from "./components/navbar/navbar";

import Footer from "./components/footer/footer";
import { Col, Container, Row } from "react-bootstrap";
import "./projects.css";

function Projects() {
  return (
    <>
      <NavbarComp />

      <Container className="ProjectImgBg">
        <Row className="mt-5">
          <Col className="d-flex justify-content-center" md={12}>
            <a href="/YupComp" className="titleProjects">Yup Chat</a>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="d-flex justify-content-center" md={12}>
            <a href="/ProjectBrb" className="titleProjects">
              BRB Bank
            </a>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="d-flex justify-content-center" md={12}>
            <a href="/WizComp" className="titleProjects">Wiz.co</a>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="d-flex justify-content-center" md={12}>
            <a href="/AwsComp" className="titleProjects">Amazon AWS</a>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="d-flex justify-content-center" md={12}>
            <a href="/DonPeComp" className="titleProjects">DonPé Restaurant</a>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Projects;
