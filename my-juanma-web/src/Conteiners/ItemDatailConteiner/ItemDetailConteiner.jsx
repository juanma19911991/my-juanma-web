import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { ItemDetail } from '../../Components/ItemDetail/ItemDetail'



export function ItemDetailConteiner(props) {

    const [products, setProducts] = useState([])
    useEffect(async () =>  { 


        const response = await fetch('https://challenge-meli-backend.herokuapp.com/api/items?q=casco')
        const result = await response.json()
        setProducts(result.items)
        },[] 
        )
    
return (
    <div>

        <h1>

            {props.greeting}
        </h1>
        <div>
            <ItemDetail products={products} />
        </div>

    </div>
)

}
