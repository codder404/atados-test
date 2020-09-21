import React from 'react';

import * as S from './styles';

function Input({ label, name }) {
  return (
    <S.Container>
      <S.LabelInput htmlFor={name}>{label}</S.LabelInput>
      <S.Input type="text" id={name} />
    </S.Container>
  )
}

export default Input;