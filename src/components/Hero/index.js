import React from 'react';

import Input from '../Input';
import { Button } from '../Button';

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
     <S.Main>
       <S.Form>
         <S.FormGroup>
           <Input name="origem" label="Origem" text="Origem" info="text"/>
           <Input name="destino" label="Destiono" text="Destino" info="text" />
           <Input name="date" label="Data de Ida/Retorno" text="Data de Ida/Retorno" info="date" />
           <Input name="pessoas" label="Número de pessoas" text="Número de pessoas" info="number" />
         </S.FormGroup>
        <S.FormBtn>
           <Button type="submit" primary big fontBig>Busque as viagens</Button>
        </S.FormBtn>
       </S.Form>
     </S.Main>
    </S.Container>
  )
}

export default Hero;