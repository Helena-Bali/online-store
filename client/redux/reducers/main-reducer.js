import axios from 'axios'

const GET_GOODS = "GET_GOODS";

const initialState = {
  listOfGoods: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS: {
      return {
        ...state,
        listOfGoods: action.data
      };
    }
    default:
      return state;
  }
};

export function getGoods() {
  return (dispatch) => {
    axios('/api/v1/goods').then(({ data }) => {
      dispatch({ type: GET_GOODS, data })
    })
  }
}

