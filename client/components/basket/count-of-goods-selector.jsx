import { useSelector } from 'react-redux'

const CountOfGoodsSelector = () => {
    const countOfGoods = useSelector((store) => store.basketReducer.count)
    return countOfGoods
}
export default CountOfGoodsSelector