import { fromJS } from "immutable";
import { SET_FAVORITE, SET_POKEMONS } from "../actions/types";

const initialState = fromJS({
  pokemons: [],
});

export const pokemonsReducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      // return { ...state, pokemons: action.payload };
      return state.setIn(['pokemons'],fromJS(action.payload))
    case SET_FAVORITE:
      // const FavoriteList=[...state.pokemons]      
      const pokemonFavorite=state.get('pokemons').findIndex(pokemon=>{
        return pokemon.get('id')==action.payload
      })
      if(pokemonFavorite<0){
        return state
      }
      // FavoriteList[pokemonFavorite].favorite=!FavoriteList[pokemonFavorite].favorite;         
      // const isFavorite=state.get('pokemons').get(pokemonFavorite).get('favorite');
      
      const isFavorite=state.getIn(['pokemons',pokemonFavorite,'favorite']);
      
      return state.setIn(['pokemons',pokemonFavorite,'favorite'],!isFavorite)
      // return {...state, pokemons:FavoriteList}        
      
    default:
      return state;
  }
};
