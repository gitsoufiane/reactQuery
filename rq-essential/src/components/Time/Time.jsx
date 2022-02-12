import React from 'react';
import { useQuery ,useQueryClient} from 'react-query';

export function Time() {
  const client = useQueryClient();
  const timeQuery = useQuery('time', () => new Date().toLocaleTimeString(), {
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  const randomQuery = useQuery('random', () => Math.random())
  
  console.log({ timeQuery });
  return <div>
    {timeQuery.data}
    <br />
    {randomQuery.data}
    <button onClick={()=> client.invalidateQueries('random')}> invalidate randome Number</button>
  </div>;
}
