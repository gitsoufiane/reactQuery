import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const POST_URL = 'http://localhost:3001/';
export const fetchPosts = async ({ queryKey }) => {
  const [, userId] = queryKey;
  const posts = axios
    .get(`${POST_URL}posts?userId=${userId}`)
    .then((res) => res.data);
  return posts;
};

export const fetchPost = async ({ queryKey }) => {
  const [, postId] = queryKey;
  const promise = axios
    .get(`${POST_URL}posts/${postId}`)
    .then((res) => res.data);

  return promise;
};
const fetchUser = async ({ queryKey }) => {
  const [, email] = queryKey;
  const promise = axios
    .get(`${POST_URL}users?email=${email}`)
    .then((res) => res.data[0]);
  return promise;
};

const postInitialData = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
];

export const usePosts = ({ userId = 1 } = {}) => {
  const queryClient = useQueryClient();
  return useQuery(['posts', userId], fetchPosts, {
    enabled: !!userId,
    initialData: postInitialData,
    cacheTime: Infinity,
    onSuccess: (data) =>
      data.forEach((post) => queryClient.setQueryData(['post', post.id], post)),
    onError: (error) => console.log(error),
    onSettled: (data, error) => console.log({ data, error }),
  });
};

export const usePost = ({ postId = '' } = {}) => {
  const queryClient = useQueryClient();
  const cache = queryClient.getQueryData(['posts', 1]);
  return useQuery(['post', postId], fetchPost, {
    // use cache to access initial data from post list
    initialData: () => {
      return cache?.find((post) => post.id === postId);
    },
  });
};

export const useUser = ({ email = '' } = {}) =>
  useQuery(['user', email], fetchUser);
