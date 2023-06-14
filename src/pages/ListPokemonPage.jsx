import { useEffect, useState } from "react"
import CardPokemon from "../components/CardPokemon"

export default function ListPokemon(props) {
  const [pokemons, setPokemons] = useState([
    {
      "id": "001",
      "name": "Bulbasaur",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      "types": [
        "Grass",
        "Poison"
      ],
      "resistant": [
        "Water",
        "Electric",
        "Grass",
        "Fighting",
        "Fairy"
      ],
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "evolutions": [
        {
          "id": "001",
          "name": "Bulbasaur",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        },
        {
          "id": "002",
          "name": "Ivysaur",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
        },
        {
          "id": "003",
          "name": "Venusaur",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
        }
      ]
    }
  ])
  useEffect(() => {
    async function fetchPokemon() {
      try {
        let response = await fetch("http://localhost:3000/pokemons")
        let data = await response.json()
        setPokemons(data)
      } catch (error) {
        console.log(error, "<<<");
      }
    }
    fetchPokemon()
  }, [setPokemons])
  return (
    <section className="content">
      <h1 className="title">POKEMONS</h1>
      <div className="pokemons">
        <div className="cards">
          {
            pokemons.map(el => <CardPokemon key={el.id} pokemon={el} />)
          }
        </div>
      </div>
    </section>
  )
}