import styled from 'styled-components';
import { Container } from '../../GlobalStyles';


export const Navbar = styled.nav`
  background-image: linear-gradient(#A0AEC0 100%, #718096 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  font-size: 1.2rem;
  position: sticky;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  flex-grow: 1;

  ${Container}
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  margin-left: 4rem;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  margin-right: 0.5rem;
  width: 4rem;

  @media (max-width: 960px) {
    margin-right: -10.5rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: #fff;

  @media (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  list-style: none;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background-image: linear-gradient(#A0AEC0 100%, #718096 100%);
  }
`;

export const NavbarItems = styled.li`
  height: 20px;
  &:nth-of-type(5) {
   margin-left: auto;
  }

  &:nth-of-type(6) {
    padding: 1.3rem;
    margin-right: 1rem;
    font-size: 1rem;
    font-weight: bold;
    background: transparent;
    display: flex;
    align-items: center;
    border: 1px solid #fff;

    &:hover {
      filter: brightness(90%);
    }
  }

  @media (max-width: 960px) {
    margin-top: 1rem;

   &:nth-of-type(5) {
     margin-left: 0;
   }

   &:nth-of-type(6) {
      padding: 0px;
      margin-right: 0px;
      font-size: 1rem;
      font-weight: normal;
      background: none;
      display: block;

      &:hover {
        filter: brightness(90%);
      }
   }
  }
`;

export const NavbarLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  height: 100%;

  @media (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    height: 100%;
    display: table;
  }
`;
