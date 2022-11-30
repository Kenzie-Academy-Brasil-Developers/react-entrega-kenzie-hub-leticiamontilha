import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
    --color-primary:#FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-grey-1:  #868E96;
    --color-grey-2: #343B41;
    --color-grey-3: #212529;
    --color-grey-4:  #121214;
    --color-black: #000;
    --color-white:  #FFFFFF;
    --feedback-sucess: #3FE864;
    --feedback-negative: #E83F5B;


    --text-1: 1rem; /* 16px */
    --text-2: 1.25rem; /* 20px */
}


body {
    font-family: 'Inter', sans-serif;
    background-color: var(--color-grey-4);

  }

  li,a {
    list-style-type: none;

  }
  button, input, select {
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }


`

export default GlobalStyle