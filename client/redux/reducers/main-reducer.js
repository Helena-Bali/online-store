import axios from 'axios'

const GET_GOODS = "GET_GOODS";
const SORT_GOODS_BY_ABC = "SORT_GOODS_BY_ABC"
const SORT_GOODS_BY_PRICE = "SORT_GOODS_BY_PRICE"

const initialState = {
  listOfGoods: [],
  sortType: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS: {
      return {
        ...state,
        listOfGoods: action.data
      };
    }
    case SORT_GOODS_BY_ABC: {
      const sortedList = [...state.listOfGoods].sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      })
      if (action.sortType === true) {
        return {
          ...state,
          listOfGoods: sortedList.reverse()
        }
      }
      return {
        ...state,
        listOfGoods: sortedList
      }
    }
    case SORT_GOODS_BY_PRICE: {
      const sortedList = [...state.listOfGoods].sort((a, b) => {
        if (a.price < b.price) {
          return -1
        }
        if (a.price > b.price) {
          return 1
        }
        return 0
      })
      if (action.sortType === true) {
        return {
          ...state,
          listOfGoods: sortedList.reverse()
        }
      }
      return {
        ...state,
        listOfGoods: sortedList
      }
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

export function sortGoodsByABC(sortType) {
  return ({
    type: SORT_GOODS_BY_ABC,
    sortType,
  })
}

export function sortGoodsByPrice(sortType) {
  return ({
    type: SORT_GOODS_BY_PRICE,
    sortType,
  })
}
