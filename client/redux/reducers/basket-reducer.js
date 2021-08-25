const SET_GOODS = 'SET_GOODS'

const initialState = {
    productMap: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_GOODS: {
            return {
                ...state,
                productMap: action.data

            }
        }

        default:
            return state
    }
}

export function setGoods() {
    return
    ({ 
        type: SET_GOODS,
        data
         })
    }
    
