import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_Book = gql`
mutation addBook(
  $title: String!
  $authors: [String!]
  $bookId: String!
  $description: String!
  $image: String!
) {
  addBook(
    title: $title
    authors: $authors
    bookId: $bookId
    description: $description
    image: $image
  ) {
    _id
  }
}
  
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
