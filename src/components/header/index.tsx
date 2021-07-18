import React from "react";
import * as S from "./style";

export default function Header() {
  return (
    <S.Header>
      <S.Logo>Markethi</S.Logo>

      <S.NavbarRightElements>
        <a href="">
          <b>Promoções</b>
        </a>
        <a href="">
          <S.NavbarButton>Inscreva-se</S.NavbarButton>
        </a>
      </S.NavbarRightElements>
    </S.Header>
  );
}
