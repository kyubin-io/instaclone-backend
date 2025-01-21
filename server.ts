import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "dotenv/config";

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

    type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => "hhhhh",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = Number(process.env.PORT);

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`🚀  Server ready at: ${url}`);
