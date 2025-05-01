import { useState } from 'react'
import Profile from './Components/Profile'
import './App.css'
import Login from './Components/Login'
import UserContextProvider from './Context/UserContextProvider'

function App() {
 

  return (
    <>
      <h1 >Context Api</h1>
      <UserContextProvider>
    
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
