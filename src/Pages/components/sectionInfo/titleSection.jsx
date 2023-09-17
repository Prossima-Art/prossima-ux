import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './titleSection.css';


export const Arrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.5 4.56006L11.09 5.97006L16.67 11.5601H4.5V13.5601H16.67L11.09 19.1501L12.5 20.5601L20.5 12.5601L12.5 4.56006Z" fill="black"/>
</svg>
    );
}
const TitleSection = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                <h1 className='subtitle d-flex justify-content-center'>Build a digital design system to improve consistency, speed, and scalability.</h1>
                <p className='paragraph'>Prossima UX build on a solid design system foundation, I drive consistency and quality across touchpoints for seamless experiences.</p>
                </Col>
            </Row>
            <Row className='mt-5'>
                <a className='paragraph' href='https://medium.com/design-bootcamp/ui-ux-strategies-in-the-omnichannel-b2b-model-of-the-yupchat-platform-92cb2f4f151?source=your_stories_page-------------------------------------'>
                Case Study: UI/UX strategies for the Omnichannel B2B model of the Yup Chat platform
                <Arrow />
                </a>
            </Row>
        </Container>
    );
}

export default TitleSection;
