import React from 'react';

import { Container,Title,TitleBold,MenuItem,MenuContainer,TitleContainer,Wrapper } from './styles';
import Menu from '../../components/Menu'


const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Menu/>
        <TitleContainer>
          <Title>Pedro</Title><TitleBold>Dominici</TitleBold>
        </TitleContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;
