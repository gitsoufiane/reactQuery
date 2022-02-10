import React from 'react';
import { usePost } from './usePosts'

export function Post({ postId ,setPostId}) {
  const postQuery = usePost({ postId });

  return <div>
    <button onClick={()=>setPostId(-1)}>back to posts</button>
    {postQuery.isSuccess && <p>{JSON.stringify(postQuery.data)}</p>}
  </div>;

}
