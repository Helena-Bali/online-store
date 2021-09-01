import React from 'react'
import { useSelector } from 'react-redux'
import ProductMap from './product-map'

 const ListOfProducts = () => {
    const products = useSelector((store) => store.basketReducer.productMap)
    const listOfProducts = Object.values(products).map(it => {
        return <div key={it.id}className="m-2">
                        <ProductMap data={it} />
                    </div>
    })
 return <div> {listOfProducts} </div>
}

export default ListOfProducts