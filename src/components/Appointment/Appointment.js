import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router';

const Appointment = () => {
  const {AppointmentId} = useParams();
  return (
    <div className='d-flex justify-content-center align-items-center page'>
      <div className='mt-5 p-5 signup'>
      <h2>Please Fill out the form</h2>
      <Form>
      {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <h5>I am registering for</h5>
      <Form.Check
        inline
        label="My Self"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="Other people"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
    </div>
  ))}
        {/* checbox */}
         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <p>{AppointmentId}</p>
           <Form.Label>Patien's FullName </Form.Label>
           <Form.Control type="text" placeholder="Full Name" />
         </Form.Group>
           <Form.Label>Mobile Number</Form.Label>
           <Form.Control type="number" placeholder="Phone Number" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Patient ID Number</Form.Label>
           <Form.Control type="number" placeholder="ID Number" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
         </Form.Group>
         <Button variant="primary" type="submit">
           Submit
         </Button>
       </Form>
      </div>
    </div>
  );
};

export default Appointment;