import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom";
import styles from "./crud.module.css";

const View = () => {
    let {id} = useParams();
    let [state,setState] = useState(null)
    useEffect(()=>{
        axios.get("http://localhost:3000/user/"+id).then((res)=>{
            setState(res.data);
            }).catch(()=>{
                console.log("Data is not fetched!");
            })
    },[id])
  return (
    <div className={styles.viewBody}>
        {state==null ? <h2 className={styles.viewNothing}>Nothing !</h2>:<div key={state.id} className={styles.viewContentBody}>
            <p className={styles.viewContent}><b className={styles.viewHead}>Name : </b> {state.name}</p>
            <p className={styles.viewContent}><b className={styles.viewHead}>Email : </b> {state.email}</p>
            <p className={styles.viewContent}><b className={styles.viewHead}>Mobile No : </b> {state.phone}</p>
            <p className={styles.viewContent}><b className={styles.viewHead}>Password : </b> {state.password}</p>
            <button className={styles.viewGoBack}><Link to="/data" className={styles.viewGoBackLink}>Go Back</Link></button>
            <button className={styles.viewEdit}><Link to={`/update/${state.id}`} className={styles.viewEditLink}>Edit</Link></button>
        </div>}
    </div>
  )
}

export default View