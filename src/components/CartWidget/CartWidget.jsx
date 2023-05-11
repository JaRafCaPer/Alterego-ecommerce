import React, { useContext } from 'react'
import {CartContext} from '../context/CartContext'
import { FaShoppingCart } from "react-icons/fa";
import { GiShinyPurse } from "react-icons/gi";
import './CartWidget.css'


export const CartWidget = () => {
  const {calcularCantidad} = useContext(CartContext)
  return (
    <>
    <GiShinyPurse className="carrito"/>
    <span>{calcularCantidad()}</span>
    
    </>
  )
}
