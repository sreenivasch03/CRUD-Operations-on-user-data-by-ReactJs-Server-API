import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import styles from "./crud.module.css";

const Data = () => {
    let [state,setState] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/user").then((res)=>{
            setState(res.data.filter((data)=>data.name && data.email && data.phone && data.password));
        }).catch(()=>{
            console.log("data is not fetched!");
        })
    },[])
    let deleteData = (id)=>{
        axios.delete("http://localhost:3000/user"+id)
        setState(state.filter((ele)=>ele.id!=id))
    }
  return (
    <div className={styles.dataBody}>
        <div>
            <button className={styles.dataAddButton}><Link to="/" className={styles.dataAddNavLink}>Add Account</Link></button>
            {state.map((data)=>{
                return <div key={data.id} className={styles.dataDiv}>
                    <p className={styles.dataContent}><b className={styles.dataHead}>Name : </b> {data.name}</p>
                    <p className={styles.dataContent}><b className={styles.dataHead}>Email : </b>{data.email}</p>
                    <p className={styles.dataContent}><b className={styles.dataHead}>Phone : </b>{data.phone}</p>
                    <p className={styles.dataContent}><b className={styles.dataHead}>Password : </b>{data.password}</p>
                    <button onClick={()=>deleteData(data.id)} className={styles.dataDeleteButton}>Delete</button>
                    <button className={styles.dataViewButton}><Link to={`/view/${data.id}`} className={styles.dataViewNavLink}>View</Link></button>
                </div>
            })}
       </div>
    </div>
  )
}

export default Data