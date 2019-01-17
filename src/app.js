import { ApolloServer } from 'apollo-server';

import typeDefs from './schema/index.gql';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: process.env.NODE_ENV !== 'production',
});

server.listen({
  port: process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 4000
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
