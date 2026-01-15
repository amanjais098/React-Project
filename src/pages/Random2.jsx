import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react' 

const Random2=()=>{
    const[RandomNum, setRandom] = useState(0);
    let number = Math.floor(Math.random()*100)
    return(
        <>
        <h1>{number}</h1>
        <button onClick={()=>setRandom(number)}>Click</button>
        <br/>
        <br/>
        <br/>
        <Link to="/">Back to Home</Link>
        </>
    )
}
export default Random2;