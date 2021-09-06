
const ADD_TO_BASKET = 'ADD_TO_BASKET'
const UPDATE_COUNT_OF_GOODS = 'UPDATE_COUNT_OF_GOODS'

const initialState = {
    productMap: [],
    totalPrice: 0,
    count: 0
}

const setCount = (productMap) => {
    if (typeof productMap !== 'undefined') {
        const count = productMap.count + 1
        return count
    }
    return 1
}

const sumOfItems = (productMap) => {
    if (typeof productMap !== 'undefined') {
        return Object.keys(productMap).reduce((acc, rec) => {
            return acc + productMap[rec].count
        }, 0)
    }
    return 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET: {
            return {
                ...state,
                productMap: {
                    ...state.productMap,
                    [action.item.id]: {
                        ...action.item,
                        count: setCount(state.productMap[action.item.id])
                    }
                },
                totalPrice: state.totalPrice + action.item.price,
                count: sumOfItems(state.productMap) + 1
            }
        }

        case UPDATE_COUNT_OF_GOODS: {
            const newAmount = state.productMap[action.id].count + action.payload
            const updatedMap = Object.keys(state.productMap).reduce((acc, rec) => {
                if (rec !== action.id) {
                    return { ...acc, [rec]: state.productMap[rec] }
                }
                return { ...acc }
            }, {})
            if (newAmount > 0 && action.payload === 1) {
                return {
                    ...state,
                    productMap: {
                        ...state.productMap,
                        [action.id]: {
                            ...state.productMap[action.id],
                            count: newAmount
                        }
                    },
                    totalPrice: state.totalPrice + state.productMap[action.id].price,
                    count: sumOfItems(state.productMap) + 1
                }
            }

            if (newAmount > 0 && action.payload === - 1) {
                return {
                    ...state,
                    productMap: {
                        ...state.productMap,
                        [action.id]: {
                            ...state.productMap[action.id],
                            count: newAmount
                        }
                    },
                    totalPrice: state.totalPrice - state.productMap[action.id].price,
                    count: sumOfItems(state.productMap) - 1
                }
            }

            return {
                ...state,
                productMap: updatedMap,
                totalPrice: state.totalPrice - state.productMap[action.id].price,
                count: sumOfItems(state.productMap) - 1
            }
        }

        default:
            return state
    }
}

export function addToBasket(item) {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_BASKET,
            item
        })
    }
}

export function updateCountOfGoods(id, change) {
    let payload = 0
    if (change === "+") {
        payload = 1
    }
    if (change === "-") {
        payload = -1
    }
    return ({
        type: UPDATE_COUNT_OF_GOODS,
        id,
        payload
    })
}
