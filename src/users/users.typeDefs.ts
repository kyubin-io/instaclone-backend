const typeDefs = `#graphql
  type User {
    id: String!
    firstName: String!
    lastName: String
    username: String
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type Mutation {
    createAccount(
    firstName: String!
    lastName: String
    username: String
    email: String!
    password: String!
    ) : User
  }
  type Query {
    seeProfile(username: String): User
  }
`;
