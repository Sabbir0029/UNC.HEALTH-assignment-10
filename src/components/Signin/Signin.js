import React from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Signin = () => {
  return (
    <div className='d-flex justify-content-center align-items-center page'>
      <div className='mt-5 p-5 login'>
      <h1>Please Login in</h1>
      <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" placeholder="Enter email" />
           <Form.Text className="text-muted">
             We'll never share your email with anyone else.
           </Form.Text>
         </Form.Group>
       
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" placeholder="Password" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>
         <Button variant="primary" type="submit">
           Submit
         </Button>
       </Form>
       <div>
         
       </div>
       <p className='text-center'>.........New to Amazon?.........</p>
       <p className='text-center'> <Link to='/Signup'>Create you a Account</Link></p>
      </div>
    </div>
  );
};

export default Signin;