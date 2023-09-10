import axios from "axios";

export const getPokemons = async () => {
    try{
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        return data.results;
    }catch(error){
        console.log(error)
    }
};

export const getPokemonDetails = async (pokemon) =>{
    try{
        return await axios.get(pokemon.url)
        .then(res =>res.data)
    }catch(error){
        console.log(error)
    }
}