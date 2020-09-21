import React, { useState } from 'react';

import Input from '../Input';
import { Button } from '../Button';

import * as S from './styles';

const Hero = () => {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [date, setDate] = useState('');
  const [pessoas,setPessoas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrigem('');
    setDestino('');
    setDate('');
    setPessoas('');

    console.log(`Origem: ${origem}`);
    console.log(`Destino: ${destino}`);
    console.log(`Data: ${date}`);
    console.log(`Pessoas: ${pessoas}`)

  }

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
       <S.Form onSubmit={handleSubmit}>
         <S.FormGroup>
           <Input 
            name="origem" 
            label="Origem" 
            text="Origem" 
            info="text"
            value={origem}
            onChange={e => setOrigem(e.target.value)}
          />
           
           <Input 
            name="destino" 
            label="Destiono" 
            text="Destino" 
            info="text" 
            value={destino}
            onChange={e => setDestino(e.target.value)}
          />

           <Input 
            name="date" 
            label="Data de Ida/Retorno" 
            text="Data de Ida/Retorno" 
            info="text" 
            value={date}
            onChange={e => setDate(e.target.value)}
          />

           <Input 
            name="pessoas" 
            label="Número de pessoas" 
            text="Número de pessoas" 
            info="text" 
            value={pessoas}
            onChange={e => setPessoas(e.target.value)}
          />

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