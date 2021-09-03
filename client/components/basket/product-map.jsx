import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromBasket } from '../../redux/reducers/basket-reducer'
import CurrencySelector from '../main-page/card/currency-selector'
import ActualPriceBasketSelector from './actual-price-basket-selector'

const ProductMap = (props) => {
    const { data } = props
    const dispatch = useDispatch()
    const productsCount = useSelector((store) => store.basketReducer.productMap[data.id].count)
    return (
        <div className="product">
            <div>
                <span className="flex flex-row">
                    <span className="w-1/6">
                        <img className="product__image ml-5 max-w-xs object-cover h-24"
                            src={data.image}
                            alt="Products" />
                    </span>
                    <span className="ml-2 w-1/6">
                        <button type="button"
                            className="product__remove
                             text-black items-center text-center
                              font-bold shadow-lg border-2 border-gray-200 mx-2 p-1 w-12"
                            onClick={() => dispatch(deleteFromBasket())}>
                            -</button>
                    </span>
                    <span className="product__price ml-3 font-bold w-1/6"><ActualPriceBasketSelector data={props} productsCount={productsCount} /> <CurrencySelector /> </span>
                </span>
                <div className="product__title ml-5">{data.title}</div>
            </div>
            <span className="ml-5">In basket:</span>
            <span className="product__amount font-bold ml-5">{productsCount} </span>
        </div>
    )
}

export default ProductMap