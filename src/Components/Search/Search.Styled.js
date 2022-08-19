import Styled from 'styled-components'
import {Input as InputMui, Button as ButtonMui, Card as CardMui, List as ListMui , FormControl as FormControlMui } from '@mui/material';
 

export const Wrapper = Styled.div`
     width: 100vw; 
     min-height: calc(100vh - 30px);
     height: 100%;
    display:flex;
    align-items: center;
   
    flex-direction:column;
    background: #E0C9A6;
    padding-top: 30px  ;

`;
export const FormControl = Styled(FormControlMui)`
    width: 40%;  
    height:100px;
 
     
`;

export const Input = Styled(InputMui)`
    height: 42px;
    width: 100%;

   
`;

export const WrapperLists = Styled.div`
    display:flex; 
    flex-wrap:wrap;
    gap: 20px;  
    width: 80%;
    justify-content:space-evenly;

   
`;

export const List = Styled.ul`
    display:flex;  
    flex-direction:column;
    gap: 20px;
    list-style-type: none;
    align-items: center; 
    height: 60vh;
    overflow:auto;
    width: 30%;
    max-width: 350px;

   
`;
export const Card = Styled.div`
    display:flex; 
    flex-wrap:wrap;
    gap: 0px 5px;  
    align-items: center; 
    justify-content:center;
    

   
`;
 
export const Button = Styled(ButtonMui)`
    border-radius: 35px;
    background:#C7CBC490;
    color: "#010101";
    padding: 2px 6px;
    font-size: 10px;
    

   
`;
 