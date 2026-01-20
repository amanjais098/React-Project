import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
const Counter2 = () => {
  const[count, setCount] = useState(0);
    return (
    <>
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(0)}>Reset</button>
        <br/>
        <br/>
        <br/>

        <Link to="/">Back to Home</Link>

    </div>
    </>
  )
}

export default Counter2



















