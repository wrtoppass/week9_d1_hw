import { useContext, useRef, useState } from "react"
import { AuthContext } from "../contexts/UserProvider"
import { useNavigate } from "react-router-dom"
// import { Characterable, Charops } from "./Character"
// const base_api_url = import.meta.env.VITE_APP_BASE_API2

export default function MakePost() {

  const { user } = useContext(AuthContext)
  const postField = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  async function handlePostForm(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const res = await fetch(`https://matrix-116-fakebook.onrender.com/api/post`,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
        'x-access-token' : `Bearer ${user.token}`
      },
      body:JSON.stringify({
        body : postField.current?.value
      })
    })
    if(res.ok){
      const data = await res.json()
      console.log(data)
    //   console.log(char.id)
    //   navigate(`/character/${char.id}`)
        navigate('/')
    }
  }

  return (
    <form onSubmit={handlePostForm}>
        <label>Post:<br/>
          <input type="text" ref={postField} placeholder="What's your favorite Characters? "/>
        </label>
        <button>Post</button>
      </form>
    
  )
}