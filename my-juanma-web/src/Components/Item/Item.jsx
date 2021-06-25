import React from 'react'
import { ItemCount } from '../itemCount/ItemCount'

export const Item = ({ product }) => {
    return (
        <div className="container">

            <h3>{product.tittle}</h3>
            <img src= {product.pictureURL}/>
            <h5>{product.description}</h5>
            <h3>{product.price}</h3>
            <ItemCount stock={product.stock} id={product.id} initial="1"/>

            
        </div>
    )
}
