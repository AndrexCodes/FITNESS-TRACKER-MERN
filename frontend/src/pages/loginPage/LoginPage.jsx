import React, { useState } from "react";
import "./loginPage.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { UseAppContext } from "../../components/GlobalContext";
import { RiNumbersFill } from "react-icons/ri";

const LoginPage = () => {
  const {setToken}= UseAppContext()
  const [action, setAction] = useState("login");
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (event)=>{
    event.preventDefault()
    const userdata = {
      name: name,
      age: age,
      email: email,
    }
    fetch("", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userdata)
    })
    .then((result)=>{
      
    })
  }

  const registerLink = () => {
    setAction("register");
  };

  const loginLink = () => {
    setAction("login");
  };

  return (
    <div className={`wrapper${action}`}>
      <div className={`${action === "login"?"":"hidden"} form-box login`}>
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} placeholder="Username" required />

            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" value={name} onChange={(event)=>{setName(event.target.value)}} required />

            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me{" "}
            </label>
            <a href="#">Forgot password</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account?
              <a href="#" onClick={registerLink}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>



      <div className={`${action === "login"?"hidden":""} form-box register`}>
        <form action="">
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" value={name} onChange={(event)=>{setName(event.target.value)}}  required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="age" placeholder="Age"  value={age} onChange={(event)=>{setAge(event.target.value)}} required />
            <RiNumbersFill  className="icon" />
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email"  value={email} onChange={(event)=>{setEmail(event.target.value)}} required />
            <MdAlternateEmail className="icon" />
          </div>

          
          

          <div className="input-box">
            <input type="password" placeholder="Password" value={password} onChange={(event)=>{setPassword(event.target.value)}} required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />I agree to the terms & conditions
            </label>
          </div>

          <button type="submit" onSubmit>Register</button>

          <div className="register-link">
            <p>
              Already have an account?
              <a href="#" onClick={loginLink}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default LoginPage;
