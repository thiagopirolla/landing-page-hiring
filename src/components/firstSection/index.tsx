import React from "react";
import * as S from "./style";
import { ReactComponent as Imagem2 } from './../../assets/imagem2.svg';
import Form from "../form";



export default function FirstSection() {
  return (
    <S.Container>
      <S.Title>Promoções de Black Friday!!!!</S.Title>
      <S.description>
        Nessa Black Friday, não fique de fora das promoções mais em conta desse país!!
      </S.description>

      <Form/>
      <S.Image><Imagem2 style={{width:"600", height:"460"}}/></S.Image>
      
    </S.Container>
  );
}
