import React, { useState, useEffect } from 'react'
import {getFirestore} from '../../firebase/config'
import {ImSpinner3} from 'react-icons/im'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(() =>{
        setLoading(true)

        const db = getFirestore()

        const productos = db.collection('productos')

        const item = productos.doc(itemId)

        item.get()
            .then((doc) =>{
                setItem({
                    id: doc.id, ...doc.data()
                })
                
            })
            .catch((err) => console.log(err))
            .finally(() =>{

                setLoading(false)
            })

    },[itemId])


  return (
    <section>
        {
            loading
            ?<ImSpinner3/>
            :<ItemDetail {...item}/>
        }
    </section>
  )
}
