import "./App.css";
import { Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing.jsx";
import Home from "./Pages/Home/Home.jsx";
/* import CreatedPokemon from "./Pages/CreatedPokemon/CreatedPokemon.jsx"; */
import CardDetail from "./Componnets/CardDetail/CardDetail";
import CreatedPokemon from "./Pages/CreatedPokemon/CreatedPokemon";
import EditPokemon from "./Pages/EditPokemon/EditPokemon";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/pokemons/:id" render={() => <CardDetail />} />
      <Route exact path="/created" render={() => <CreatedPokemon />} />
      <Route exact path="/pokemons/editar/:id" render={() => <EditPokemon />} />
    </div>
  );
}

export default App;
