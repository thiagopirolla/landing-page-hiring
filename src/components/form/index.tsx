import React, { useState } from 'react';
import * as S from './style'

export default function Form() {
    const [email, setEmail] = useState("")
    return(
        <S.FormContainer>
        <S.Form >
            <S.EmailInput type="email" placeholder="email@exemplo.com" onChange={(event) => {
                setEmail(event.target.value)
            }}/>
            <S.ButtonInput type="submit" value="Receber ofertas" onClick={(event) =>{
                localStorage.setItem('email', email)
                event.preventDefault()
                console.log(email)
            }}/>
        </S.Form>
        </S.FormContainer>
    )
}

