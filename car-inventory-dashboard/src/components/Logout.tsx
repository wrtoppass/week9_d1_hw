import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/UserProvider";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/esm/Spinner";

export default function Logout(){

    // Access the setUser function from the AuthContext
    const { setUser } = useContext(AuthContext)

    // Access the navigate hook
    const navigate = useNavigate()

    useEffect(() => {
        // Set the user context to logged out state
        setUser({
            loggedIn: false,
            username: '',
            token: ''
        })

        // Remove the token and username from local storage
        localStorage.removeItem('token')
        localStorage.removeItem('username')

        navigate('/login')

    })

    return (
        <Spinner animation='border'/>
    )
}
