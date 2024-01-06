import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

class Navbar2 extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src="https://i.pinimg.com/originals/8e/5f/a6/8e5fa6f223b0329493d4b218c0e6c3f9.jpg"
              width={30}
              height={30}
              style={{ borderRadius: "100%" }}
            ></img>{" "}
            Shopping Ocean.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutUs">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sign Up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Navbar2;
