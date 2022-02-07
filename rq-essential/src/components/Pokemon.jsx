import React from 'react';
import { usePokemon } from '../hooks/usePokemon';

export function Pokemon({ pokemonName }) {
  const query = usePokemon({pokemonName});
  const { data, isSuccess, isError, isLoading, isFetching } = query;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error....</p>;

  if (isSuccess)
    return (
      <div className="App">
        {!pokemonName ? data.results.map((pokemon) => <div key={pokemon.name}>{pokemon.name}</div>)
          : <img src={data.sprites.front_default }/>}
        {isFetching && <p>Fetching...</p>}
      </div>
    );
}
