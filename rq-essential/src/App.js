import React from 'react';
import { Pokemon } from './components/Pokemon';
import { Count } from './components/Count';
import { PokemonSearch } from './components/PokemonSearch';

function App() {
  const [toggle, setToggle] = React.useState(true);
  const [pokemonName, setPokemonName] = React.useState('');
  console.log(pokemonName);
  return (
    <div className="container mx-auto">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <PokemonSearch
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
      />
      {toggle && (
        <div className=''>
          <Count />
          <Pokemon pokemonName={pokemonName} />
        </div>
      )}
    </div>
  );
}

export default App;
