import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { Logo } from "../../../logo";
import './Navbar.css'

import React from 'react';

const NavbarComp = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="left my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Documentation</Nav.Link>
            <NavDropdown title="API" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Getting started</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Utilities</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">About</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Suport</Nav.Link>
          </Nav>
            <Button variant="primary">Contact</Button>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavbarComp;


