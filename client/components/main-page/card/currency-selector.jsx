import { useSelector } from 'react-redux'

const CurrencySelector = () => {
    const currency = useSelector((store) => store.headerReducer.currency)
    return currency
}
export default CurrencySelector