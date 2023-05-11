import React, {useContext, useState} from 'react';
import { Button,Card } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from '../context/CartContext';
import './CartScreen.css'

export const CartScreen = () => {

  const { carrito, precioTotal, removerItem, vaciarCarrito} = useContext(CartContext)
  return (
    <Container>
      {
        carrito.length === 0
          ? <>
            <h3 className='empty'>Your Cart is Empty!</h3>
            <hr />
            <Link to='/' className='btn btn-success'> Back to the store</Link>
          </>
          : <Row>
            <Col>
            <h3>Your Cart</h3>
            <hr />
            {
              carrito.map((prod) => (
                <Col className='listado'>

                  <Card className='cartCard' style={{ width: '15rem' }}>
                    <Card.Body>
                      <Card.Title>Item: {prod.name}</Card.Title>
                      <Card.Img className='img' src={prod.image} />
                      <Card.Title>Price: ${prod.price}</Card.Title>
                      <Card.Text>Inventory: {prod.stock}</Card.Text>
                      <Card.Text>Amount: {prod.counter}</Card.Text>
                      <Card.Text> Total: ${prod.price * prod.counter}</Card.Text>
                      <Button onClick={() => removerItem(prod.id)}>
                        <BsFillTrashFill />
                      </Button>
                    </Card.Body>
                    
                  </Card>
                </Col>
              ))
            }
            </Col>
          <Col >
          <hr />
                <strong>TOTAL: $ {precioTotal()}</strong>
                <hr />
                <Link className='boton btn btn-danger' onClick={vaciarCarrito}> Empty Cart</Link>
                <Link className='boton btn btn-success' to='/checkout'>
                Buy
                </Link>
          </Col>
          </Row>
      }

    </Container>
  )
}
