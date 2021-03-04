import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;
export const Title = styled.h1`
  color: #222222;
  font-size: 72px;
  text-align: center;
  font-weight: bold;
  @media screen and (max-width: 720px) {
    font-size: 48px;
  }
`;
export const PostContainer = styled.div`
  padding: 8px;
  max-width: 1200px;
  width: 100%;
  h1 {
    font-weight: bold;
    font-size: 36px;
  }
  h2 {
    font-weight: bold;
    font-size: 24px;
  }
  p {
    margin: 0;
  }
  blockquote {
    border-left: 1px solid #222222;
    margin: 0;
    padding: 12px 40px;
    background-color: #f7f7f7;
    border-radius: 0 0 4px;
    font-style: italic;
    font-size: 16px;
    font-weight: bold;
    color: #4a4a4a;
  }
  code {
    padding: 12px;
    color: white;
    background-color: #000921;
    border-radius: 4px;
    display: block;
    margin: 12px 0;
  }
`;
export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const FadeInAnimation = keyframes`
    from { 
        opacity: 0;
        letter-spacing: 10px; 
        }
    to { 
        opacity: 1;
        letter-spacing: 0;
        }
`;
const FadeInAnimationMenu = keyframes`
    from { 
        opacity: 0;
        }
    to { 
        opacity: 1;
        }
`;
export const TitleHome = styled.h1`
  font-size: 72px;
  text-align: center;
  color: #222222;
  display: inline-block;
  animation-name: ${FadeInAnimation};
  animation-duration: 4s;
  animation-iteration-count: unset;
  @media screen and (max-width: 720px) {
    font-size: 48px;
  }
`;
export const TitleBold = styled.h1`
  font-weight: 700;
  font-size: 72px;
  text-align: center;
  color: #222222;
  display: inline-block;
  animation-name: ${FadeInAnimation};
  animation-duration: 4s;
  animation-iteration-count: unset;
  @media screen and (max-width: 720px) {
    font-size: 48px;
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
export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const WrapperHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
