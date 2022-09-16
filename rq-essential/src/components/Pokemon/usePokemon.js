import { useQuery } from '@tanstack/react-query';
import axios, { CancelToken } from 'axios';

const fetchPokemon = async ({ queryKey }) => {
  const [, pokemonName] = queryKey;
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const source = CancelToken.source();

  const promise = axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
      cancelToken: source.token,
    })
    .then((res) => res.data);

  promise.cancel = () => {
    source.cancel('Query Cancelled By React Query');
  };

  return promise;
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

    //number of time the query should retry if failed
    retry: 1,
    // retry delay in milliseconds between failed queries
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
