import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { sortGoodsByABCBasket, sortGoodsByPriceBasket } from '../../redux/reducers/basket-reducer'
import { sortGoodsByABC, sortGoodsByPrice } from '../../redux/reducers/main-reducer'

const Sort = () => {
    const dispatch = useDispatch()
    const [toggled, setToggled] = useState(false)
    const [sortMethodABC, setSortMethodABC] = useState('')
    const [sortMethodPrice, setSortMethodPrice] = useState('')
    const onClickABC = () => {
        setToggled(!toggled)
        setSortMethodABC(toggled ? '▲' : '▼')
        dispatch(sortGoodsByABC(toggled))
        dispatch(sortGoodsByABCBasket(toggled))
    }
    const onClickPrice = () => {
        setToggled(!toggled)
        setSortMethodPrice(toggled ? '▲' : '▼')
        dispatch(sortGoodsByPrice(toggled))
        dispatch(sortGoodsByPriceBasket(toggled))
    }
    return (
        <span className="space-between p-10">
        <button type="button" 
        className="bg-blue-500 text-black items-center text-center h-24 w-38  font-bold shadow-lg  p-2 mr-8"
        id="sort-price"
        onClick={onClickPrice}
        >Отсортировать по цене {sortMethodPrice}
        </button>
        <button type="button"
        className="bg-blue-500 text-black items-center text-center h-24 w-38  font-bold shadow-lg p-2"
        id="sort-name"
        onClick={onClickABC}
        >Отсортировать по названию {sortMethodABC}</button>                
        </span>
    )
}

export default Sort