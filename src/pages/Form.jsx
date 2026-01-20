
import React from "react";
import { useState } from "react";

const FormRev = () => {
    const[formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formData.name=="" || formData.password=="" || formData.email==""){
            alert("plese fill all the boxes");
        }else{
            console.log(formData.name, formData.password, formData.email);
        }
    }

  return (
    <>
      <div id="main">
        <div id="h1"><h1>Form</h1></div>
        <form onSubmit={handleSubmit}>
            Name  - <input
            type="text"
            value={formData.name}
            onChange={(e)=>setFormData({...formData, name:e.target.value})}
            placeholder="Enter name"
            required
            />
            <br/>
            <br/>
            Email - <input
            type="email"
            value={formData.email}
            onChange={(e)=>setFormData({...formData, email:e.target.value})}
            placeholder="Enter email"
            required
            />
            <br/>
            <br/>
            Password - <input
            type="password"
            value={formData.password}
            onChange={(e)=>setFormData({...formData,password:e.target.value})}
            placeholder="enter password"
            required
            />
            <br/>
            <br/>
            <button id="button"type="submit">Submit</button>
        </form>
        
      </div>
    </>
)}

export default FormRev 
