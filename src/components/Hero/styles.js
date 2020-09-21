import styled from 'styled-components';

export const Container = styled.div `
 background-image: linear-gradient(#A0AEC0 100%, #718096 100%);
  height: 70vh;
  width: 100vw;
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

export const Main = styled.main`
  background: #fff;
  width: 100%;
  height: 45vh;
  max-width: 74rem;
  border-radius: 4px;
  margin: 3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;

  @media (max-width: 960px) {
    overflow: auto;
  }
`;

export const Form = styled.form`
  
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const FormInputRadio = styled.div`
  
`;

export const FormBtn = styled.div`
  margin-top: 2rem;
  background: #EDF2F7;

  > button {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 58.4rem;

    @media (max-width: 960px) {
      margin-left: 11.4rem;
    }
  }
`;