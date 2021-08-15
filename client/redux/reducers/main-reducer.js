const UPDATE_MAIN_PAGE = "UPDATE_MAIN_PAGE";

const initialState = {
  goods: "DATA"
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MAIN_PAGE: {
      return {
        ...state,
        goods: action.goods
      };
    }
    default:
      return state;
  }
};

export function updateMainPage(goods) {
  return { type: UPDATE_MAIN_PAGE, goods };
}


export default mainReducer;
