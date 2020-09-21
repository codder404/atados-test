import React, { useState } from 'react';
import * as FaIcon from 'react-icons/fa';

import logo from '../../assets/icons/Logo.svg';

import * as S from './styles';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <S.Navbar>
      <S.NavbarContainer>
        <S.NavbarLogo to="/">
          <S.LogoImg src={logo} alt="Atatos" />
        </S.NavbarLogo>
        <S.MobileIcon onClick={handleClick}>
          {click ? <FaIcon.FaTimes /> : <FaIcon.FaBars />}
        </S.MobileIcon>
        <S.NavbarMenu onClick={handleClick} click={click}>
          <S.NavbarItems>
            <S.NavbarLink href="/">Explore</S.NavbarLink>
          </S.NavbarItems>
          <S.NavbarItems>
            <S.NavbarLink href="/">Sobre nós</S.NavbarLink>
          </S.NavbarItems>
          <S.NavbarItems>
            <S.NavbarLink href="/">Seguros</S.NavbarLink>
          </S.NavbarItems>
           <S.NavbarItems>
            <S.NavbarLink href="/">Hóteis</S.NavbarLink>
          </S.NavbarItems>
          <S.NavbarItems>
            <S.NavbarLink href="/">Viagens</S.NavbarLink>
          </S.NavbarItems>
          <S.NavbarItems>
            <S.NavbarLink href="/">Login</S.NavbarLink>
          </S.NavbarItems>
        </S.NavbarMenu>
      </S.NavbarContainer>
    </S.Navbar>
  )
}

export default Navbar;