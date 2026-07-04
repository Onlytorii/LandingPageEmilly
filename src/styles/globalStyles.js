import { createGlobalStyle } from "styled-components";

/**
 * Estilos globais complementares ao Tailwind — usados principalmente
 * para importação de fontes e reset fino que o Tailwind Preflight não cobre.
 */
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Figtree:wght@400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

::selection {
  background-color: #A8C9EF;
  color: #162E51;
}
`;

export default GlobalStyles;