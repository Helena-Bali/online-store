import { useSelector } from 'react-redux'

const ActualPriceSelector = (props) => {
    const { data } = props
    const rate = useSelector((store) =>
        store.headerReducer.rates[store.headerReducer.currency])
    const actualPrice = data.data.price * rate
    return (actualPrice.toFixed(2))

}
export default ActualPriceSelector