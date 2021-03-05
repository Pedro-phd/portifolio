import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import {
  Container,
  Title,
  Wrapper,
  PostContainer,
} from '../../components/styles';
import { useRouter } from 'next/router';
import Header from '../../components/Header/index';

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

const Post: React.FC<any> = ({ data }) => {
  const router = useRouter();
  console.log(data);

  if (router.isFallback) return null;
  return (
    <Container>
      <Wrapper>
        <Header />
        <Title>{data.blog.title}</Title>
        <PostContainer>
          {ReactHtmlParser(data.blog.articleContent.html)}
        </PostContainer>
      </Wrapper>
    </Container>
  );
};

export default Post;
