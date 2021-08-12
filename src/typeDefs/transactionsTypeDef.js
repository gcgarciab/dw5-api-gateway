const { gql } = require('apollo-server');

const TransactionsTypeDefs = gql `
  
  type Transaction {
    id: String!
    userIdOrigin: String!
    userIdDestiny: String!
    value: Int!
    date: String!
  }

  input TransactionInput {
    userIdOrigin: String!
    userIdDestiny: String!
    value: Int!
  }

  type Query {
    transactionsByUserId(userId: String!): [Transaction]
  }

  type Mutation {
    createTransaction(transaction: TransactionInput!): Transaction
  }
`;

module.exports = TransactionsTypeDefs;