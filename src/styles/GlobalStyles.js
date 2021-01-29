import { createGlobalStyle } from 'styled-components';
import config from '../config.json';

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        list-style: none;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #D6E5E3;
    }

    ul {
        list-style: none;
    }

    label {
        font-family: 'Lato', sans-serif;
        font-size: 12px;
    }

    input {
        font-family: 'Lato', sans-serif;
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 7px;
        background: ${config.color.tertiary};
        padding-left: 5px;
    }

    select {
        height: 40px;
        background: ${config.color.tertiary};
        border: none;
        border-radius: 7px;
        padding-left: 5px;
    }
  
  
    @media(min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
`

export default GlobalStyle;