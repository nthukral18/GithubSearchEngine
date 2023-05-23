import { useState ,useContext } from "react"
import Alert from "./Alert"
import GithubContext from "../context/Github/githubContext"

function Search(){
    const githubContext = useContext(GithubContext)
  const [username , setUsername] = useState("")
const onChangeHandler = (e)=>{
    setUsername(e.target.value)
}
const onSubmitHandler = (e) =>{
    e.preventDefault()
    if(username == "") return githubContext.showAlert({type : "danger",msg : "username cannot be empty"})
    githubContext.searchUsers(username)
}
    return(
        <div className = "header">
        <h1> Github Search engine</h1>
        <Alert />
        <form onSubmit={onSubmitHandler}>
            <input type = "text" name= "username" placeholder = "enter your username" onChange={onChangeHandler} value = {username}></input>
          <br/>
          <button className = "submit">Search</button>
          </form>
          <br/>
          <button className = "clear" onClick = {githubContext.clearUsers}>Clear</button>
        
        </div>
    )
}
export default Search