import  Navbar  from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/UserProvider";

export default function Sidebar() {
  const {user, setUser} = useContext(AuthContext)

  useEffect(()=>{
    const storedToken = localStorage.getItem('token')
    if(storedToken && !user.token){
      setUser({
        username:localStorage.getItem('username')||'',
        token:storedToken,
        loggedIn:true
      })
    }
  })
  
  
    return (
    <Navbar sticky="top" className="flex-column Sidebar">
    <Nav.Item>
      <Nav.Link as={NavLink} to="/">Dashboard</Nav.Link>
    </Nav.Item>
    {user.token || localStorage.getItem('token') ? (
      <>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/list">list</Nav.Link>
    </Nav.Item>
    <Nav.Item>
            <Nav.Link as={NavLink} to="/logout">
              Logout
            </Nav.Link>
    </Nav.Item>
    </>):(
      <>
    <Nav.Item>
        <Nav.Link as={NavLink} to="/register">
          Register
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/login">login</Nav.Link>
    </Nav.Item>
    </>
    )}
    
  </Navbar>

  )
}