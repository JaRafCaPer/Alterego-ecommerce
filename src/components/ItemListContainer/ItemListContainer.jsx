import './itemlistcontainer.css';
import { useEffect, useState } from 'react';
import React from 'react'
import {getFirestore} from '../../firebase/config'
import {ImSpinner3} from 'react-icons/im'
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList";



const ItemListContainer = () => {
  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)

  const {departmentId} = useParams()

  useEffect(() =>{
    setLoading(true)
    const db = getFirestore()

    const productos = departmentId
      ?db.collection('productos').where('department', '==', departmentId)
      : db.collection('productos')
      productos.get()
      .then((res) => {
              const newItem = res.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              });
              console.table(newItem);
              setItems(newItem);
            })
            .catch((err) => console.log(err))
            .finally(() => {
              setLoading(false);
            });

  }, [departmentId, setLoading])
  return (
    <>{
    loading
        ?<div className='spinner'><ImSpinner3/></div>
        : <ItemList productos={items}/>
    }
    </>
  )
}
export default ItemListContainer;