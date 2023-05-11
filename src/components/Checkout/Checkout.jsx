import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Button,Card } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import './Checkout.css'
import Swal from 'sweetalert2'
import { getFirestore } from '../../firebase/config'
import firebase from "firebase"
import 'firebase/firestore'

export const Checkout = () => {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

  const [email, setEmail] = useState("")

  const [confirmEmail, setConfirmEmail] = useState("")

  const [nombre, setNombre] = useState("")

  const [apellido, setApellido] = useState("")

  const [telefono, setTelefono] = useState("")

  const isButtonDisabled = email === "" || confirmEmail === "" || email !== confirmEmail;

  const handleSubmit = (e) => {

    e.preventDefault()

    console.log("Email:", email)
    console.log("Nombre:", nombre)
    console.log("Apellido:", apellido)
    console.log("Teléfono:", telefono)

    const orden = {
      buyer: {
        email,
        nombre,
        apellido,
        telefono
      },
      item: carrito,
      total_price: precioTotal(),
      data: firebase.firestore.Timestamp.fromDate(new Date())
    }

    const db = getFirestore()

    const ordenes = db.collection('ordenes')

    ordenes.add(orden)
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Your order has been generated',
          text: `Your Order Number is: ${res.id}`,
          willClose: () => {
            vaciarCarrito()
          }
        })
      })
      .finally(() => {
        console.log('Operacion realizada con exito')
      })

    carrito.forEach((item) => {
      const docRef = db.collection('productos').doc(item.id)

      docRef.get()
        .then((doc) => {
          docRef.update({
            stock: doc.data().stock - item.counter
          })
        })
    })
  }

  return (
    <Container>
      <Row className='check text-white border border-warning rounded'>
        <Col>
        {
              carrito.map((prod) => (
                
                  <Row className='chlist text-white  rounded'>
                    <Col>Item: {prod.name}</Col>
                    <Col>Price: ${prod.price}</Col>
                    <Col>Amount: {prod.counter}</Col>
                    <Col>Item subtotal: ${prod.price * prod.counter}</Col>
                    <hr/>
                  </Row>
                  
              ))
            }
        </Col>
        <Col>
        <strong className='rounded text-white border border-warning'>TOTAL: $ {precioTotal()}</strong>
        </Col>
      </Row>
      <h3 className='text-white'>Client's Information</h3>
      <hr />

      <form onSubmit={handleSubmit} className='container text-white mt-3'>

        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmEmail">Confirm Email</label>
          <input type="text" className="form-control" onChange={(e) => setConfirmEmail(e.target.value)} value={confirmEmail} />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Name</label>
          <input type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Last Name</label>
          <input type="text" className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido} />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Phone number</label>
          <input type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
        </div>
        <button type='submit' className='btn btn-success' disabled={isButtonDisabled}>Get your Order Number!</button>        <Link to='/cart' className='btn btn-info'>Return</Link>
      </form>

    </Container>
  )
}
