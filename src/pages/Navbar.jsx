import React from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div id="main">
      <div id="login">
        <Link id="loginlink" to="/login">Login</Link>
      </div>
      <div id="signup">
        <Link id="signuplink" to="/">Signup</Link>
      </div>
      <div id="users">
        <Link id="userlink" to="/users">Users</Link>
      </div>
      <div id="random">
        <Link id="randomlink" to="/random">Random</Link>
      </div>
    </div>
  )
}

export default Navbar
