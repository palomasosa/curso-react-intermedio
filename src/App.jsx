import './App.css'
import Counter from './components/Counter'
import {usePokemon} from '../src/hooks/usePokemon'
import { useState , useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
function App() {
  const [value, updateValue] = useLocalStorage("User", "Usuario")
  const handleClick = ()=>{
    updateValue("Paloma");
  }

  return (
    <>
    {/* <p style={{color:'black'}}>{pokemon?.name}</p>
    <img src={pokemon.sprites.front_default} width={200} height={200}/> */}
    <Counter/>
    <button onClick={handleClick}>Click</button>
    <p>Hola {value}</p>
    </>
  )
}

export default App
