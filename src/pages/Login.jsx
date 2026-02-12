import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import '../Styles/Login.css'

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password == "" || formData.email == "") {
      alert("Please fill all the boxes");
    }
    const getData = JSON.parse(localStorage.getItem("user") || "[]");
    //let name = (getData[0].name);
    //alert(`Welcome ${name}`)
    for (let i = 0; i < getData.length; i++) {
      if (
        getData[i].email == formData.email &&
        getData[i].password == formData.password
      ) {
        alert(`Login Successful, Welcome ${getData[i].name}`);
        navigate("/users");
        return;
      }
    }
    alert("Invalid email or password");
  };

  return (
    <>
      <div id="outerlogin">
        <div id="loginn">
            <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
            Email -{" "}
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter email"
              required
            />
            <br/>
            <br/>
            Password -{" "}
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Enter password"
              required
            />
          </form>
          <br/>
          <br/>
          <button id="lbutton"type="submit" onClick={handleSubmit}>
            click
          </button>
          <br/>
          <Link to="/">Back to Signup</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
