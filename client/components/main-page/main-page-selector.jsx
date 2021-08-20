import React from 'react'
import { useSelector } from 'react-redux'
import Card from './card'

 const ListOfGoods = () => {
     const fullListOfGoods = useSelector((store) => store.mainReducer.listOfGoods)
     const reducedListOfGoods = fullListOfGoods.reduce((acc, rec, index) => {
        if (index < 10) {
            return (
                [...acc,
                <div key={rec.id}>
                    <Card title={rec.title} />
                </div>]
            )
        }
        return acc
    }, []
    )
 return reducedListOfGoods
}

export default ListOfGoods