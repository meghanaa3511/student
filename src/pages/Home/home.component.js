import React, { useState } from "react";
import { firebaseAuth, firebaseDatabase } from "../../backend/firebasehandler";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {ref,set} from 'firebase/database';
import '../Home/home.styles.css';
import { useNavigate } from "react-router-dom";

function Home() {

  const [userInput ,setuserInput] = useState({
      name:"",
      college:"",
      dept:"",
      sslc:"",
      puc:"",
      cgpa:"",
      sem:"",
      emailId:"",
      password:""
})
  

  const nav= useNavigate();
  const handleClick=async()=>{
    try{
      await createUserWithEmailAndPassword(firebaseAuth, userInput.emailId ,userInput.password);
      const recordref=ref(firebaseDatabase,`STUDENT_RECORDS/${userInput.name,userInput.college}`);
      await set(recordref,userInput);
      alert("account created")
      
    }catch(err){
      alert(err);
    
    }
    nav("/list");
  }

  const handleChange =(event) => {
    const {name , value }=event.target;

    setuserInput({
      ...userInput,
      [name]:value
    })
    setuserInput="";
  }
  return (
    <div className='container'>
      <input className='inputs' placeholder='Name' name ='name' type={'Name'} value = {userInput.name} onChange={handleChange} />
      <input classname='inputs' placeholder='College' name ='college' type={'Name'} value = {userInput.college} onChange={handleChange}/>
      <input classname='inputs' placeholder='Department' name ='dept' type={'Name'} value = {userInput.dept} onChange={handleChange}/>
      <input classname='inputs' placeholder='SSLC %' name ='sslc' type={'number'} value = {userInput.sslc} onChange={handleChange}/>
      <input classname='inputs' placeholder='PUC %' name ='puc' type={'number'} value = {userInput.puc} onChange={handleChange}/>
      <input classname='inputs' placeholder='Current Semester' name ='sem' type={'number'} value = {userInput.sem} onChange={handleChange}/>
      <input classname='inputs' placeholder='Current CGPA' name ='cgpa' type={'number'} value = {userInput.cgpa} onChange={handleChange}/>
      <input className='inputs' placeholder='Email Id' name ='emailId' type={'email'} value = {userInput.emailId} onChange={handleChange} />
      <input classname='inputs' placeholder='Password' name ='password' type={'password'} value = {userInput.password} onChange={handleChange}/>
      


 <button onClick={handleClick}>SIGN UP</button>
    </div>
   
  );
}

export default Home;