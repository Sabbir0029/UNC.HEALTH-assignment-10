import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './Header.css'


const Header = () => {
  const {user, logOut}= UseAuth();
  const element = <FontAwesomeIcon icon={faUser} />
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Container>
        <Navbar.Brand href="#home"><span className='text-danger fw-bold fs-2'>UNC.</span>HEALTH</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link className='text-light' as={Link} to="/home">Home</Nav.Link>
        <Nav.Link className='text-light' as={Link} to="/Services">Services</Nav.Link>
        <Nav.Link className='text-light' as={Link} to="/Appointment">Appointments</Nav.Link>
        <Nav.Link className='text-light' as={Link} to="/Contract">ContractUs</Nav.Link>
        <Nav.Link className='text-light' as={Link} to="/blog">Blog</Nav.Link>
        <Button className='text-light me-3' variant="danger" as={Link} to="/Signup">Registration</Button>
        {user?.displayName?
        <Button onClick={logOut} variant="danger" className='text-light text-decoration-none' to='/login'>Logout</Button>:
        <Button variant="danger" className='text-light' as={Link} to="/Login">Login</Button>}
        
          <Navbar.Text>
            <div className='d-flex photo'>
            {user?.displayName?
            <img src={user.photoURL} className=' ms-3 rounded-circle' alt="photo" />:
            <h4 className='ms-3'>{element}</h4>
            }
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