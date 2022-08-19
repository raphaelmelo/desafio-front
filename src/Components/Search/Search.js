import React, { useState } from 'react' 
import InputLabel from '@mui/material/InputLabel'; 
import * as Styled from './Search.Styled'   
import axios from "axios"; 
import {Typography} from '@mui/material';
 
export function Search() {
    const [user, setUser] = useState("");
    const [repo, setRepo] = useState("");
    const [branch, setBranch] = useState("");
    const [listRepos, setListRepos] = useState(); 
    const [listBranchs, setListBranchs] = useState(); 
    const [listCommits, setListCommits] = useState(); 
  
    const handleChange = (event) => {
        setRepo(false)
        setBranch(false)
        setUser(event.target.value); 

        axios({
            method: "get",
            url: `https://api.github.com/users/${event.target.value}/repos`,
            headers: { 
                Authorization: `Bearer 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`,
                "Content-Type": "application/json", 
            },
            auth: {
                username: user, 
            }})
            .then((response) => { 
                setListRepos(response.data);  
            })
    }; 

    const onClickRepo = (event) => { 
        setRepo(event.target.value)
        axios({
            method: "get",
            url: `https://api.github.com/repos/${user}/${event.target.value}/branches`,
            headers: { 
                Authorization: `Bearer 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`,
                "Content-Type": "application/json", 
            },
            auth: {
                username: user, 
            }
            })
            .then(function (response) { 
                setListBranchs(response.data) 
                console.log("branches" ,response.data);
            }) 
            .catch(function (error) { 
                console.log(error);
            }); 
    };   

    const onClickBranch = (event) => { 
        setBranch(event.target.value)
        axios({
            method: "get",
            url: `https://api.github.com/repos/${user}/${repo}/commits?sha=${event.target.value}`,
            headers: { 
                Authorization: `Bearer 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`,
                "Content-Type": "application/json", 
            },
            auth: {
                username: user, 
            }})
            .then(function (response) { 
                setListCommits(response.data) 
                console.log("Commits" ,response.data);
            }) 
            .catch(function (error) { 
                console.log(error);
            }); 
    };  

    return (
    <Styled.Wrapper>    
        <Styled.FormControl>
            <InputLabel>
                Usuário github
            </InputLabel>
            <Styled.Input value={user} onChange={handleChange}/> 
        </Styled.FormControl> 

        <Styled.WrapperLists>
        <Styled.List>
        {user !== "" && `Repositorios by ${user}:`}
            {repo && listRepos?.map((i) => {
                return (    
                    <Styled.Card>
                     <Typography variant="h6">{i.name}</Typography> 
                     <Styled.Button value={i.name} onClick={onClickRepo}>ver branchs</Styled.Button> 
                    </Styled.Card>
                )})}                
        </Styled.List> 
        <Styled.List>
        {branch && `Branchs:`} 
        {branch && listBranchs?.map((i) => {
                return ( 
                  <Styled.Card>
                      <Typography variant="h6">{i.name}</Typography> 
                      <Styled.Button value={i.name} onClick={onClickBranch}>Commits</Styled.Button> 
                    </Styled.Card>
                )})}             
        </Styled.List> 
        <Styled.List>
        {branch && `Commits:`} 
        {branch && listCommits?.map((i) => {
                return  (
                    <Styled.Card>  
                       <Typography variant="p">Mensagem: {i.commit.message}</Typography>
                       <Typography variant="p">SHA Commit: {i.sha}</Typography>
                    </Styled.Card>
                )})}              
        </Styled.List> 
        </Styled.WrapperLists>
  </Styled.Wrapper> 
  )
}
