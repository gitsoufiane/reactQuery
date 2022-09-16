import React from 'react';
import { usePosts, useUser, fetchPosts, fetchPost } from './usePosts';
import { useQueryClient } from '@tanstack/react-query';
import { PostForm } from './PostForm';

export function Posts({ setPostId }) {
  const userQuery = useUser({ email: 'Sincere@april.biz' });
  const postsQuery = usePosts({ userId: userQuery?.data?.id });

  const client = useQueryClient();

  //prefetch a query when the component is mounted to avoid the loading state
  React.useEffect(() => {
    client.prefetchQuery(['posts', userQuery?.data?.id], fetchPosts);
  }, []);

  return (
    <div>
      <h1>List of Posts</h1>
      <PostForm />
      {userQuery.isSuccess && <p>User : {userQuery.data.name}</p>}
      {postsQuery.isSuccess && (
        <p>
          {postsQuery.data.map((post) => (
            <div
              key={post.id}
              onClick={() => setPostId(post.id)}
              onMouseEnter={() =>
                client.prefetchQuery(['post', post.id], fetchPost, {
                  staleTime: Infinity,
                })
              }
            >
              {post.title}
            </div>
          ))}
        </p>
      )}
    </div>
  );
}
