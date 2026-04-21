//Importar a biblioteca styled-components associando a createGlobalStyle

import { createGlobalStyle } from "styled-components";

// Criar uma constante com as definições de createGlobalSyle
// Esses definições nada mais são do que o estilo CSS aplicado no JavaScript
// a partir da biblioteca do React

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  body {
    width: 100vw; //Para ocupar todo o espaco da tela 
    height:100vh;
    display:flex;
    justify-content:center;
    background-color: #f2f2f2;
  }
  `;
 
 // O estilo definido no arquivo global.js, deve ser exportada a constante 
 // global para que o resto do código-fonte tenha acesso

  export default Global;

