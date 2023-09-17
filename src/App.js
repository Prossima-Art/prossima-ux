import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Pages/components/navbar/navbar";

import Footer from "./Pages/components/footer/footer";
import Hero from "./Pages/components/hero/hero";
import TitleSection from "./Pages/components/sectionInfo/titleSection";
import Research from "./Pages/components/itensSection/Research";

function App() {
  return (
    <>
      <NavbarComp />
      <Hero/>
      <TitleSection/>
      <Research/>
      <Footer />
    </>
  );
}

export default App;
