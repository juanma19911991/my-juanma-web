import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({ products }) => {
    return (
        <div>
            {products.map(product => { return <Item product={product} key={product.id} /> })}


        </div>
    )
}
