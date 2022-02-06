import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPokemon = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return axios
    .get('https://pokeapi.co/api/v2/pokemon')
    .then((res) => res.data.results);
};

function Pokemon({ queryKey }) {
  const query = useQuery(queryKey, fetchPokemon, {
    //refetch on window focus
    refetchOnWindowFocus: true,

    // query in stale get refetched automatically in the background (ready to get refetch)
    // query will be considered fresh for  5 seconds before marked as stale
    // fresh query will not be refetched automatically in the background
    staleTime: 5000,

    // The time in milliseconds that unused/inactive cache data remains in memory
    cacheTime: 3000,
  });
  const { data, isSuccess, isError, isLoading, isFetching } = query;
  console.log(query);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  if (isSuccess)
    return (
      <div className="App">
        {isSuccess &&
          data.map((pokemon) => <div key={pokemon.name}>{pokemon.name}</div>)}
        {isFetching && <p>Fetching...</p>}
      </div>
    );
}

function App() {
  const [toggle, setToggle] = React.useState(true);
  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && (
        <>
          <Pokemon queryKey='pokemon' />
        </>
      )}
    </div>
  );
}

export default App;
