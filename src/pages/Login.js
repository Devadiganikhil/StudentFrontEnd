import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { Button } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState();

  const handleSubmit = () => {
    const url = "https://studentapi-1rbv.onrender.com/students/login";
    const loginObj = { email };
    axios
      .post(url, loginObj)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email Id</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <label for= "tel">Contact</label>
            <input type="tel" id="tel" onChange={(e)=>setContact(e.target.value)}/>
            
             */}
        <input type="submit" />
      </form>
    </Layout>
  );
}

export default Login;
