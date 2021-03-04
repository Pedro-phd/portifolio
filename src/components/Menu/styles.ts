import styled, { keyframes } from 'styled-components';

export const Container = styled.div``;
const FadeInAnimationMenu = keyframes`
    from { 
        opacity: 0;
        }
    to { 
        opacity: 1;
        }
`;
export const MenuItem = styled.a`
  font-size: 24px;
  animation-name: ${FadeInAnimationMenu};
  animation-duration: 5s;
  animation-iteration-count: unset;
  transition: all 0.5s ease-in-out;
  color: black;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #ea4335;
  }
`;
export const MenuContainer = styled.div`
  display: flex;
  width: 346px;
  justify-content: space-between;
  margin-top: 38px;
`;
