import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/UserProvider'

// Get the base URL for the authentication API from environment variables
const base_authapi_url = import.meta.env.VITE_APP_AUTH_API

export default function Loginpage() {

    // Create refs for username and password fields
    const usernameField = useRef<HTMLInputElement>(null)
    const passwordField = useRef<HTMLInputElement>(null)

    // Access the user context and navigate hook
    const { user, setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        // Check if the user is logged in
        if (user.token) {
            // Store the token and username in local storage
            localStorage.setItem('token', JSON.stringify(user.token))
            localStorage.setItem('username', JSON.stringify(user.username))
        }

        // Check if the user is logged in or if there is a token in local storage
        if (user.token || localStorage.getItem('token')) {
            // Redirect to the home page
            navigate('/')
        }
    }, [user])

    // Handle form submission
    async function handleLoginForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        // Send a POST request to verify the user
        const res = await fetch(`${base_authapi_url}/verifyuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameField.current?.value,
                password: passwordField.current?.value
            })
        })

        if (res.ok) {
            // If the response is successful, parse the data and update the user context
            const data = await res.json()
            console.log(data)
            setUser({
                loggedIn: true,
                username: String(usernameField.current?.value),
                token: data[0]['user token']
            })
        }
    }

    return (
        <>
            <h2>LoginPage</h2>
            <form onSubmit={handleLoginForm}>
                <label>Username:<br/>
                    <input type="text" ref={usernameField} />
                </label><br/><br/>
                <label>Password:<br/>
                    <input type="password" ref={passwordField} />
                </label><br/><br/>
                <button>Sign In</button>
            </form>
        </>
    )
}
