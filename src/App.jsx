
import './App.css'
import DetailPokemon from './components/DetailPokemon'
import LandingPokemon from './components/LandingPokemon'
import ListPokemon from './components/ListPokemon'
import NavBar from './components/NavBar'
import pokemons from "../data.json"

function App() {
  return (
    <>
      <NavBar />
      <LandingPokemon />
      <ListPokemon pokemons={pokemons}/>
      <DetailPokemon pokemon={pokemons[1]}/>
    </>
  )
}

export default App
