import React from 'react';

import Header from '../../components/Header';

import {
  ContainerHome,
  TitleHome,
  MenuItem,
  MenuContainer,
  TitleContainer,
  WrapperHome,
} from '../../components/styles';

const Home: React.FC = () => {
  return (
    <ContainerHome>
      <WrapperHome>
        <Header />
        <TitleContainer>
          <TitleHome>PEDRO</TitleHome>
          <TitleHome className="second">DOMINICI</TitleHome>
        </TitleContainer>
      </WrapperHome>
    </ContainerHome>
  );
};

export default Home;
