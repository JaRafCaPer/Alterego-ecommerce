import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react';
import '../Item/Item.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Item = ({id, name, description, price, image, department, stock}) => {
  return (<Row xs={2} md={1} className=" mt-2 col-xl g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
        <Card className='card text-white' style={{ width: '16rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body className='text-white'>
            <Card.Title>{name}</Card.Title>
            <Card.Text className='col-10 text-truncate'>{description}</Card.Text>
            <Card.Title> Price: ${price}</Card.Title>
            <Link to={`/detail/${id}`}>
              <Button className='botonDetalle'>Details</Button>
            </Link>
          </Card.Body>
        </Card>
    </Col>
  ))}
</Row>
);

    
}
export default Item;