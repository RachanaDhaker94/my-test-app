import React from 'react';
import { useQuery, gql } from '@apollo/client';



const GET_HELLO = gql`
query {
  hello
}
`;

export const ShowHello = () => {
  const { data } = useQuery(GET_HELLO);

  return(
    <div>
      {data?.hello}
    </div>
  )
};

export default Posts;