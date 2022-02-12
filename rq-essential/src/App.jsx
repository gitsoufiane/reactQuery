import React from 'react';
import { Pokemon, Count, PokemonSearch } from './components/Pokemon';
import { Posts, Post } from './components/Posts';
import { Time } from './components/Time';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [pokemonName, setPokemonName] = React.useState('');

  const [postId, setPostId] = React.useState(-1);
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/pokemon">Pokemon</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/time">Time</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/pokemon"
          element={
            <>
              <PokemonSearch
                pokemonName={pokemonName}
                setPokemonName={setPokemonName}
              />
              <Count />
              <div className="">
                <Pokemon pokemonName={pokemonName} />
              </div>
            </>
          }
        />
        <Route
          path="/post"
          element={
            postId === -1 ? (
              <Posts setPostId={setPostId} />
            ) : (
              <Post postId={postId} setPostId={setPostId} />
            )
          }
        />
        <Route path="/time" element={<Time />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
