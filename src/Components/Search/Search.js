import React, { useEffect, useState } from 'react' 
import InputLabel from '@mui/material/InputLabel'; 
import * as Styled from './Search.Styled'   
import axios from "axios"; 
import { Button, Typography } from '@mui/material';
 
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
            }
            })
            .then(function (response) { 
                setListRepos(response.data) 
                console.log("repos" ,response.data);
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
            }
            })
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
        <Styled.FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
                Usuário github
            </InputLabel>
            <Styled.Input
                value={user} 
                onChange={handleChange}
                id="input-with-icon-adornment" 
            /> 
        </Styled.FormControl>
 
        <Styled.WrapperLists>
        <Styled.List>
        {user !== "" && `Repositorios by ${user}:`}
            {listRepos?.map((i) => {
                return (    
                    <Styled.Card>
                     <Typography variant="h6">{i.name}</Typography> 
                     <Button 
                     size="small" 
                     value={i.name} 
                     onClick={onClickRepo}
                     style={{
                        borderRadius: 35,
                        backgroundColor: "#C7CBC490",
                        color: "#010101",
                        padding: "2px 6px",
                        fontSize: "10px"
                    }}>
                        ver branchs</Button> 
                    </Styled.Card>
                )
            })}                
        </Styled.List> 
        <Styled.List>
        {repo && `Branchs do ${repo}:`} 
        {listBranchs?.map((i) => {
                return (<>
                  <Styled.Card>
                  <Typography variant="h6">{i.name}</Typography> 
                     <Button
                     style={{
                        borderRadius: 35,
                        backgroundColor: "#C7CBC490",
                        color: "#010101",
                        padding: "2px 6px",
                        fontSize: "10px"
                    }}
                      size="small" 
                      value={i.name} 
                      onClick={onClickBranch}>
                        ver commits
                        </Button> 
                    </Styled.Card>
                    </>)
            })}             
        </Styled.List> 
        <Styled.List>
        {branch && `Commits:`} 
        {listCommits?.map((i) => {
                return  (<>
                    <Styled.Card>
                        
                       <Typography variant="h6">  </Typography> 
                       <Typography variant="p">Mensagem: {i.commit.message}</Typography>
                       <Typography variant="p">SHA: {i.sha}</Typography>
                       </Styled.Card>
                      </>)
               
            })}              
        </Styled.List> 
        </Styled.WrapperLists>
            

           
  </Styled.Wrapper> 
  )
}
