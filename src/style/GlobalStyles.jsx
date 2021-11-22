import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif;
    }

    html {
        
        @media (max-width: 67.5rem){
            font-size: 93.75%;
        }

        @media (max-width: 45rem){
            font-size: 87.5%;
        }
    }

    body {
        line-height: 1.5;

        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.text};
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Martel', serif;
        color: ${(props) => props.theme.heading};
    }

    p, span, button,  a{
        font-weight: 400;
        font-size: 1rem;
    }

`;
