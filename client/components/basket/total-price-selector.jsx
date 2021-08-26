import { useSelector } from 'react-redux'

const TotalPriceSelector = () => {
    const totalPrice = useSelector((store) => store.basketReducer.totalPrice)
    return totalPrice
}
export default TotalPriceSelector