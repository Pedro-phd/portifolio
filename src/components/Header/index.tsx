import React from 'react';

import { HeaderContainer, Title, MenuContainer, Menu } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>phd</Title>
      <MenuContainer>
        <Menu href="/portifolio">Portifolio</Menu>
        <Menu href="/blog">Blog</Menu>
        <Menu href="/contato">Contato</Menu>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
