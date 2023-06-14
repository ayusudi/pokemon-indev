import { useNavigate } from "react-router-dom";

export default function CardPokemon({ pokemon }) {
  const navigate = useNavigate();
  const handleClick = () => {
    let url = `/pokemons/${pokemon.id}/detail`
    navigate(url)
  }
  return (
    <div className="card" onClick={handleClick}><img src={pokemon.img} />
      <h3>{pokemon.name} #{pokemon.id}</h3>
    </div>
  )
}