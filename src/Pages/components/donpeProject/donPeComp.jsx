import React from 'react';

import NavbarComp from '../navbar/navbar';
import Footer from '../footer/footer';
import DonPeproject, { DonPeprojectComp, DonPeprojectDs, DonPeprojectImage, DonPeprojectUsertest } from './donPeProject';






const DonPeComp = () => {
    return (
        <>
        <NavbarComp />

        <DonPeproject/>
        <DonPeprojectImage/>
        <DonPeprojectComp/>
        
        <DonPeprojectUsertest/>
        <DonPeprojectDs/>

        <div className='d-flex justify-content-center align-items-center mt-5'><a href="/Projects" target="_self" rel="noreferrer" className='ButtonBack'>back to projects</a>
            </div>
        <Footer />
        </>
    );
}

export default DonPeComp;
