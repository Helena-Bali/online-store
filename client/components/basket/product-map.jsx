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
                    <span>
                        <img className="product__image ml-5 max-w-xs"
                            src={data.image}
                            alt="Products" />
                    </span>
                    <span className="product__title ml-5">{data.title}</span>
                    <span className="product__price ml-5"><ActualPriceBasketSelector data={props} productsCount={productsCount}/> <CurrencySelector/> </span>
                    <span className="ml-5">
                        <button type="button"
                            className="product__remove bg-blue-500
                             text-white items-center text-center
                              font-bold shadow-lg mx-2 p-1 w-12"
                              onClick={() => dispatch(deleteFromBasket())}>
                            -</button>
                    </span>
                </div>
                <div className="product__amount ml-5">In basket: {productsCount} </div>
            </div>
    )
}

export default ProductMap