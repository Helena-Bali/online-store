import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrency } from '../../redux/reducers/main-reducer'

const Currency = () => {
  const dispatch = useDispatch()
  const currencyOnClick = (currency) => {
    dispatch(setCurrency(currency))
  }
  return <span className="p-5">
    <button type="button"
      id="usd-button"
      className="bg-blue-500 text-black
      items-center text-center
      font-bold shadow-lg mx-2 p-2"
      onClick={() => currencyOnClick('USD')}
    >USD</button>

    <button type="button"
      id="eur-button"
      className="bg-blue-500 text-black
      items-center text-center
      font-bold shadow-lg mx-2 p-2"
      onClick={() => currencyOnClick('EUR')}
    >EUR</button>

    <button type="button"
      id="cad-button"
      className="bg-blue-500 text-black
      items-center text-center
      font-bold shadow-lg mx-2 p-2"
      onClick={() => currencyOnClick('CAD')}
    >CAD</button>
  </span>
}

export default Currency