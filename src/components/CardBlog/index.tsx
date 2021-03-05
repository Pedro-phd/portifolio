import React from 'react';

import { Container, Title, Description, SeeMore } from './styles';

interface ICardBlog {
  title: string;
  description: string;
  slug: string;
}

const CardBlog: React.FC<ICardBlog> = ({ title, description, slug }) => {
  return (
    <Container>
      <Title href={`/post/${slug}`}>{title}</Title>
      <Description>
        {description}
        <SeeMore href={`/post/${slug}`}>Ver Mais ...</SeeMore>
      </Description>
    </Container>
  );
};

export default CardBlog;
