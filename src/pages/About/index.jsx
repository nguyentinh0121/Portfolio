import React from 'react'
import styles from './about.module.css'; 

export default function index() {
  return (
    <div className={styles.about}>
      <h1 className={styles.aboutTitle}>About<br/> Me</h1>
      <img src="/avatar.jpg" alt="avatar" className={styles.avatar} />
    </div>
  )
}
