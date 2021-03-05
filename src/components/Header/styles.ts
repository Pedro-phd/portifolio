import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: calc(100vw - 44px);
  padding: 0 44px;
  display: flex;
  justify-content: space-between;
  margin-top: 26px;
`;
export const Title = styled.h1`
  font-size: 24px;
  color: #ef2d56;
  margin: 0;
  font-weight: 700;
`;
export const Menu = styled.a`
  color: white;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  @media screen and (max-width: 720px) {
    font-size: 12px;
  }
`;
export const MenuContainer = styled.div`
  display: flex;
  max-width: 386px;
  width: 100%;
  justify-content: space-between;
`;
