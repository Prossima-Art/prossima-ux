import React from 'react';

import NavbarComp from '../navbar/navbar';
import Footer from '../footer/footer';
import Wizproject, { WizprojectComp, WizprojectDs, WizprojectImage, WizprojectUserFlow, WizprojectUsertest } from './wizProject';





const WizComp = () => {
    return (
        <>
        <NavbarComp />

        <Wizproject/>
        <WizprojectImage/>
        <WizprojectComp/>
        <WizprojectUserFlow/>
        <WizprojectUsertest/>
        <WizprojectDs/>

        <div className='d-flex justify-content-center align-items-center mt-5'><a href="/Projects" target="_self" rel="noreferrer" className='ButtonBack'>back to projects</a>
            </div>
        <Footer />
        </>
    );
}

export default WizComp;
