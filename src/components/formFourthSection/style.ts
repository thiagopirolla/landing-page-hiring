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

export const TxtInput = styled.input`
border: 1.5px solid #353238;
background-color: #FAA916;
margin-right: 8px;
margin-bottom: 20px;

outline: none;
width: 45.5%;
@media (max-width: 728px) {
    width: 100%;
   
  }

`
export const EmailInput = styled.input`
border: 1.5px solid #353238;
background-color: #FAA916;
margin-right: 8px;
margin-bottom: 20px;
outline: none;
width: 100%;



`


export const ButtonInput = styled.input`
border: 1px solid #222;
background-color: #222;
color: #fff;
cursor: pointer;
font-weight: bold;
-webkit-appearance: none;
&:hover{
    background-color: #222;
    color: #fff
}
`


