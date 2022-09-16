import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const RandomNumber = ({ subkey }) => {
  const randomQuery = useQuery(
    ['random', subkey],
    () => Math.round(Math.random() * 1000),
    {
      // staleTime: Infinity,
    },
  );

  return <div>{randomQuery.isLoading ? '...' : randomQuery.data}</div>;
};

export function Time() {
  const [show, toggle] = React.useReducer((d) => !d, true);
  const client = useQueryClient();

  const timeQuery = useQuery('time', () => new Date().toLocaleTimeString(), {
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  return (
    <div>
      {timeQuery.data}
      <br />
      <button
        className="bg-red-500 text-white font-bold py-2 px-4 rounded"
        onClick={toggle}
      >
        Toggle Random
      </button>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={() =>
          client.invalidateQueries('random', {
            refetchActive: true, // use refetchActive to force refetch when the staleTime is Infinity
            refetchInactive: true, // use refetchInactive to force refetch when the the query in inactive
          })
        }
      >
        {' '}
        invalidate random Number
      </button>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={() =>
          client.invalidateQueries(['random', 'A'], {
            refetchActive: true, // use refetchActive to force refetch when the staleTime is Infinity
            refetchInactive: true, // use refetchInactive to force refetch when the the query in inactive
          })
        }
      >
        {' '}
        invalidate random Number A
      </button>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={() =>
          client.invalidateQueries(['random', 'B'], {
            refetchActive: true, // use refetchActive to force refetch when the staleTime is Infinity
            refetchInactive: true, // use refetchInactive to force refetch when the the query in inactive
          })
        }
      >
        {' '}
        invalidate random Number B
      </button>
      {show && (
        <>
          <RandomNumber subkey="A" />
          <RandomNumber subkey="B" />
        </>
      )}
    </div>
  );
}
