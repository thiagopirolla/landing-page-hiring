import styled from "styled-components";


export const CardInfo = styled.div`
position: absolute;
text-align: center;
bottom: 0;
opacity:0;
width: 100%;
padding-bottom: 16px;
padding-top: 16px;
color:#222;
background-color: #FAA916;
transition: 0.3s;
`

export const CardButton = styled.a`
background: #FAA916;
color: #222;
font-weight: 700;
border-radius: 35px;
padding: 10px 45px;
text-decoration: none;
transition: 0.3s ease;
margin-bottom: 30px;
`

export const Card = styled.div`
margin: 15px 30px 15px 30px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:14em;
height:auto;

background: #fff;
border-radius: 20px;
position: relative;
box-shadow: 5px 20px 30px rgba(0,0,0,0.4);

& img {
  width: 100%;
  transition: 0.7s;
}

&:hover{
background: #222;

& img{
  transform: scale(1.1);
  transform: translateY(-80px);
}
&:hover ${CardInfo}{

opacity: 1;
transform: translateY(-40px);
}

&:hover ${CardButton}{
  background: #222;
  color: #FAA916;
  border: 1px solid #FAA916;
  transform: translateY(20px);
}

}
`



export const CardProductName = styled.p`
font-size: 1rem;
font-weight: 700;
margin: 0;
`

export const CardCategory = styled.p`
font-size: 0.7rem;
font-weight: 900;
margin: 0;
`

export const CardDescription = styled.p`
font-size: 1rem;
margin: 0;
`

