// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String
    email: String
  }
  type Auth {
    token: ID!
    user: User
}

type Query {
  user: User
}
`;

module.exports = typeDefs;