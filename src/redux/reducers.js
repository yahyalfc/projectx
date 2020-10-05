import { SET_POPUP } from "./constants";

const initialState = {
  popup: false,
};

const popUpReducer = (state = initialState, action = {}) => {
  //state is initial state like this.state in constructor of class component. default value
  switch (action.type) {
    case SET_POPUP:
      return { ...state, popup: action.payload };
    default:
      return state;
  }
};

export default popUpReducer;

//return Object.assign({}, state, {searchField: action.payload})
