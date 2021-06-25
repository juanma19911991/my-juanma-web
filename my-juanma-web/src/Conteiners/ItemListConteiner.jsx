import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { CardComponent } from '../Components/Cards/Card'
import { ItemList } from '../Components/ItemList/ItemList'


export function ItemListConteiner(props) {

    const [products, setProducts] = useState([])
    useEffect(async () => {


        const response = await fetch('./json/products.json')
        const result = await response.json()
        setProducts(result)
    }, [2000]
    )


    return (
        <div>

            <h1>

                {props.greeting}
            </h1>
             <div>
                 <ItemList products={products}/>
             </div>
             
        </div>
    )

}









