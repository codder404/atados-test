import styled from 'styled-components';

export const Button = styled.button`
  background: ${({primary}) => (primary ? "#667EEA" : "#AAFAFF")};
  padding: ${({big}) => (big ? " 	0.875rem 1.125rem" : " 	0.625rem 1rem")};
  font-size: ${({fontBig}) => (fontBig ? "1.125rem" : "1rem")};
  border-radius: 4px;
  color: #fff;
  white-space: nowrap;
  outline: 0;
  border: 0;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({primary}) => (primary ? "#AAFAFF" : "#667EEA")};
    color: #222;
  }
`;