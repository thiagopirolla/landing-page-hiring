import React, { useState } from "react";
import * as S from "./style";


interface CardProps {
  img?: string
  productName: string
  category: string
  description: string
  imgSizePercent?: string

}

export default function Card({img, productName, category, description, imgSizePercent}: CardProps) {
const [shoppingCart, setShoppingCart] = useState<CardProps[]>([])
const newProduct = {
  productName: productName,
  category: category,
  description: description
} 

  return (
    <S.Card>
      <S.ImageCard  >
      <img src={img} alt="Apple Watch" style={{width: imgSizePercent}} />
      </S.ImageCard>
      
      <S.CardInfo>
        <S.CardProductName>{productName}</S.CardProductName>
        <S.CardCategory>{category}</S.CardCategory>
        <S.CardDescription>{description}</S.CardDescription>
        
      </S.CardInfo>
      <S.CardButton type="submit" value="Adicionar ao carrinho" onClick={(event) =>{
                setShoppingCart(shoppingCart => [...shoppingCart, newProduct])
                localStorage.setItem('products', JSON.stringify(shoppingCart))
                event.preventDefault()
                console.log(shoppingCart)
            }}/>
   
    </S.Card>
  );
}
