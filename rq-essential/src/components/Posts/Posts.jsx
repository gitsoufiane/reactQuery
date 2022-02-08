import React from 'react';
import {usePost,useUser } from './usePost'
export function Posts() {
  const userQuery = useUser({ email: 'Sincere@april.biz' });
  const postQuery = usePost({ userId: userQuery?.data?.id });
  console.log(postQuery)
  return <div>
    <h1>Post</h1>
    {userQuery.isSuccess && <p>{userQuery.data.name}</p>}
    {postQuery.isSuccess && <p>{postQuery.data.map(post=> <div key={post.id}>{post.title}</div>)}</p>} 
  </div>;
}
