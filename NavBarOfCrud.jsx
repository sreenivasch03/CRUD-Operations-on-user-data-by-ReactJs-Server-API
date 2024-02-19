import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./crud.module.css";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdSecurityUpdate } from "react-icons/md";

const NavBarOfCrud = () => {
  return (
    <div className={styles.navBarCrud}>
        <div className={styles.leftNavCrud}><MdOutlineSupervisedUserCircle className={styles.crudLogo}/></div>
        <div className={styles.rightNavCrud}>
            <NavLink className={styles.crudNavLink} to="/"><IoIosCreate className={styles.crudNavIcons}/>Create</NavLink>
            <NavLink className={styles.crudNavLink} to="/data"><FaDatabase className={styles.crudNavIcons}/>Data</NavLink>
            <NavLink className={styles.crudNavLink} to="/view"><FaEye className={styles.crudNavIcons}/>View</NavLink>
            <NavLink className={styles.crudNavLink} to="/update"><MdSecurityUpdate className={styles.crudNavIcons}/>Update</NavLink>
        </div>
    </div>
  )
}

export default NavBarOfCrud