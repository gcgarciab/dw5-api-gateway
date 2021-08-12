const { gql } = require('apollo-server');

const AccountsTypeDefs = gql `
  type Account {
    userId: String!
    balance: Int!
    lastChange: String!
  }

  type Query {
    accountByUserId(userId: String!): Account
  }
`;

module.exports = AccountsTypeDefs;