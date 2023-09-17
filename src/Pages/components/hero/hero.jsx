import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './hero.css'
import Painel from './assets/painel.png';

const Hero = () => {
    return (
        <Container className='heroComp mt-5'>
            <Row  >
                <Col className="col-md-7 mx-auto mt-2">
                <sapn className='greentag'>UI/UX Solutions for Business</sapn>
                    <h1>Turn your Business vision into Surprising Experiences</h1>
                </Col>
            </Row>
            <Row>
                <Col className="mx-auto mt-5">
                    <img src={Painel} alt="painel" /></Col>
                    <p className='textinfoPainel'>Build exceptional experiences with UI and usability design, driven by metrics and accurate testing.</p>
                    </Row>
        </Container>
    );
}

export default Hero;
