import {Link} from "react-router-dom"
import { useContext } from "react"
import GithubContext from "../context/Github/githubContext"
function Users(){
    const githubContext = useContext(GithubContext)
    return(
       
       <center>
        <div className="row">
            {githubContext.users.map((user , i) =>{
                return (
                    <div className="side">
                    <img src= {user.avatar_url} height = "200px" alt = "profile pic"></img>
                    <h2> {user.login}</h2>
                            <Link to= {`/user/${user.login}`}>Click Profile</Link>
                    </div>
                )
            })}
          
           
        </div>
       </center>
    )
}
export default Users