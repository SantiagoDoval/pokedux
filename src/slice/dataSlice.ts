import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemons } from "../api/Api";

const initialState={
    pokemons:[]
}

export const fetchPokemonsWithDetails = (createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_,{distpach})=>{        
        const pokemonRes= await getPokemons();
        const gDataDetails = await Promise.all(
            pokemonRes.map((pokemon:any) => getPokemonDetails(pokemon))
        );
                
        distpach(dataSlice.actions.setPokemons(gDataDetails))        
    })
)

// export const fetchPokemonsWithDetails = createAsyncThunk(
//     'data/fetchPokemonsWithDetails',
//     async (_,{distpach})=>{
//         const pokemonRes= await getPokemons();
//         const gDataDetails = await Promise.all(
//             pokemonRes.map((pokemon:any) => getPokemonDetails(pokemon))
//         );        
//         distpach(setPokemons(gDataDetails))
//         console.log('gil')
//     }
// )

const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
        setPokemons:(state,action)=>{
            console.log(state)
            state.pokemons=action.payload;
        },
        setFavorite:(state,action)=>{
            const currentFavId=state.pokemons.findIndex((pokemon:any)=>{
                return pokemon.id == action.payload
            })

            if(currentFavId>=0){
                const isFavorite=state.pokemons[currentFavId].favorite;
                state.pokemons[currentFavId].favorite=!isFavorite;
            }
        }
    }
})

export const {setFavorite,setPokemons}=dataSlice.actions;

export default dataSlice.reducer;