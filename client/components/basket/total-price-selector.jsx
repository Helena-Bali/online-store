import { useSelector } from 'react-redux'

const TotalPriceSelector = () => {
    const totalPrice = useSelector((store) => store.basketReducer.totalPrice)
    const rate = useSelector((store) =>
        store.headerReducer.rates[store.headerReducer.currency])
    const totalPriceFromCurrency = totalPrice * rate
    return totalPriceFromCurrency.toFixed(2)
}
export default TotalPriceSelector