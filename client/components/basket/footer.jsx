import React from 'react'
import CurrencySelector from '../main-page/card/currency-selector'
import CountOfGoodsSelector from './count-of-goods-selector'
import TotalPriceSelector from './total-price-selector'

const Footer = () => {
  return (
    <div>
      <footer id="total-amount"
        className="bottom-10 bg-blue-500 text-black items-center text-center h-16 w-42  font-bold shadow-lg  p-2 ml-5">
        Product total amount: <CountOfGoodsSelector />
        <div className="product__total_price h-12 w-42 ml-5">
        Product total price: <TotalPriceSelector /> <CurrencySelector/></div>
      </footer>
    </div>
  )
}

export default Footer