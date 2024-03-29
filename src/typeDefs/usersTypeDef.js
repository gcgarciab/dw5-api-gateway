const { gql } = require('apollo-server');

const UsersTypeDefs = gql `
  
  type Tokens {
    refresh: String!
    access: String!
  }

  type Access {
    access: String!
  }

  input CredentialsInput {
    username: String!
    password: String!
  }

  type Mutation {
    authenticate(credentials: CredentialsInput): Tokens!
    refreshToken(refresh: String!): Access!
  }
`;

module.exports = UsersTypeDefs;