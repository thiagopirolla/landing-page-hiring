import React, { useState } from 'react';
import * as S from './style'

export default function FormFourthSection() {
    const [email, setEmail] = useState("")
    return(
        <S.FormContainer>
        <S.Form >    
            <S.TxtInput type="text" id="firstName"  placeholder="Nome completo" onChange={(event) => {
                setEmail(event.target.value)
            }}/>              
            <S.TxtInput type="text" id="firstName"  placeholder="Telefone" onChange={(event) => {
                setEmail(event.target.value)
            }}/>     
            <S.EmailInput type="text" id="firstName" placeholder="E-mail" onChange={(event) => {
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

