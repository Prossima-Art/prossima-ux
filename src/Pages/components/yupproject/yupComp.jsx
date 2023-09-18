import React from 'react';

import NavbarComp from '../navbar/navbar';
import Footer from '../footer/footer';
import Yupproject, { YupprojectComp, YupprojectDs, YupprojectImage, YupprojectUserFlow, YupprojectUsertest } from './yupProject';





const YupComp = () => {
    return (
        <>
        <NavbarComp />

        <Yupproject/>
        <YupprojectImage/>
        <YupprojectComp/>
        <YupprojectUserFlow/>
        <YupprojectUsertest/>
        <YupprojectDs/>

        <div className='d-flex justify-content-center align-items-center mt-5'><a href="/Projects" target="_self" rel="noreferrer" className='ButtonBack'>back to projects</a>
            </div>
        <Footer />
        </>
    );
}

export default YupComp;
