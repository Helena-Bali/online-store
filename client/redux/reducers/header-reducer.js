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
    const state = getState
    console.log(state)
    axios('https://api.exchangerate.host/latest?base=USD').then(({ data }) => {
      dispatch({ type: SET_CURRENCY, data: currency.toUpperCase(), rates: data.rates})
    })
  }
}

