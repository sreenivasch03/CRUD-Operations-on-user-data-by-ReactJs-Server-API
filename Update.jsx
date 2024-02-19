import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from "./crud.module.css";

const Update = () => {
  let [state,setState] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
  })
  let navigate=useNavigate();
  let {id}=useParams();
  useEffect(()=>{
    axios.get("http://localhost:3000/user/"+id).then((res)=>{
      setState(res.data);
    }).catch(()=>{
      console.log("something went wrong");
    })
  },[])
  let {name,email,phone,password} = state;

  let handleChange = (e)=>{
    let {name,value} = e.target;
    setState({...state,[name]:value})
  }

  let handleSubmit = (e)=>{
    e.preventDefault();
    axios.put("http://localhost:3000/user/"+id,state).
    then((res)=>{
      console.log(res.data);
      navigate("/data");
    }).catch(()=>{
        console.log("Data not fetched!!");
    })
  }
  return (
    <div className={styles.updateContentBody}>
       <form action="" onSubmit={handleSubmit} className={styles.updateForm}>
        <h2 className={styles.updateHeading}>Update Details</h2>
        <label name='name' className={styles.updateLabel}>Full Name : </label>
      <input className={styles.updateInput} type="text" placeholder='enter your name' value={name} name='name' onChange={handleChange}/><br />
      <label name='email' className={styles.updateLabel}>Email - Id : </label>
      <input className={styles.updateInput} type="email" placeholder='enter your email' value={email} name='email' onChange={handleChange}/><br />
      <label name='phone' className={styles.updateLabel}>Phone No : </label>
      <input className={styles.updateInput} type="text" placeholder='enter your phone number' value={phone} name='phone' onChange={handleChange}/><br />
      <label name='password' className={styles.updateLabel}>Password  : </label>
      <input className={styles.updateInput} type="password" placeholder='enter your password' value={password} name='password' onChange={handleChange}/><br />
      <button className={styles.updateButton}>Update</button>
      </form>
    </div>
  )
}

export default Update