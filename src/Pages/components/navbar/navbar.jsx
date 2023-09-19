import { Navbar, Nav, Button } from "react-bootstrap";
import { Logo } from "../../../logo";
import "./navbar.css";

import React from "react";

const NavbarComp = () => {
  return (
    <Navbar bg="light" expand="lg" className="mx-5">
      <Navbar.Brand href="/">
        <Logo style={{width: "20%", height: "20%"}}
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Nav
          className="left my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="/Projects" className="mx-4">Projects</Nav.Link>
          
        </Nav>
        <Button href="https://wa.link/2064ef" className="mx-4" size="lg" variant="primary">Contact</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
