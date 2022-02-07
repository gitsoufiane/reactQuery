import React from 'react';

export function PokemonSearch({ pokemonName, setPokemonName }) {
  return (
    <div>
      <input
        className="border w-full"
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Search for a Pokemon"
      />
    </div>
  );
}


