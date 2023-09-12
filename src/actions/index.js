import { SET_FAVORITE, SET_LOADER, SET_POKEMONS } from "./types";
import { getPokemonDetails } from "../api/Api";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
})

export const setLoader = (payload) => ({
  type: SET_LOADER,
  payload,
})

export const setPokemonDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const gDataDetails = await Promise.all(
        pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(gDataDetails));
  };
