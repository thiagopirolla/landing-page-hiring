import React from "react";
import * as S from "./style";


interface CardProps {
  img: string
  productName: string
  category: string
  description: string

}

export default function Card({img, productName, category, description}: CardProps) {
  return (
    <S.Card>
      <div style={{width:"224px", height:"264.98px"}}  >
      <img src={img} alt="Apple Watch" />
      </div>
      
      <S.CardInfo>
        <S.CardProductName>{productName}</S.CardProductName>
        <S.CardCategory>{category}</S.CardCategory>
        <S.CardDescription>{description}</S.CardDescription>
        
      </S.CardInfo>
      <S.CardButton href="www.google.com">Compre agora!</S.CardButton>
   
    </S.Card>
  );
}
