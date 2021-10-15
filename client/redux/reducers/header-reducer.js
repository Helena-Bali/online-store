import axios from 'axios'

const SET_CURRENCY = "SET_CURRENCY";

const initialState = {
  rates: { USD: 1 },
  currency: 'USD'
};

export default (state = initialState, action) => {
  switch (action.type) {
      case SET_CURRENCY: {
      return {
        ...state,
        currency: action.data,
        rates: action.rates
      }
    }
    default:
      return state;
  }
};

export function setCurrency(currency) {
   return (dispatch, getState) => {
    const store = getState()
    const {currency: oldCurrency} = store.headerReducer
    axios('/api/v1/rates').then(({ data: rates }) => {
      dispatch({ type: SET_CURRENCY, data: currency.toUpperCase(), rates })
    })
    axios({
      method: 'post',
      url: 'api/v1/logs',
      data: {
        time: +new Date(),
        action: `currency changed from ${oldCurrency} to ${currency}`
      }
    }).catch((err) => console.log(err))
  }
}

