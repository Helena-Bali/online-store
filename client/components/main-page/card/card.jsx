import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CurrencySelector from './currency-selector'
import ActualPriceSelector from './actual-price-selector'
import { addToBasket } from '../../../redux/reducers/basket-reducer'


const Card = (props) => {
    const { data } = props
    const dispatch = useDispatch()
    const products = useSelector((store) => store.basketReducer.productMap[data.id])
    return (
        <div>
            <div className=" card max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img className="card__image w-full object-cover h-40" src={data.image} alt="goods" />
                <div className="px-6 py-4">
                    <div className="card__title font-bold text-xl mb-2">{data.title}</div>
                    <div className="flex">
                        <div className="card__price font-bold text-xl mb-2"><ActualPriceSelector data={props} /></div>
                        <p className=" currency font-bold text-xl mb-2 ml-2">
                            <CurrencySelector />
                        </p>
                    </div>
                    <div className="card__product-amount font-bold text-xl mb-2">In basket: {typeof products === 'undefined' ? 0 : products.count} </div>
                </div>
            </div>
            <div>
                <button type="button"
                    className="bg-blue-500 text-black
                     items-center text-center h-12 w-24 border-2 rounded
                     font-bold shadow-lg  p-2 mr-8"
                    onClick={() => dispatch(addToBasket(data))}
                >Добавить</button>
            </div>
        </div>
    )
}

export default Card
