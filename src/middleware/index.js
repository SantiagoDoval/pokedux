export const logger = (store)=>(next)=>(action)=>{
    // console.log(action)
    next(action)
}

export const countPokemon = (store)=>(next)=>(action)=>{
    let i=1;    
    const count=action.payload.map(pokemon =>({...pokemon,name: "#" + i++ + " " + pokemon.name }))
    const updateAction={...action,payload:count}    
    next(updateAction)
}