import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    
    #root {
        
    }

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
        font-size: 12px;
    }
  
  
    @media(min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
`

export default GlobalStyle;