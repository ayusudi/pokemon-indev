import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function DetailPokemon() {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemon, setPokemon] = useState({})
  const { id } = useParams()

  useEffect(() => {
    async function fetchDetailPokemon() {
      try {
        let url = `https://raw.githubusercontent.com/ayusudi/pokemon-indev/main/data.json`
        let respose = await fetch(url)
        let pokemons = await respose.json()
        let data = pokemons.find(el => el.id == id)
        setPokemon(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error, "<<<");
      }
    }
    fetchDetailPokemon()
  }, [])

  if (isLoading) {
    return <img src="https://cdn.dribbble.com/users/2105727/screenshots/4254712/getting_ready.gif" />
  } else {
    return (
      <section className="content detail">
        <div className="box">
          <div className="cbox img">
            <img src={pokemon.img}
              style={{ height: 300, objectFit: "contain" }} /></div>
          <div className="cbox">
            <div>
              <p>#{pokemon.id}</p>
              <h2>{pokemon.name}</h2>
              <div className="pokemonTypes">
                <p className="type"><b>{pokemon.types.join(", ") + "."}</b></p>
              </div>
              <p>{pokemon.description}</p>

            </div>
            <div style={{ display: "flex", gap: 10, padding: "10px 0" }}>
              <div>
                <table>
                  <thead>
                    <tr >
                      <th>Resistants</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      pokemon.resistant.map(el => {
                        return (
                          <tr key={el}>
                            <td>{el}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>

                </table>
              </div>
              <div>

                <table>
                  <thead>
                    <tr>
                      <th>Weaknesses</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      pokemon.weaknesses.map(el => {
                        return (
                          <tr key={el}>
                            <td>{el}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}