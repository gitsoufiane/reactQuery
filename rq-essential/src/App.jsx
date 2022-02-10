import React from 'react';
import { Pokemon, Count, PokemonSearch } from './components/Pokemon';
import { Posts, Post } from './components/Posts';

function App() {
  const [pokemonName, setPokemonName] = React.useState('');

  const [postId, setPostId] = React.useState(-1);
  return (
    <div className="container m-auto p-5">
      {/* <PokemonSearch
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
      />
      <Count />
      <div className="">
        <Pokemon pokemonName={pokemonName} />
      </div> */}
      <div>
        {postId === -1 ? (
          <Posts setPostId={setPostId} />
        ) : (
          <Post postId={postId} setPostId={setPostId} />
        )}
      </div>
    </div>
  );
}

export default App;
