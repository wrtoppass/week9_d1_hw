import { useContext, useEffect } from "react"
import { AuthContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import Spinner from "react-bootstrap/Spinner"

export default function Logout() {

  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(()=>{
    setUser({
        username:'',
        token:'',
      loggedIn:false,
    })
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate('/login')
  })
  
  return <Spinner animation="border" />
}