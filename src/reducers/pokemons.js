import { SET_FAVORITE, SET_LOADER, SET_POKEMONS } from "../actions/types";

const initialState = {
  pokemons: [],
  loader:false,
};

export const pokemonsReducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_FAVORITE:
      const FavoriteList=[...state.pokemons]      
      const pokemonFavorite=FavoriteList.findIndex(pokemon=>pokemon.id==action.payload)
      if(pokemonFavorite<0){
        return state
      }
      FavoriteList[pokemonFavorite].favorite=!FavoriteList[pokemonFavorite].favorite;         
      return {...state, pokemons:FavoriteList}        
    case SET_LOADER:      
      return {...state, loader:action.payload }
    default:
      return state;
  }
};
