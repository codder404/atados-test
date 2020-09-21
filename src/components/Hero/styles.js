import styled from 'styled-components';

export const Container = styled.div `
 background-image: linear-gradient(#A0AEC0 100%, #718096 100%);
  height: 60vh;
`;

export const Header = styled.section`
 display: flex;
 flex-direction: column;

 @media (max-width: 960px) {
   padding: 1rem;
 }
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  text-align: center;
`;

export const HeaderText = styled.strong`
  font: 700 3.6rem Roboto;
  line-height: 4.2rem;
  color: #FFF;

  @media (max-width: 960px) {
    font-size: 3rem;
  }
`;

export const HeaderDescription = styled.p`
  font-size: 1.6rem;
  line-height: 2.6rem;
  margin-top: 2.4rem;
  color: #AAFAFF;
`;

export const Main = styled.main``;

export const Form = styled.form``;

export const FormGroup = styled.div``;