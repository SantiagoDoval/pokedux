// import { combineReducers } from "redux-immutable";
// import { pokemonsReducer } from "./pokemons";
// import { uiReducer } from "./ui";

// export const rootReducer = combineReducers({
//   data: pokemonsReducer,
// });

import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from '../slice/dataSlice'

export const rootReducer = combineReducers({
  data:dataReducer,
})


