import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate()
  const handleClick = () => {
    localStorage.setItem("access_token", "dummy_token....")
    navigate("/pokemons")
  }
  return (
    <section className="content" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button onClick={handleClick} style={{ padding: "30px 50px", borderRadius: 20 }}>
        <h2>START POKEMON WEB APP</h2>
      </button>
    </section>
  )
}