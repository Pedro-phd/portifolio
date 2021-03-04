import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(
  process.env.GRAPHQL_HOST,
  // 'https://api-eu-central-1.graphcms.com/v2/ckllgy4keu03701xrbxxue6s8/master',
  {
    headers: {
      authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
    },
  }
);

export default client;
