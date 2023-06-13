export default function DetailPokemon({pokemon}) {
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
              <p className="type"><b>Grass, Poison.</b></p>
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
                  <tr>
                    <td>Water</td>
                  </tr>
                  <tr>
                    <td>Electric</td>
                  </tr>
                  <tr>
                    <td>Grass</td>
                  </tr>
                  <tr>
                    <td>Fighting</td>
                  </tr>
                  <tr>
                    <td>Fairy</td>
                  </tr>
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
                  <tr>
                    <td>Fire</td>
                  </tr>
                  <tr>
                    <td>Ice</td>
                  </tr>
                  <tr>
                    <td>Flying</td>
                  </tr>
                  <tr>
                    <td>Psychic</td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}