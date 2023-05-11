import React, {useState} from "react";
import './ItemCount.css'

export const ItemCount = ({max, cantidad, modify}) =>{

    const sumar = () =>{
        if (cantidad < max){
            modify(cantidad +1)
        }
    }
    const restar = () =>{
        if(cantidad >0){
            modify(cantidad-1)
        }
    }
    
    return(
        <>
        <h4>Amount: {cantidad}</h4>
        <div>
            <button className="sumar" onClick={sumar}>➕</button>
            <button className="restar" onClick={restar}>➖</button>
        </div>
        </>
    )
}
