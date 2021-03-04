import styled from 'styled-components';

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
