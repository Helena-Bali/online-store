import { useSelector } from 'react-redux'

const CurrencySelector = () => {
    const currency = useSelector((store) => store.mainReducer.currency)
    return currency
}
export default CurrencySelector