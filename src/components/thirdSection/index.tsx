import React from "react";
import * as S from "./style";
import appleWatch from './../../assets/appleWatch.png'
import tenisNike from './../../assets/tenisNike.png'
import galaxyS20 from './../../assets/galaxyS20.png'
import cameraNikon from './../../assets/cameraNikon.png'
import Card from "../card";




export default function ThirdSection() {
    // const [shoppingCart, setShoppingCart] = useState<CardProps[]>([])
    return (
        <S.Container>
            <S.Content>
                <S.TextSection>
                    <S.Title>Nossas maiores ofertas</S.Title>
                </S.TextSection>
                <S.CardSection>
                <Card img={appleWatch} productName="Apple Watch" category="Esportes" description="30% de desconto" imgSizePercent="90%"/>
                <Card img={tenisNike} productName="Tênis Nike" category="Esportes" description="50% de desconto" imgSizePercent="100%"/>
                <Card img={galaxyS20} productName="Galaxy S20" category="Eletrônicos" description="25% de desconto" imgSizePercent="70%"/>
                <Card img={cameraNikon} productName="Câmera Nikon" category="Eletrônicos" description="80% de desconto" imgSizePercent="70%"/>
                </S.CardSection>
                


            </S.Content>

        </S.Container>
    )
}

