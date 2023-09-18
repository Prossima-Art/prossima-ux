import React from "react";

import NavbarComp from "../navbar/navbar";
import Footer from "../footer/footer";
import Awsproject, {
  AwsprojectComp,
  AwsprojectDs,
  AwsprojectImage,
  AwsprojectUsertest,
} from "./awsProject";

const AwsComp = () => {
  return (
    <>
      <NavbarComp />

      <Awsproject />
      <AwsprojectImage />
      <AwsprojectComp />
      <AwsprojectUsertest />
      <AwsprojectDs />

      <div className="d-flex justify-content-center align-items-center mt-5">
        <a
          href="/Projects"
          target="_self"
          rel="noreferrer"
          className="ButtonBack"
        >
          back to projects
        </a>
      </div>
      <Footer />
    </>
  );
};

export default AwsComp;
