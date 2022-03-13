import React from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';
import { useQueryClient } from 'react-query';

export function PostForm() {
  const [postText, setPostText] = React.useState('');
  const client = useQueryClient();

  const mutate = useMutation(
    (post) => axios.post('http://localhost:3001/posts', post),
    {
      onMutate: (post) => {
        client.cancelQueries(['posts', 1]); // cancel all queries for this key ['posts', 1]
        const oldData = client.getQueryData(['posts', 1]); // get query data for this key ['posts', 1]
        console.log({ oldData });
        // client.setQueryData(['posts', 1], (posts) => [
        //   ...posts,
        //   { ...post, id: Math.random() },
        // ]);
        return () => client.setQueryData(['posts', 1], oldData); //pass to context in onError , onSuccess , onSettled
      },
      onSuccess: (data, variables, context) => {
        client.invalidateQueries('posts');
        console.log('onSuccess', { data, variables, context });
      },
      onError: (error, variables, context) => {
        console.log('onError', { error, variables, context });
        if (context) context();
      },
      onSettled: (data, error, variables, context) =>
        console.log('onSettled', { data, error, variables, context }),
    },
  );

  const onSubmit = (e) => {
    e.preventDefault();
    mutate.mutate({ title: postText, body: postText, userId: 1 });
    setPostText('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
