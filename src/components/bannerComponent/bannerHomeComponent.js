import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'



const Banner = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">SmartSchool</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/register">Register</Nav.Link>
           <NavDropdown className="mr-sm-2" title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/registerstudent">Register Student</NavDropdown.Item>
            <NavDropdown.Item href="/teacher/createclass/">Create Class</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Banner;