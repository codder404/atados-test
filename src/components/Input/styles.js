import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LabelInput = styled.label`
  font-size: 1.3rem;
  color: #4A5568;
`;

export const Input = styled.input`
  width: 226px;
  height: 48px;
  background: #F7FAFC;
  border: 1px solid #CBD5E0;
  color: #A0AEC0;
  margin-right: 1.5rem;
  margin-top: 4px;
  padding-left: 1rem;
  font-size: 1.2rem;
  border-radius: 4px;
  outline: 0;

  @media (max-width: 960px) {
    width: 100%;
  }
`;