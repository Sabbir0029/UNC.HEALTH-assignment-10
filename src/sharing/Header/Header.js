import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link className='text-light' href="/home">Home</Nav.Link>
        <Nav.Link className='text-light' href="/Services">Services</Nav.Link>
        <Nav.Link className='text-light' href="/Login">Login</Nav.Link>
        <Nav.Link className='text-light' href="/Signup">Registration</Nav.Link>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;