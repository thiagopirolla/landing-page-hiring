import styled from "styled-components";
import { CheckCircle } from '@styled-icons/material'



export const GreenCheck = styled(CheckCircle)`
color: #2ECC71;
width: 1.3em;
`

export const Container = styled.div`
  padding: 15px 30px 15px 30px;
  background-color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  
`

export const TextSection = styled.div`
  margin-right: 30px;
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
    text-align: center;
    margin-right: 0;
  }
  
`

export const Title = styled.p`
  color: #282828;
  margin: 0;
  font-size: 2.7em;
  font-weight: 700;
  margin-top: 1.5em;

`;

export const Description = styled.p`
  color: #282828;
  font-size: 1.3em;
  margin-top: 35px;
`;

export const List = styled.div`
display: flex;
list-style-type: none;
justify-content: space-between;

&>li{
    padding-right: 10px;
    
}
`

