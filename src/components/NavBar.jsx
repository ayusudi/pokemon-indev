import { Link, NavLink } from "react-router-dom"
export default function NavBar() {
  return (
    <nav>
      <ul>
        <NavLink to="/" className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>Home</NavLink>
        <NavLink to="/pokemons" className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>Pokemons</NavLink>
      </ul>
    </nav>
  )
}