import React, { useState } from 'react';

import logo from '../../assets/icons/Logo.svg';

import * as S from './styles';

function Navbar() {
  return (
    <S.Navbar>
      <S.NavbarContainer>
        <S.NavbarLogo to="/">
          <S.LogoImg src={logo} alt="Atatos" />
        </S.NavbarLogo>
        <S.MobileIcon>

        </S.MobileIcon>
        <S.NavbarMenu>
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
        </S.NavbarMenu>
      </S.NavbarContainer>
    </S.Navbar>
  )
}

export default Navbar;