import React from 'react';
import Link from 'next/link';

import { HeaderContainer, Title, MenuContainer } from './styles';

import { Button, Menu, MenuItem } from '@material-ui/core';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <HeaderContainer>
      <Title>phd</Title>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href="/portifolio">
          <MenuItem onClick={handleClose}>Portifolio</MenuItem>
        </Link>
        <Link href="/blog">
          <MenuItem onClick={handleClose}>Blog</MenuItem>
        </Link>
        <Link href="/contato">
          <MenuItem onClick={handleClose}>Contato</MenuItem>
        </Link>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
