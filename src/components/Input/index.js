import React from 'react';

import * as S from './styles';

function Input({ label, name, text, info, ...rest }) {
  return (
    <S.Container>
      <S.LabelInput htmlFor={name}>{label}</S.LabelInput>
      <S.Input type={info} id={name} placeholder={text} {...rest} />
    </S.Container>
  )
}

export default Input;