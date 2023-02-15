import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
 }

::placeholder {
  text-align: center;
}

  html,body,#root {
    min-height: 100%;
  }

  body {
    background-image: url(https://images6.alphacoders.com/985/985806.png);
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 14px;
    
  }

  body,input,button {
  
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button{
    cursor: pointer;
  }

`;
