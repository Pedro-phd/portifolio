import React from 'react';

import { Container, Title, Wrapper } from '../../components/styles';
import CardBlog from '../../components/CardBlog';
import Header from '../../components/Header';

import { GET_POST } from '../../graphql/queries';
import client from '../../graphql/client';

const Blog: React.FC<any> = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Title>Blog</Title>
        {data.blogs.map((post) => {
          return (
            <CardBlog
              title={post.title}
              description={post.description}
              slug={post.slug}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  const data = await client.request(GET_POST);

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
