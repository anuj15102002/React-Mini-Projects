import React from 'react'
import {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login
() {
    const [username, setusername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const submitHandler = (e) => 
            {
                e.preventDefault()
                setUser({username, password})
            }

    
  return (
    <div className='text-3xl text-center'>
        <h1>Login</h1>
        <div>
            <input
            type='text'
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="username"
            />
            <input
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            
            />
            <button onClick={submitHandler}>submit</button>
        </div>

    </div>
  )
}


export default Login