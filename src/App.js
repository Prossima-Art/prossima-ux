import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Pages/components/navbar/navbar";

import Footer from "./Pages/components/footer/footer";
import Hero from "./Pages/components/hero/hero";
import TitleSection from "./Pages/components/sectionInfo/titleSection";
import Research, { Prototyping, Userjounery, Usertesting,  } from "./Pages/components/itensSection/Research";
import RecentWork from "./Pages/components/recentWork/recentWork";
import MoreProjects from "./Pages/components/moreProjects/moreProjects";



function App() {
  return (
    <>
      <NavbarComp  />
      <Hero/>
      <TitleSection/>
      <Research/>
      <Userjounery/>
      <Prototyping/>
      <Usertesting/>
      <RecentWork/>
      <MoreProjects/>
      <Footer />
    </>
  );
}

export default App;
