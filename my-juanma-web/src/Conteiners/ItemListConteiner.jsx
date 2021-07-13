import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { CardComponent } from '../Components/Cards/Card'
import { ItemList } from '../Components/ItemList/ItemList'
import { useParams } from 'react-router-dom';

export function ItemListConteiner(props) {

    const [products, setProducts] = useState([])
    const { id } = useParams()
    useEffect(async () => {


        const response = await fetch('/json/products.json')
        const result = await response.json()
        let auxi = id ? result.filter(element => element.category === id): result;
        setProducts(auxi)
    }, [id]
    )


    return (
        <div>

            <h1>

                {props.greeting}
            </h1>
            <div>
                <ItemList products={products} />
            </div>

        </div>
    )

}









