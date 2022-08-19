
import axios from "axios";
  

export const githubUserRepos = ({username}) => { 
    const { data } = axios.get(`https://api.github.com/users/${username}/repos`);
    return data;

};
 
 /* 
/repos/${username}/${repo}/branches */

 