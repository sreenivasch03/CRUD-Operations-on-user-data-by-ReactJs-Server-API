import React from 'react'
import NavBarOfCrud from './NavBarOfCrud'
import { Outlet } from 'react-router-dom'
import styles from "./crud.module.css";

const Layout3 = () => {
  return (
    <div className={styles.totalBody}>
        <NavBarOfCrud/>
        <Outlet/>
    </div>
  )
}

export default Layout3