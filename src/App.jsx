// import Counter from "./Counter"

// function App(){
//     return(
//         <>
//         <Counter/>
//         </>
//     )
// }
// export default App 


// import Colorchange from "./Colorchange";

// function App(){
//     return(
//         <>
//         <Colorchange/>
//         </>
//     )
// }
// export default App;







// import {Routes, Route} from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Counter2 from './pages/Counter2';
// import Random2 from './pages/Random2';
// import { jsx } from "react/jsx-runtime";

// const App =()=>{
//     return(
//         <>
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/About" element={<About/>}/>
//             <Route path="Contact" element={<Contact/>}/>
//             <Route path="Counter2" element={<Counter2/>}/>
//             <Route path="Random2" element={<Random2/>}/>
//         </Routes>
//         </>
//     )
// }
// export default App




//Forms in REACT


// import './index.css'

// import React from "react";
// import { useState } from "react";

// const FormRev = () => {
//     const[formData, setFormData] = useState({
//         name:"",
//         email:"",
//         password:"",
//     })
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         if(formData.name=="" || formData.password=="" || formData.email==""){
//             alert("plese fill all the boxes");
//         }else{
//             console.log(formData.name, formData.password, formData.email);
//         }
//     }

//   return (
//     <>
//       <div id="main">
//         <div id="h1"><h1>Form</h1></div>
//         <form onSubmit={handleSubmit}>
//             Name  - <input
//             type="text"
//             value={formData.name}
//             onChange={(e)=>setFormData({...formData, name:e.target.value})}
//             placeholder="Enter name"
//             required
//             />
//             <br/>
//             <br/>
//             Email - <input
//             type="email"
//             value={formData.email}
//             onChange={(e)=>setFormData({...formData, email:e.target.value})}
//             placeholder="Enter email"
//             required
//             />
//             <br/>
//             <br/>
//             Password - <input
//             type="password"
//             value={formData.password}
//             onChange={(e)=>setFormData({...formData,password:e.target.value})}
//             placeholder="enter password"
//             required
//             />
//             <br/>
//             <br/>
//             <button id="button"type="submit">Submit</button>
//         </form>
//       </div>
//     </>
// )}

// export default FormRev 

import Random2 from './pages/Random2'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Counter2 from './pages/Counter2' 
import Form from './pages/Form';
import Random from './pages/Random2';
import React from 'react'

const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Random2' element={<Random2/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/counter2' element={<Counter2/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/random' element={<Random2/>}/>
    </Routes>
    </>
  )
}

export default App

