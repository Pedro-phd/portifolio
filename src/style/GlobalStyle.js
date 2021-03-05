/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    *{
        font-family: 'PT Sans', sans-serif;
        font-weight:400;
    }
    body{
        background: rgb(0,0,0);
        background: linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(13,13,13,1) 100%);
        background-repeat:no-repeat;
        background-attachment:fixed;
    }
`;
export default GlobalStyle