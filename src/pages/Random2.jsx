// import React from 'react'
// import {Link} from 'react-router-dom'
// import {useState} from 'react' 

// const Random2=()=>{
//     const[RandomNum, setRandom] = useState(0);
//     let number = Math.floor(Math.random()*100)
//     return(
//         <>
//         <h1>{number}</h1>
//         <button onClick={()=>setRandom(number)}>Click</button>
//         <br/>
//         <br/>
//         <br/>
//         <Link to="/">Back to Home</Link>
//         </>
//     )
// }
// export default Random2;




import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Random2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log(res.data);
        setUsers(res.data);
      });
  }, []);

  return (
    <div>
        <Navbar/>
      <h2>Users List</h2>
      {users.map(user => (
        <p key={user.id}>{user.name},{user.address.zipcode},{user.address.street}</p>
      ))}
      <Link to="/login">Log Out</Link>
    </div>
  );
}

export default Random2;

