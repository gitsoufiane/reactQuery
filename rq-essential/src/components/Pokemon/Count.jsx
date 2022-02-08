import React from 'react';
import { usePokemon } from './usePokemon';

export function Count() {
  const {data,isSuccess} = usePokemon();
  return <h2> Count Pokemon : {isSuccess && data?.results.length}</h2>;
}
