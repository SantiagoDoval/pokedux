import PokemonList from './components/PokemonList'
import Searcher from './components/Searcher'
import { Col,Row } from 'antd/es/grid'
import logo from './assets/logo.svg'
import { useEffect, useState } from 'react'
import {getPokemons} from './api/Api.js'

import './App.css'

function App() {

  const [pokemons, setPokemons] = useState('')

  useEffect(() => {

    const getData = async ()=>{      
      const gData= await getPokemons();
      setPokemons(gData)
    };
    
    getData();
    

  }, [])
  console.log(pokemons)
  return(
    <>
      <div>
        <Row style={{margin:'50px auto 20px auto'}} justify="center">
          <img width={300} src={logo} alt="Logo"/>
        </Row>
        <Col style={{margin:'50px auto 20px auto'}} span={8} offset={8}>
          <Searcher />
        </Col>
        <PokemonList pokemonList={pokemons} />
      </div>
    </>
  )
}

export default App
