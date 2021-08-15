import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import mainReducer from './main-reducer'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    mainReducer
  })

export default createRootReducer
