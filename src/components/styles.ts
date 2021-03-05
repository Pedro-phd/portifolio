import styled from 'styled-components';

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
  color: white;
  font-size: 72px;
  text-align: center;
  font-weight: 700;
  @media screen and (max-width: 720px) {
    font-size: 48px;
  }
`;
export const PostContainer = styled.div`
  padding: 8px;
  max-width: 1200px;
  width: 100%;
  color: white;
  h1 {
    font-weight: 700;
    font-size: 36px;
  }
  h2 {
    font-weight: 700;
    font-size: 24px;
    color: white;
  }
  p {
    margin: 0;
  }
  blockquote {
    border-left: 10px solid #bd2445;
    margin: 0;
    padding: 12px 40px;
    background-color: #ef2d56;
    border-radius: 0 8px 8px 0;
    font-style: italic;
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
  code {
    padding: 12px;
    color: white;
    background: #bd2445;
    background: linear-gradient(45deg, #bd2445 0%, #ef2d56 100%);

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
export const TitleHome = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Megrim&display=swap');
  font-size: 144px;
  text-align: center;
  color: #ef2d56;
  font-family: 'Megrim', cursive;
  margin: 0;
  &.second {
    margin-top: -95px;
  }
  @media screen and (max-width: 720px) {
    font-size: 48px;
    &.second {
      margin-top: -30px;
    }
  }
`;
export const MenuItem = styled.a`
  font-size: 24px;
  color: black;
  text-decoration: none;
  color: white;
  @media screen and (max-width: 720px) {
    font-size: 16px;
    text-align: center;
  }
`;
export const MenuContainer = styled.div`
  display: flex;
  max-width: 386px;
  width: 100%;
  justify-content: space-between;
  margin-top: 54px;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
`;

export const WrapperHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
