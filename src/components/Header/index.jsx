import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from './header.module.css';

export default function index() {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>NguyenTinh</div>      
        <ul className={styles.nav}>
          <li><Link to='/cv'>My Cv</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/product'>Product</Link></li>
        </ul>
    </div>
  )
}
