import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import mainReducer from './main-reducer'
import headerReducer from './header-reducer'
import basketReducer from './basket-reducer'
import logsReducer from './logs-reducer'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    mainReducer,
    headerReducer,
    basketReducer,
    logsReducer
  })

export default createRootReducer
