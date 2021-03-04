import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import { Container, Title, Wrapper } from '../blog/styles';
import { PostContainer } from './styles';
import { useRouter } from 'next/router';
import Menu from '../../components/Menu/index';

import { GET_POST_BY_SLUG, GET_POST } from '../../graphql/queries';
import client from '../../graphql/client';

export async function getStaticPaths() {
  const { blogs } = await client.request(GET_POST);

  const paths = blogs.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

export const getStaticProps = async ({ params }) => {
  const data = await client.request(GET_POST_BY_SLUG, {
    slug: `${params?.slug}`,
  });

  if (!data) return { notFound: true };

  return {
    revalidate: 60, // once per day
    props: {
      data,
    },
  };
};

const Post: React.FC = ({ data }) => {
  const router = useRouter();
  console.log(data);

  if (router.isFallback) return null;
  return (
    <Container>
      <Wrapper>
        <Menu />
        <Title>{data.blog.title}</Title>
        <PostContainer>
          {ReactHtmlParser(data.blog.articleContent.html)}
        </PostContainer>
      </Wrapper>
    </Container>
  );
};

export default Post;
