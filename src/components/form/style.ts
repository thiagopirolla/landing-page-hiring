import styled from 'styled-components'

export const FormContainer = styled.div`
padding-bottom: 50px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center

`

export const Form = styled.form`
display: flex;
flex-direction: row;
justify-content: center;
align-items: space-around;
flex-wrap: wrap;
&>input{
    padding: 10px;
    border-radius:20px;

}
`

export const EmailInput = styled.input`
border: 2px solid #353238;
margin-right: 8px;
outline:none;
&: focus{
    border-color: #FAA916;
    color: none;
    box-shadow: 0 0 4px 0 #FAA916;
}
`

export const ButtonInput = styled.input`
border: 2px solid #353238;
font-weight: bold;
&: hover{
    background-color: #FAA916;
}
`


