import React from 'react';
import { usePokemon } from './usePokemon';
import { PokemonDetail } from '.';

export function Pokemon({ pokemonName }) {
  const query = usePokemon({ pokemonName });
  const { data, isSuccess, isError, isLoading, isFetching } = query;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error....</p>;

  if (isSuccess)
    return (
      <div className="flex">
        {!pokemonName ? (
          data.results.map((pokemon) => <PokemonDetail key={pokemon.name} pokemonName={pokemon.name} />)
        ) : (
          <PokemonDetail pokemonName={pokemonName} />
        )}
        {isFetching && <p>Fetching...</p>}
      </div>
    );
}
