import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import mainReducer from './main-reducer'
import headerReducer from './header-reducer'
import basketReducer from './basket-reducer'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    mainReducer,
    headerReducer,
    basketReducer
  })

export default createRootReducer
