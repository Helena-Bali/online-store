
const ADD_TO_BASKET = 'ADD_TO_BASKET'
const DELETE_FROM_BASKET = 'DELETE_FROM_BASKET'

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
            return acc + productMap[rec].count}, 0 )
    }
    return 0
}   

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET: {
            return {
                // ...state,
                // productMap: [...state.productMap, action.item],
                // totalPrice: state.totalPrice + action.item.price,
                // count: state.productMap.length + 1
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

        case DELETE_FROM_BASKET: {
            return {
                ...state,
                productMap: [...state.productMap.filter((it, index) => {
                    return it.index === index
                })]
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

export function deleteFromBasket() {
    return (dispatch) => {
        dispatch({
            type: DELETE_FROM_BASKET
        })
    }
}
