import { useSelector } from 'react-redux'

const RateSelector = () => {
    const rate = useSelector((store) =>
        store.mainReducer.rates[store.mainReducer.currency])
        return rate
}
export default RateSelector