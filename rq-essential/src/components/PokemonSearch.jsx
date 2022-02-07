import React from 'react';

export function PokemonSearch({ pokemonName, setPokemonName }) {
  return (
    <div>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
    </div>
  );
}


