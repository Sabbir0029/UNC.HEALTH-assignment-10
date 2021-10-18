import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';


const Header = () => {
  const {user, logOut}= UseAuth();
  console.log(user)
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Container>
        <Navbar.Brand href="#home"><span className='text-danger fw-bold fs-2'>UNC.</span>HEALTH</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link className='text-light' as={Link} to="/home">Home</Nav.Link>
        <Nav.Link className='text-light' as={Link} to="/Services">Services</Nav.Link>
        <Nav.Link className='text-light' as={Link} to="/blog">Blog</Nav.Link>
        <Button className='text-light me-3' variant="danger" as={Link} to="/Signup">Registration</Button>
        {user?.email?
        <Button onClick={logOut} variant="danger" className='text-light text-decoration-none' to='/login'>Logout</Button>:
        <Button variant="danger" className='text-light' as={Link} to="/Login">Login</Button>}
        
          <Navbar.Text>
            <div className='d-flex'>
            <img src={user.photoURL} className='w-25 ms-3 rounded-circle' alt="" />
            <p className='text-light text-decoration-none mt-3 ms-3'>{user.displayName}</p>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;