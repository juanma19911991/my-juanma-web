import React from 'react'

export const ItemDetail = ({ products }) => {
    return (
        <div className="container">

            <div>
                {products.map((products) =>

                    <div>
                        <h3>{products.title}</h3>
                        <h1>{products.price.amount} {products.price.currency}</h1>
                        <img src={products.thumbnail} alt="" />

                    </div>




                )}

            </div>


        </div>
    )
}
