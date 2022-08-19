import Styled from 'styled-components'
import {Input as InputMui, List as ListMui , FormControl as FormControlMui } from '@mui/material';
 

export const Wrapper = Styled.div`
    background-color:#fff;
     width: 100vw;

    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction:column;
   
`;
export const FormControl = Styled(FormControlMui)`
    width: 40%; 
   
`;

export const Input = Styled(InputMui)`
     height: 42px;
    width: 100%;

   
`;

export const List = Styled.ul`
    

    display:flex; 
    flex-wrap:wrap;

   
`;


