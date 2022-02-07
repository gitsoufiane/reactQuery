import React from 'react';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetail } from './PokemonDetail';

export function Pokemon({ pokemonName }) {
  const query = usePokemon({ pokemonName });
  const { data, isSuccess, isError, isLoading, isFetching } = query;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error....</p>;

  if (isSuccess)
    return (
      <div className="App">
        {!pokemonName ? (
          data.results.map((pokemon) => <PokemonDetail key={pokemon.name} pokemonName={pokemon.name} />)
        ) : (
          <PokemonDetail pokemonName={pokemonName} />
        )}
        {isFetching && <p>Fetching...</p>}
      </div>
    );
}
