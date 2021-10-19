import React from 'react';
import { Card } from 'react-bootstrap';
import img2 from '../../img/successful-medical-team.jpg';
import img3 from '../../img/1.jpg';
import img4 from '../../img/1.5Mill_CustomerFlyer_ADPSplash.jpg'

const About = () => {
  return (
    <div>
      <div className='container' id='#about'>
         <h1 className='text-center mb-5 mt-5'>Why you should trust us?<br />Get know about us</h1>
         <div className='text-center pb-5 text-danger'>============================</div>
         <div>
            <div className='row my-5'>
              <div className='col'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>All Specialist</Card.Title>
                  <Card.Text>You can reach out to 3500+ doctors from 80+ Specialties,who are experienced in telemedieine.
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
              <div className='col'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img3}/>
                <Card.Body>
                  <Card.Title>Private & secure</Card.Title>
                  <Card.Text>You can reach out to 3500+ doctors from 80+ Specialties,who are experienced in telemedieine.
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
              <div className='col'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Title>Million Customers</Card.Title>
                  <Card.Text>You can reach out to 1.5+ doctors from 80+ Specialties,who are experienced in telemedieine.
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default About;