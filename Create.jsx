import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./crud.module.css"

const Create = () => {
    let [state,setState] = useState({
        name : "",
        email : "",
        phone : "",
        password : '',
    });
    let {name,email,phone,password} = state;
    let handleChange = (e)=>{
        let{name,value} = e.target;
        setState({...state,[name]:value})
    }
    let handleSubmit = (e)=>{
        e.preventDefault();
        console.log(state);
        if(name && email && phone && password){
            axios.post("http://localhost:3000/user",state).then((res)=>{
            console.log(res);
            navigate("/data");

        }).catch(()=>{
            console.log("data is not posted!");
        })
        }
        else{
            console.log("fill out all the fields!");
        }
    }
    let navigate = useNavigate(); 
  return (
  <div className={styles.createBody}>
     <div className={styles.createDiv}>
        <form action="" onSubmit={handleSubmit}>
            <h1 className={styles.createHead}>Create Account</h1>
            <input type="text" className={styles.createInput} value={name} name='name' placeholder='enter your name' onChange={handleChange}/><br /> <br />
            <input type="text" className={styles.createInput} value={email} name='email' placeholder='enter your email'  onChange={handleChange}/><br /> <br />
            <input type="text" className={styles.createInput} value={phone} name='phone' placeholder='enter your mobile number'  onChange={handleChange}/><br /> <br />
            <input type="text" className={styles.createInput} value={password} name='password' placeholder='enter your password'  onChange={handleChange}/><br /> <br />
            <button className={styles.createSubmit}>Submit</button>
        </form>
     </div>
  </div>
  )
}

export default Create