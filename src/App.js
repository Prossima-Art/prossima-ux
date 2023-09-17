import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Pages/components/navbar/navbar";

import Footer from "./Pages/components/footer/footer";
import Hero from "./Pages/components/hero/hero";

function App() {
  return (
    <>
      <NavbarComp />
      <Hero/>
      <Footer />
    </>
  );
}

export default App;
