
import React from 'react'
import Navbar from './Navbar'

const Users = () => {
    const getData= JSON.parse(localStorage.getItem("user") || "[]")
  return (
    <div>
      <Navbar/>
      {getData.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Users




