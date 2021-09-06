import { useSelector } from 'react-redux'


const ActualPriceBasketSelector = (props) => {
    const { data } = props
    const { productsCount } = props
    const rate = useSelector((store) =>
        store.headerReducer.rates[store.headerReducer.currency])
    const actualPrice = data.data.price * rate * productsCount
    return (actualPrice.toFixed(2))

}
export default ActualPriceBasketSelector