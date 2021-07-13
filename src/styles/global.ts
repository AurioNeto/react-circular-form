import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: linear-gradient(243.19deg, #59C571 0.36%, rgba(89, 197, 113, 0) 100%);
    --dashboard: rgba(38, 121, 66, 0.65);
    --green-light: #59C571;
    --grey: #E5E5E5;
    --white: #FFFFFF;
    --text: #544747;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--text);
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`