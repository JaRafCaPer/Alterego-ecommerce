
import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../ItemDetail/ItemDetail.css'
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({id, name, description, price, image, department, stock}) => {
  
  const navigate = useNavigate()

  const volverHaciaAtras = () =>{
    navigate(-1)
  }
  const {addToCart} = useContext(CartContext)

  const [counter, setCounter] = useState(0)
  
  const sumarAlCarrito = () =>{
        const newItem = {
          id,
          name,
          description,
          image,
          price,
          department,
          counter
        }
        console.log(newItem)
        addToCart(newItem)
        Swal.fire({
          icon: 'success',
          title: 'Adding items to your cart!',
          showConfirmButton: false,
          timer: 1000
        })
  }
  return (
    
    <div className='item'>
      
      <Card className='cardDetail' style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>Item: {name}</Card.Title>
          <Card.Img src={image} />
          <Card.Text>Description:  {description}</Card.Text>
          <Card.Title>Price: ${price}</Card.Title>
          <Card.Title>Category: {department}</Card.Title>
          <Card.Text>Inventory: {stock}</Card.Text>
          <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
          <Link onClick={sumarAlCarrito} className='btn boton botonAdd'>Add to cart</Link>
          <Link to='/cart' className='boton btn btn-success'>
            Shopping Cart
          </Link>
        </Card.Body>
        <Button onClick={volverHaciaAtras} className='btn btn-info'>Back</Button>
      </Card>
    </div>
  )
}