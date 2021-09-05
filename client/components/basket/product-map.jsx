import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCountOfGoods } from '../../redux/reducers/basket-reducer'
import CurrencySelector from '../main-page/card/currency-selector'
import ActualPriceBasketSelector from './actual-price-basket-selector'

const ProductMap = (props) => {
    const { data } = props
    const dispatch = useDispatch()
    const productsCount = useSelector((store) => store.basketReducer.productMap[data.id].count)
    const cartItems = useSelector((store) => store.basketReducer.productMap)
   
        return (
            <div key={data.id} className="product">
                <div>
                    <span className="flex flex-row">
                        <span className="w-1/6">
                            <img className="product__image ml-5 max-w-xs object-cover h-24"
                                src={cartItems[data.id].image}
                                alt="Products" />
                        </span>
                        <span className="ml-2 w-1/6">
                            <button type="button"
                                className="product__remove
                             text-black items-center text-center
                              font-bold shadow-lg border-2 border-gray-200 mx-2 p-1 w-12"
                                onClick={() => dispatch(updateCountOfGoods(cartItems[data.id].id, "-"))}>
                                -</button>
                            <button type="button"
                                className="product__remove
                             text-black items-center text-center
                              font-bold shadow-lg border-2 border-gray-200 mx-2 p-1 w-12"
                                onClick={() => dispatch(updateCountOfGoods(cartItems[data.id].id, "+"))}>
                                +</button>
                        </span>
                        <span className="product__price ml-3 font-bold w-1/6"><ActualPriceBasketSelector data={props} productsCount={productsCount} /> <CurrencySelector /> </span>
                    </span>
                    <div className="product__title ml-5">{cartItems[data.id].title}</div>
                </div>
                <span className="ml-5">In basket:</span>
                <span className="product__amount font-bold ml-5">{cartItems[data.id].count} </span>
            </div>
        )
   


    // return <div> {Object.keys(cartItems).map(it => {
    //     const productsCount = cartItems[it].count
    //     return (
    //         <div key={it} className="product">
    //             <div>
    //                 <span className="flex flex-row">
    //                     <span className="w-1/6">
    //                         <img className="product__image ml-5 max-w-xs object-cover h-24"
    //                             src={cartItems[it].image}
    //                             alt="Products" />
    //                     </span>
    //                     <span className="ml-2 w-1/6">
    //                         <button type="button"
    //                             className="product__remove
    //                          text-black items-center text-center
    //                           font-bold shadow-lg border-2 border-gray-200 mx-2 p-1 w-12"
    //                             onClick={() => dispatch(updateCountOfGoods(cartItems[it].id, "-"))}>
    //                             -</button>
    //                         <button type="button"
    //                             className="product__remove
    //                          text-black items-center text-center
    //                           font-bold shadow-lg border-2 border-gray-200 mx-2 p-1 w-12"
    //                             onClick={() => dispatch(updateCountOfGoods(cartItems[it].id, "+"))}>
    //                             +</button>
    //                     </span>
    //                     <span className="product__price ml-3 font-bold w-1/6"><ActualPriceBasketSelector data={props} productsCount={productsCount} /> <CurrencySelector /> </span>
    //                 </span>
    //                 <div className="product__title ml-5">{cartItems[it].title}</div>
    //             </div>
    //             <span className="ml-5">In basket:</span>
    //             <span className="product__amount font-bold ml-5">{cartItems[it].count} </span>
    //         </div>
    //     )
    // }
    // )
    // } </div>
}

export default ProductMap