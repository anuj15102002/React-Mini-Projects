import React from 'react'
import {useContext} from 'react'
import UserContext from '../Context/UserContext'


function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return <div>please login</div>
    
  return (
    <div>Username is {user.username}</div>
  )
}

export default Profile