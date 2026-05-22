import React from 'react'
import styles from './about.module.css'; 
import avatar from '../../assets/images/avatar.jpg';

export default function index() {
  return (
    <div className={styles.about}>
      <h1 className={styles.aboutTitle}>About<br/> Me</h1>
      <img src={avatar} alt='avatar' className={styles.avatar} />
      <p className={styles.aboutName}>Nguyễn Đức Tính</p>
      <p className={styles.aboutDescription}>
        I am a passionate software developer with a strong background in web development. I have experience working with various technologies and frameworks, and I am always eager to learn and grow in my field. I enjoy creating efficient and user-friendly applications that solve real-world problems. In my free time, I like to explore new programming languages and contribute to open-source projects.
      </p>
    </div>
  )
}
