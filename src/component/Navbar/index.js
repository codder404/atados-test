import React, { useState } from 'react';

import * as S from './styles';

function Navbar() {
  return (
    <S.Navbar>
      <S.NavbarContainer>
        <S.NavbarLogo to="/" onClick={handleClick}>
          
        </S.NavbarLogo>
        <S.MobileIcon>

        </S.MobileIcon>
        <S.NavbarMenu>
          <S.NavbarItems>
            <S.NavbarLink to="/expole">Explore</S.NavbarLink>
          </S.NavbarItems>
           <S.NavbarItems>
            <S.NavbarLink to="/expole">Sobre nós</S.NavbarLink>
          </S.NavbarItems>
           <S.NavbarItems>
            <S.NavbarLink to="/expole">Seguros</S.NavbarLink>
          </S.NavbarItems>
           <S.NavbarItems>
            <S.NavbarLink to="/expole">Hóteis</S.NavbarLink>
          </S.NavbarItems>
           <S.NavbarItems>
            <S.NavbarLink to="/expole">Viagens</S.NavbarLink>
          </S.NavbarItems>
        </S.NavbarMenu>
      </S.NavbarContainer>
    </S.Navbar>
  )
}

export default Navbar;