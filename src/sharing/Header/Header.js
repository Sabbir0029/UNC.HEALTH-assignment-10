import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link className='text-light' as={Link} to="/home">Home</Nav.Link>
        <Nav.Link className='text-light' as={Link} to="/Services">Services</Nav.Link>
        <Nav.Link className='text-light' as={Link} to="/blog">Blog</Nav.Link>
        <Nav.Link className='text-light' as={Link} to="/Login">Login</Nav.Link>
        <Nav.Link className='text-light' as={Link} to="/Signup">Registration</Nav.Link>
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