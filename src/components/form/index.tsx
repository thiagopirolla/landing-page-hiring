import React from 'react';
import * as S from './style'

export default function Form() {
    return(
        <S.FormContainer>
        <S.Form >
            <S.EmailInput type="email" placeholder="email@exemplo.com" />
            <S.ButtonInput type="submit" value="Receber ofertas"/>
        </S.Form>
        </S.FormContainer>
    )
}