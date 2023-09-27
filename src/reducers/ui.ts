import { fromJS } from "immutable";
import { SET_LOADER } from "../actions/types";

const initialState=fromJS({
    loader:false
})

export const uiReducer = (state=initialState, action:any) => {
  switch (action.type) {
    case SET_LOADER:
        return state.setIn(['loader'],action.payload)
    default:
        return state;
  }
};


