import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CardServices from './CardServices';
import './services.css'

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(()=>{
    fetch('Services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  },[]);
  console.log(services);
  return (
    <div className='services'>
      <div>
        <h1 className='text-center mb-3 p-5 text-danger bg-success fw-bold'>Services</h1>
      </div>
      <div className='mb-5 container w-75'>
      <Row xs={1} md={3} className="g-4">
        {
          services.map(service => <CardServices service={service}></CardServices>)
        }
        </Row>
      </div>
    </div>
  );
};

export default Services;