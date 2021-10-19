import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  
  return (
    <div className='d-flex justify-content-center align-items-center page'>
      <div className='mt-5 p-5 signup'>
      <h1>Please Registration</h1>
      <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Your Name </Form.Label>
           <Form.Control type="text" placeholder="Full Name" />
         </Form.Group>
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" placeholder="Enter email" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" placeholder="Password" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
         </Form.Group>
         <Button variant="primary" type="submit">
           Submit
         </Button>
       </Form>
       <p className='text-center pt-3'>Already have an account <Link to='/Login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;