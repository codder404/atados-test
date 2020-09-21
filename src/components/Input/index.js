import React from 'react';

import * as S from './styles';

function Input({ label, name, text, info }) {
  return (
    <S.Container>
      <S.LabelInput htmlFor={name}>{label}</S.LabelInput>
      <S.Input type={info} id={name} placeholder={text} />
    </S.Container>
  )
}

export default Input;