import React from "react";
import * as S from "./style";
import { ReactComponent as ImageSection } from './../../assets/imageSecondSection.svg';


export default function SecondSection() {
    return (
        <S.Container>
            <S.Content>
                <S.TextSection>
                    <S.Title>Ofertas e descontos atualizados</S.Title>
                    <S.Description>Nós, da Markethi, trazemos em tempo real atualizações sobre os preços de nossos produtos nessa black friday.</S.Description>
                    <S.List>

                        <strong><S.GreenCheck />Confiável</strong>
                        <strong><S.GreenCheck />Entrega rápida</strong>
                        <strong><S.GreenCheck />Melhores preços</strong>
                    </S.List>
                </S.TextSection>
             
                    <ImageSection style={{minWidth: '20em', width: '40%', height: '40%' }} />
              



            </S.Content>

        </S.Container>
    )
}

