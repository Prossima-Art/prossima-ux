import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './recentWork.css';

import BrbProject from './assets/brb-project.png';

import WizProject from './assets/wiz-project.png';

import AwsProject from './assets/aws-project.png';

import YupProject from './assets/yup-project.png';


export const Arrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M8.12498 9.42019L12.005 13.3002L15.885 9.42019C16.275 9.03019 16.905 9.03019 17.295 9.42019C17.685 9.81019 17.685 10.4402 17.295 10.8302L12.705 15.4202C12.315 15.8102 11.685 15.8102 11.295 15.4202L6.70498 10.8302C6.31498 10.4402 6.31498 9.81019 6.70498 9.42019C7.09498 9.04019 7.73498 9.03019 8.12498 9.42019Z" fill="#9E5AFF"/>
      </svg>
      
    );
  };

const ProjectViewbrb = () => {
    return (
        <img src={BrbProject}alt='project' className='projectView' />
    )
}


const ProjectViewWiz = () => {
    return (
        <img src={WizProject}alt='project' className='projectView' />
    )
}

const ProjectViewAws = () => {
    return (
        <img src={AwsProject}alt='project' className='projectView' />
    )
}

const ProjectViewYup = () => {
    return (
        <img src={YupProject}alt='project' className='projectView' />
    )
}



const RecentWork = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col >
                    <h1 className='title'>Recent Work</h1>
                </Col>
            
            </Row>

            <Row  className='mt-5 houveranimation'>
                <a href='/ProjectBrb' className='d-flex justify-content-between' md={12} >
                
                <h1 className='paragraph'>BRB Bank</h1>
                    <Arrow/>
                    <ProjectViewbrb/>
                </a>
            </Row>

            <Row  className='mt-4 houveranimation'>
                <a href='/WizComp' className='d-flex justify-content-between' md={12}>
                <h1 className='paragraph'>Wiz.co</h1>
                    <Arrow/>
                    <ProjectViewWiz/>
                </a>
            </Row>


            <Row  className='mt-4 houveranimation'>
                <a href='/AwsComp' className='d-flex justify-content-between' md={12}>
                <h1 className='paragraph'>Amazon AWS</h1>
                    <Arrow/>
                    <ProjectViewAws/>
                </a>
            </Row>

            <Row  className='mt-4 houveranimation'>
                <a href='/YupComp' className='d-flex justify-content-between' md={12}>
                <h1 className='paragraph'>Yup Chat</h1>
                    <Arrow/>
                    <ProjectViewYup/>
                </a>
            </Row>
        </Container>
    );
}

export default RecentWork;
