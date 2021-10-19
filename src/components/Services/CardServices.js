import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardServices = (props) => {
  const {photo, titel, price, id} = props.service
  return (
    <div>
    <Col>
      <Card>
        <Card.Img variant="top" src={photo}/>
        <Card.Body>
          <Card.Title>Name : {titel}</Card.Title>
          <Card.Text>price : {price}</Card.Text>
          <Link to={`/Appointment/${titel}`}>
          <Button>Appointment</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
    </div>
  );
};

export default CardServices;