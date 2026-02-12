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

// import '../src/Styles/Form.css'

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





// import {useState, useEffect} from "react";

// import React from 'react'

// const App = () => {

//     const[imgUrl, setImgUrl] = useState("");
//     useEffect(()=>{
//         fetch("https://api.thecatapi.com/v1/images/search")
//         .then((res)=>res.json())
//         .then((data)=>{
//             console.log(data)
//             setImgUrl(data[0].url)
//         })
//     },[])

//   return (
//     <div>
//       {imgUrl && 
//         <img src={imgUrl}/>
//       }
//     </div>
//   )
// }

// export default App


// import { useState, useEffect } from "react";
// import './App.css'
// import React from 'react'

// const App = () => {

//     const[city_name, setcity_name] = useState("")
//     const api_key = "5a9278fb868733a63a99b79fbdd65afd"
//     const[dataa, setDataa] = useState(null)
    
    
//      const handleSubmit = (e)=>{
//         e.preventDefault();
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`)
//         .then((res)=>res.json())
//         .then((data)=>{
//             console.log(data)
//         setDataa(data)})
        
//     }

//     return (
//      <>
//     <div id="main">
//         <div id="weather">
//             <h1>Weather App</h1>
//         <br/>
//         <br/>
//         <form onSubmit={handleSubmit}>
//             Enter Location: <input 
//             id="textbox"
//             type="text"
//             value={city_name}
//             onChange={(e)=>setcity_name(e.target.value)}
//             />
//             <br/>
//             <br/>
//             <button id="button" type="submit">submit</button>
//         </form>
//         </div>

//         <div id="data">
            
//         {dataa?.main && dataa?.weather &&(
//             <>
//               <h1>Temp:{dataa.main.temp}</h1>
//               <h1>Weather condition: {dataa.weather[0].main}</h1>
//               <h1>Humidity:{dataa.main.humidity}</h1>
//             </>
//         )}

//         </div>
//      </div>
//      </>

//   )
// }

// export default App




import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Signup from './pages/Signup'
import Login from './pages/Login'
import { jsx } from 'react/jsx-runtime';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Random2 from './pages/Random2';
function App(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/random" element={<Random2/>}/>
        </Routes>
        </>
    )
}
export default App;