import React from 'react'
import PokemonCard from './PokemonCard'

import './components.css'

interface PokemonListProps {
    pokemonList:any;
}

const PokemonList:React.FC<PokemonListProps> = ({ pokemonList }) => {

    return (
        <>
            <div className='pokemonList'>
                {pokemonList.map((pokemon:any) => (
                    <PokemonCard key={pokemon.name} url={pokemon.url} name={pokemon.name} />
                ))}
            </div>
        </>
    )
}

// PokemonList.defaultProps = {
//     pokemonList: Array(10).fill(''),
// }

export default PokemonList