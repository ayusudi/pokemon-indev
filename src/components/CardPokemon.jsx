export default function CardPokemon({ pokemon }) {
  return (
    <div className="card"><img src={pokemon.img} />
      <h3>{pokemon.name} #{pokemon.id}</h3>
    </div>
  )
}