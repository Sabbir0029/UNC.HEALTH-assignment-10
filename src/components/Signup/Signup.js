import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './Signup.css';

const Signup = () => {
   const { handleEmail,handlePassword,submitBtn,error,handleName} = UseAuth();
  return (
    <div className='d-flex justify-content-center align-items-center page'>
      <div className='mt-5 p-5 signup'>
      <h1>Please Registration</h1>
      <Form onSubmit={submitBtn}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Your Name </Form.Label>
           <Form.Control onBlur={handleName} type="text" placeholder="Full Name" />
         </Form.Group>
           <Form.Label>Email address</Form.Label>
           <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
           <div className='text-danger'>{error}</div>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
         </Form.Group>
         <Button variant="primary" type="submit">
         Registration
         </Button>
       </Form>
       <p className='text-center pt-3'>Already have an account <Link to='/Login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;