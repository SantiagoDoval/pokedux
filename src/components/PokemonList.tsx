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
                    <PokemonCard 
                        key={pokemon.name}
                        img={pokemon.sprites} 
                        name={pokemon.name} 
                        abilities={pokemon.abilities} 
                        pokemonID={pokemon.id} 
                        favorite={pokemon.favorite} />
                ))}
            </div>
        </>
    )
}

// PokemonList.defaultProps = {
//     pokemonList: Array(10).fill(''),
// }

export default PokemonList