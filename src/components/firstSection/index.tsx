import React from "react";
import * as S from "./style";
import { ReactComponent as Imagem2 } from './../../assets/imagem2.svg';



export default function FirstSection() {
  return (
    <S.Container>
      <S.Title>Promoções de Black Friday!!!!</S.Title>
      <S.description>
        Nessa Black Friday, não fique de fora das promoções mais em conta desse país!!
      </S.description>
      <S.Image><Imagem2 /></S.Image>
      
    </S.Container>
  );
}
