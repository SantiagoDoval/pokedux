import PokemonList from './components/PokemonList'
import Searcher from './components/Searcher'
import { Col, Row } from 'antd/es/grid'
import logo from './assets/logo.svg'
import { useEffect } from 'react'
import './App.css'
// import { getPokemons, getPokemonDetails } from './api/Api.js'
// import { setPokemons, setPokemonDetails, setLoader } from './actions'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

//With Connect
// import { connect } from 'react-redux'
// import {setPokemons as setPokemonsActions} from './actions'

//With Redux Hooks
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { fetchPokemonsWithDetails } from './slice/dataSlice'




// function App({pokemons,setPokemons}:any) {

function App() {

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  // const pokemons = useSelector((state: any) =>
  //   state.getIn(['pokemons'])
  // ).toJS();
  // const loader = useSelector((state: any) => state.getIn(['ui','loader']))

  const pokemons=useSelector((state:any)=>
    state.data.pokemons
  )  
  const loader = false;
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
    console.log("🚀 ~ file: App.tsx:38 ~ App ~ pokemons:", pokemons)
    
    // const getData = async () => {
    //   // dispatch(setLoader(true))
    //   // const gData = await getPokemons();
    //   // dispatch(setPokemonDetails(gData));
    //   // dispatch(setLoader(false))
     

    // };
    // getData();
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
        {loader ? (
          <Col offset={12}>
            <Spin indicator={antIcon} style={{ margin: '30px auto' }} />
          </Col>
        ) : (
          <PokemonList pokemonList={pokemons} />
        )}
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
