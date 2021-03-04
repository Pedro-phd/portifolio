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
  color: #222222;
  font-size: 72px;
  text-align: center;
  font-weight: bold;
  @media screen and (max-width: 720px) {
    font-size: 48px;
  }
`;
