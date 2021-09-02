const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Book {
      authors: [String]
     description: String
     bookid: String
     image: String 
     link: String
     title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
  }

  type Auth {
    token: ID
    user: User
  }
  type Test {
    name: String!
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
  }


  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
    ): Auth
    addBook(
      title: String!
      authors: [String!]
      bookId: String!
      description: String!
      image: String!
    ): User
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
