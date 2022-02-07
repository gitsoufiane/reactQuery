import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPokemon = async ({ queryKey }) => {
  const [, pokemonName] = queryKey;
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((res) => res.data);
};

export const usePokemon = ({ pokemonName = '' } = {}) =>
  useQuery(['pokemon', pokemonName], fetchPokemon, {
    //refetch on window focus
    refetchOnWindowFocus: true,

    // query in stale get refetched automatically in the background (ready to get refetch)
    // query will be considered fresh for  5 seconds before marked as stale
    // fresh query will not be refetched automatically in the background
    staleTime: 5000,

    // The time in milliseconds that unused/inactive cache data remains in memory
    cacheTime: Infinity,

    // trigger the query when enabled is true
    enabled: true,
  });
