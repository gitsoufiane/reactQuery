import React from 'react';
import { usePokemon } from '../hooks/usePokemon';

export function PokemonDetail({ pokemonName }) {
  const { data, isSuccess } = usePokemon({ pokemonName });
  if (isSuccess)
    return (
      <div className="border rounded">
        <img src={data.sprites.front_default} />
        <span>{pokemonName}</span>
      </div>
    );
  return <p>Loading...</p>;
}
