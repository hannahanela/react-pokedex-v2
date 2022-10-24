import { POKEMON_DATA } from './_pokemonList';
import Pokedex from "./Pokedex";
import './App.css';

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={POKEMON_DATA} />
    </div>
  );
}

export default App;
