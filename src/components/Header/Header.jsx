import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";

import s from "../Header/Header.module.css";
import logo from "../../images/Express.png";
function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            width="110"
            height="32"
            className={s.logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar" />
        <Navbar.Collapse id="responsive-navbar">
          <Nav className={s.nav}>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/services">Our Services</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact Us</Link>
            </Nav.Link>
          </Nav>
          <Button className={s.btn} variant="light">
            Call Us
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
