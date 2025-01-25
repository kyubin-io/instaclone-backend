import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "graphql-tools";

const loadedTypes = loadFilesSync(`$(__dirname)/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(`$(__dirname)/**/*.queries,mutation.js`);

const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

console.log(schema);

export default schema;
