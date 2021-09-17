
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
            const stateProductMap = state.productMap
            const copiedTotalPrice = state.totalPrice
            const copiedIdPrice = stateProductMap[action.id].price
            const newAmount = stateProductMap[action.id].count + action.payload
            const updatedMap = Object.keys(stateProductMap).reduce((acc, rec) => {
                if (rec !== action.id) {
                    return { ...acc, [rec]: stateProductMap[rec] }
                }
                return { ...acc }
            }, {})
            const copiedProductMap = {
                ...stateProductMap,
                [action.id]: {
                    ...stateProductMap[action.id],
                    count: newAmount
                }
            }

            if (newAmount > 0 && action.payload === 1) {
                return {
                    ...state,
                    productMap: copiedProductMap,
                    totalPrice: copiedTotalPrice + copiedIdPrice,
                    count: sumOfItems(stateProductMap) + 1
                }
            }

            if (newAmount > 0 && action.payload === - 1) {
                return {
                    ...state,
                    productMap: copiedProductMap,
                    totalPrice: copiedTotalPrice - copiedIdPrice,
                    count: sumOfItems(stateProductMap) - 1
                }
            }

            return {
                ...state,
                productMap: updatedMap,
                totalPrice: copiedTotalPrice - copiedIdPrice,
                count: sumOfItems(stateProductMap) - 1
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
