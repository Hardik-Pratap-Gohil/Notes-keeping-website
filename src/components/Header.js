import React from 'react';
import { Navbar, Nav, Form, FormCheck, Container } from 'react-bootstrap';

const Header = ({ toggleDarkMode }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4 navbar-primary">
      <Container>
        <Navbar.Brand href="#">Notes Keeping App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            <FormCheck 
              type="switch"
              id="custom-switch"
              label="Dark Mode"
              onChange={toggleDarkMode}
              className="text-white"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
