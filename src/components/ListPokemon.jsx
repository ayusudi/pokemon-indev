import CardPokemon from "./CardPokemon"

export default function ListPokemon(props) {
  return (
    <section className="content">
      <h1 className="title">POKEMONS</h1>
      <div className="pokemons">
        <div className="cards">
          {
            props.pokemons.map(el => <CardPokemon key={el.id} pokemon={el}/>)
          }
        </div>
      </div>
    </section>
  )
}