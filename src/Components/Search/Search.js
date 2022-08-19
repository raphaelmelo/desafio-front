import React, { useEffect, useState } from 'react' 
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import * as Styled from './Search.Styled'   
import axios from "axios"; 

export function Search() {
    const [user, setUser] = useState("raphaelmelo");
    const [repo, setRepo] = useState("");
    const [listRepos, setListRepos] = useState(); 
    const [listBranchs, setListBranchs] = useState(); 

    console.log(user)
    useEffect(() => {
        axios({
            method: "get",
            url: `https://api.github.com/users/${user}/repos`,
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
            .catch(function (error) { 
                console.log(error);
            });  
    }, [user]) 

    const handleChange = (event) => {
        setUser(event.target.value); 
        console.log(event.target.value) 
    }; 

    const onClickRepo = (event) => { 
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

    const onClickBrach = (event) => { 
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

    return (
    <Styled.Wrapper>    
        <Styled.FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
                Digite seu usuário github
            </InputLabel>
            <Styled.Input
                value={user} 
                onChange={handleChange}
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                }
            />
        </Styled.FormControl>
        { listRepos && <h2>Veja:</h2>} 
        <ul>
            {listRepos?.map((i) => {
                return <li>{i.name} <button value={i.name} onClick={onClickRepo}>ver branchs</button></li>
            })}

            {listBranchs?.map((i) => {
                return <li>{i.name} <button value={i.name} onClick={onClickRepo}>ver commits</button></li>
            })}
                
        </ul>   
  </Styled.Wrapper> 
  )
}
