import React from "react";
import * as S from "./style";
import appleWatch from './../../assets/appleWatch.png'
import Card from "../card";




export default function ThirdSection() {
    return (
        <S.Container>
            <S.Content>
                <S.TextSection>
                    <S.Title>Nossas maiores ofertas</S.Title>
                </S.TextSection>
                <S.CardSection>
                <Card img={appleWatch} productName="Apple Watch" category="Esportes" description="Esse é um relógio legal"/>
                <Card img={appleWatch} productName="Apple Watch" category="Esportes" description="Esse é um relógio legal"/>
                <Card img={appleWatch} productName="Apple Watch" category="Esportes" description="Esse é um relógio legal"/>
                <Card img={appleWatch} productName="Apple Watch" category="Esportes" description="Esse é um relógio legal"/>
                </S.CardSection>
                


            </S.Content>

        </S.Container>
    )
}

