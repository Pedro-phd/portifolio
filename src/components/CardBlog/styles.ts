import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 12px;
  border-bottom: 1px solid #0cce6b;
  @media screen and (max-width: 720px) {
    max-width: 85%;
  }
`;
export const Title = styled.a`
  font-size: 36px;
  font-weight: 700;
  text-align: left;
  color: #0cce6b;
  margin: 0;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  &:hover {
    color: #ef2d56;
  }
  @media screen and (max-width: 720px) {
    font-size: 24px;
  }
`;
export const Description = styled.p`
  font-size: 18px;
  color: white;
  text-align: left;
  margin: 0;
  @media screen and (max-width: 720px) {
    font-size: 12px;
  }
`;
export const SeeMore = styled.a`
  font-size: 18px;
  color: #0cce6b;
  text-decoration: none;
  margin-left: 10px;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #ef2d56;
  }
  @media screen and (max-width: 720px) {
    font-size: 12px;
  }
`;
