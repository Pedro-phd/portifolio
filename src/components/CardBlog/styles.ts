import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  max-height: 152px;
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
  padding: 20px;
  border-radius:2px
  -webkit-box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.05);
`;
export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: left;
  color: #222222;
  margin: 0;
`;
export const Description = styled.p`
  font-size: 18px;
  color: #222222;
  text-align: left;
  margin: 0;
`;
export const SeeMore = styled.a`
  font-size: 18px;
  color: #0454cc;
  text-decoration: none;
  margin-left: 10px;
`;
