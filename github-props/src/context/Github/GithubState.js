import { useReducer } from "react"
import GithubContext from "./githubContext"
import GithubReducer from "./githubReducer"
import axios from "axios"
import { SET_USERS, SET_LOADING, SET_USER } from "../types"
import { SET_REPOS } from "../types"

function GithubState(props) {

  const initialState = {
    users: [], loading: false, user: {}, repos: [], alert: null
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)
  async function allUsers() {
    try {
      const res = await axios.get("https://api.github.com/users")
      dispatch({
        type: SET_USERS,
        payload: res.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function clearUsers() {
    dispatch({
      type: SET_USERS,
      payload: []
    })
  }

  function setLoading() {
    dispatch({
      type: SET_LOADING

    })
  }
  async function searchUsers(username) {
    try {
      clearUsers();
      setLoading();
      const res = await axios.get(`https://api.github.com/search/users?q=${username}`);
      dispatch({
        type: SET_USERS,
        payload: res.data.items
      })


    } catch (error) {
      console.log(error)
    }
  }

  const fetchUser = async (uname) => {
    try {
      setLoading()
      const res = await axios.get(`https://api.github.com/users/${uname}`, {
        headers: {
          "Authorization": `Bearer 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`
        }
      })
      dispatch({
        type: SET_USER,
        payload: res.data
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  const topRepos = async (uname) => {
    try {
      setLoading()
      const res = await axios.get(`https://api.github.com/users/${uname}/repos?per_page=5`, {
        headers: {
          "Authorization": `Bearer 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`
        }
      })
      dispatch({
        type: SET_REPOS,
        payload: res.data
      })
   
    }
    catch (error) {
      console.log(error)
    }
  }





  return (
    <GithubContext.Provider value={{
      users: state.users,
      loading: state.loading,
      alert: state.alert,
      user: state.user,
      repos: state.repos,
      allUsers,
      searchUsers,
      clearUsers,
      fetchUser,
      topRepos,
      setLoading

    }}>
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState