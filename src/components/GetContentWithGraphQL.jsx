import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query  {
    posts {
      id
      title
      body
    }
  }
`;




export const Posts = () => {
const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data?.posts?.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default Posts;