import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1.875rem;
  padding-left: 1.875rem;

  @media (max-width: 991px) {
    padding-right: 3.125rem;
    padding-left: 3.125rem;
  }
`;

export default GlobalStyle;