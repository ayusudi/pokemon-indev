import {
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import LandingPage from './pages/LandingPage.jsx';
import ListPokemonPage from './pages/ListPokemonPage.jsx';
import StartPage from './pages/StartPage.jsx';
import App from "./App.jsx";
import DetailPokemon from "./pages/DetailPokemonPage.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      let token = localStorage.getItem("access_token")
      if (!token){
        return redirect("/verify")
      }
      return null
    },
    children : [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/pokemons",
        element: <ListPokemonPage />
      },
      {
        path: "/pokemons/:id/detail",
        element: <DetailPokemon />
      }
    ]
  },
  {
    path: "/verify",
    element: <StartPage />,
    loader: () => {
      if (localStorage.getItem("access_token")){
        return redirect("/pokemons")
      }
      return null
    }
  },
]);

export default router