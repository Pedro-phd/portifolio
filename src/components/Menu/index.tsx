import React from 'react';

import { MenuContainer, MenuItem } from './styles';

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <MenuItem href="/portifolio">Portifolio</MenuItem>
      <MenuItem href="/blog">Blog</MenuItem>
      <MenuItem href="/contato">Contato</MenuItem>
    </MenuContainer>
  );
};

export default Menu;
