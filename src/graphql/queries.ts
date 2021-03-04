import { gql } from 'graphql-request';

export const GET_POST = gql`
  query Artigos {
    blogs {
      title
      description
      articleContent {
        html
      }
      tags
      slug
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query MyQuery($slug: String) {
    blog(where: { slug: $slug }) {
      title
      description
      articleContent {
        html
      }
      tags
      slug
    }
  }
`;
