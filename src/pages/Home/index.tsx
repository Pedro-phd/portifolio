import React from 'react';

import {
  ContainerHome,
  TitleHome,
  TitleBold,
  MenuItem,
  MenuContainer,
  TitleContainer,
  WrapperHome,
} from '../../components/styles';
import Menu from '../../components/Menu';

const Home: React.FC = () => {
  return (
    <ContainerHome>
      <WrapperHome>
        <Menu />
        <TitleContainer>
          <TitleHome>Pedro</TitleHome>
          <TitleBold>Dominici</TitleBold>
        </TitleContainer>
      </WrapperHome>
    </ContainerHome>
  );
};

export default Home;
