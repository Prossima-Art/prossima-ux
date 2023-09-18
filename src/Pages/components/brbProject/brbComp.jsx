import React from 'react';
import Brbproject, { BrbprojectComp, BrbprojectDs, BrbprojectImage, BrbprojectUserFlow, BrbprojectUsertest } from './brbproject';
import NavbarComp from '../navbar/navbar';
import Footer from '../footer/footer';
import './brbproject.css';





const BrbComp = () => {
    return (
        <>
        <NavbarComp />

        <Brbproject/>
        <BrbprojectImage/>
        <BrbprojectComp/>
        <BrbprojectUserFlow/>
        <BrbprojectUsertest/>
        <BrbprojectDs/>

        <div className='d-flex justify-content-center align-items-center mt-5'><a href="/Projects" target="_self" rel="noreferrer" className='ButtonBack'>back to projects</a>
            </div>
        <Footer />
        </>
    );
}

export default BrbComp;
