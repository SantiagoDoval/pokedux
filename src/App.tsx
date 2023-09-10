import PokemonList from './components/PokemonList'
import Searcher from './components/Searcher'
import { Col, Row } from 'antd/es/grid'
import logo from './assets/logo.svg'
import { useEffect } from 'react'
import './App.css'
import { getPokemons } from './api/Api.js'
import {setPokemons} from './actions'

//With Connect
// import { connect } from 'react-redux'
// import {setPokemons as setPokemonsActions} from './actions'

//With Redux Hooks
import { useSelector, useDispatch } from 'react-redux'


// function App({pokemons,setPokemons}:any) {

function App() {

  const pokemons = useSelector((state: any) => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {

    const getData = async () => {
      const gData = await getPokemons();
      dispatch(setPokemons(gData));
    };

    getData();


  }, [])

  return (
    <>
      <div>
        <Row style={{ margin: '50px auto 20px auto' }} justify="center">
          <img width={300} src={logo} alt="Logo" />
        </Row>
        <Col style={{ margin: '50px auto 20px auto' }} span={8} offset={8}>
          <Searcher />
        </Col>
        <PokemonList pokemonList={pokemons} />
      </div>
    </>
  )
}

// const mapStateToProps=(state:any)=>({
//   pokemons:state.pokemons
// })

// const mapDispatchToProps=(dispatch:any)=>({
//   setPokemons:(value:any)=>dispatch(setPokemonsActions(value))
// })

// export default connect(mapStateToProps,mapDispatchToProps)(App) 
export default App;
