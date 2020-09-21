import React from 'react';
import styled from 'styled-components';

import * as S from './styles';

const Hero = () => {
  return (
    <S.Container>
     <S.Header>
       <S.HeaderContent>
         <S.HeaderText>Viaje pelo mundo inteiro</S.HeaderText>
         <S.HeaderDescription>
           Aqui você encotra os melhores voos do mundo
         </S.HeaderDescription>
       </S.HeaderContent>
     </S.Header>
    </S.Container>
  )
}

export default Hero;