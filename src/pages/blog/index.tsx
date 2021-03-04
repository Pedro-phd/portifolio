import React from 'react';

import { Container, Title, Wrapper } from './styles';
import Menu from '../../components/Menu';
import CardBlog from '../../components/CardBlog';

import { GET_POST } from '../../graphql/queries';
import client from '../../graphql/client';

const Blog: React.FC<any> = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Wrapper>
        <Menu />
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

export const getStaticProps = async () => {
  const data = await client.request(GET_POST);

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 24, // update once per day
  };
};
