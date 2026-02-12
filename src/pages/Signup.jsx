import { Link, useNavigate } from "react-router-dom";
import React from "react";
import {useState} from "react";
import '../Styles/Signup.css'


function Signup(){
    const[formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
    })

    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formData.name==""|| formData.password=="" || formData.email==""){
            alert("Please fill all the boxes");
        }else{
           const getData = JSON.parse(localStorage.getItem("user") || "[]");
           let arr = [];
           arr = [...getData]
           arr.push(formData)
           localStorage.setItem("user", JSON.stringify(arr));
           alert("Signed Up successfully");
           navigate("/login")
        }
        
    }

    return(
        <>
        <div id="outer">

        <div id="signupp">
            <h1>Sign-Up Page</h1>
        {/* <img src={myImage} alt="image"/> */}
            <form onSubmit={handleSubmit}>
            Name - <input 
            type="text"
            value={formData.name}
            onChange={(e)=>setFormData({...formData, name: e.target.value})}
            placeholder="Enter name" 
            required
            />
            <br/>
            <br/>
            Password - <input
            type="password"
            value={formData.password}
            onChange={(e)=>setFormData({...formData, password: e.target.value})}
            placeholder="Enter password"
            required
            />
            <br/>
            <br/>
            Email - <input
            type="email"
            value={formData.email}
            onChange={(e)=>setFormData({...formData, email: e.target.value})}
            placeholder="Enter Email"
            required 
            />
            <br/>
            <br/>
            <button id="button"type="submit">Submit</button>
        </form>
        <br/>
        <p>Already have an account?</p>
        <Link to="/login">Go to Login</Link>
        </div>
        </div>
        </>
    )
}

export default Signup
