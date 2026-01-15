import React from 'react';
import {Link} from 'react-router-dom'
import '../Styles/Home.css'

const Home = () => {
  return (
    <>
    <div id="main">
      <h1 id="head">Welcome to Home Page</h1>
      <Link to="/About">Go to About</Link>
      <br/>
      <Link to="/Contact">Go to Contact</Link>
      <br/>
      <Link to="/Counter2">Go to Counter</Link>
      <br/>
      <Link to="/Random2">Go to Random number Generator</Link>
      <br/>
    </div>
    </>
  )
}

export default Home
