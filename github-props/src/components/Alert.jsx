import GithubContext from "../context/Github/githubContext"
import { useContext } from "react"
function Alert(){
    const githubContext = useContext(GithubContext)
return (
    <>
    {githubContext.alert !== null && <p className ={ `alert-${githubContext.alert.type}`}>{githubContext.alert.msg}</p>} 
    </>
)
}
export default Alert