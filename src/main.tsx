import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import thunk from 'redux-thunk';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'

import {countPokemon} from './middleware/'

import {rootReducer} from "./reducers/rootReducer";
import {pokemonsReducer} from "./reducers/pokemons";

const composeAlt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers= composeAlt(applyMiddleware(thunk,countPokemon))

const store = createStore(rootReducer,composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
