import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "./assets/video.mp4";
import "./Research.css";

const VideoPlayer = () => {
  return <video src={Video} autoPlay loop muted width={380} />;
};

export const ArrowCurve = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="224"
      height="247"
      viewBox="0 0 224 247"
      fill="none"
    >
      <path
        d="M2.07112 0.00911748C1.03325 -0.0509177 0.143234 0.741766 0.0831989 1.77962C0.0231637 2.81749 0.815848 3.7075 1.8537 3.76754L2.07112 0.00911748ZM208.632 246.043C209.367 246.778 210.558 246.778 211.293 246.043L223.273 234.063C224.008 233.328 224.008 232.137 223.273 231.402C222.537 230.667 221.346 230.667 220.611 231.402L209.962 242.05L199.314 231.402C198.579 230.667 197.387 230.667 196.652 231.402C195.917 232.137 195.917 233.328 196.652 234.063L208.632 246.043ZM1.8537 3.76754C36.1762 5.75293 87.7645 20.1792 130.738 56.996C173.641 93.753 208.08 152.928 208.08 244.712H211.845C211.845 151.862 176.951 91.6309 133.187 54.1371C89.4936 16.7031 37.082 2.03433 2.07112 0.00911748L1.8537 3.76754Z"
        fill="#110E3D"
        fill-opacity="0.1"
      />
    </svg>
  );
};

const Research = () => {
  return (
    <Container className="mt-5 d-flex justify-content-start">
      <Row className="d-flex justify-content-center">
        <Col className="col-md-7 mx-auto mt-2  justify" sx= {3} md={5}>
          <sapn className="greentag">Research & benchmarking</sapn>
          <h4 className="mt-4 textH4">
            Unleashing User-Centric Design: Research, Benchmark, Discover
          </h4>
          <VideoPlayer />
        </Col>
        <Col className="arrowCurve" xs={3}>
          <ArrowCurve />
        </Col>
      </Row>
    </Container>
  );
};

export default Research;
