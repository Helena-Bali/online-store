import { useSelector } from 'react-redux'

 const Data = () => {
 return useSelector((s) => s.mainReducer.goods)
}

export default Data