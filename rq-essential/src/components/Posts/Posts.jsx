import React from 'react';
import { usePosts, useUser } from './usePosts';
export function Posts({ setPostId }) {
  const userQuery = useUser({ email: 'Sincere@april.biz' });
  const postsQuery = usePosts({ userId: userQuery?.data?.id });

  return (
    <div>
      <h1>List of Posts</h1>
      {userQuery.isSuccess && <p>User : {userQuery.data.name}</p>}
      {postsQuery.isSuccess && (
        <p>
          {postsQuery.data.map((post) => (
            <div key={post.id} onClick={() => setPostId(post.id)}>
              {post.title}
            </div>
          ))}
        </p>
      )}
    </div>
  );
}
