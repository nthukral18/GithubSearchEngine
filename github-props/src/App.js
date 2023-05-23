import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import axios from "axios"
import { useState ,useEffect, useContext } from 'react';
import {Routes , Route} from "react-router-dom"
import User from "./components/User"
import Contact from "./components/Contact"
import GithubContext from './context/Github/githubContext';


function App() {
  const [users , SetUsers] = useState([])
  const [loading , setLoading] = useState(false)
  const [user , setUser] = useState({})
  const [repos , setRepos] = useState([])
  const [alert,setAlert] = useState(null)
  const githubContext = useContext(GithubContext);

  useEffect(()=>{
    githubContext.allUsers()
  },[])

  
  return (
    <>
      <Navbar />
      <Routes>
      <Route path = "/" element = {<Home  />}/>
      <Route path = "/about" element = {<h1> about us component</h1>}/>
      <Route path = "/contact" element = {<Contact />}/>
      <Route path = "/user/:uname" element  = {<User />}/>
     
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
