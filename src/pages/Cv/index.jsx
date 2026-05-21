import React from 'react'

import styles from './cv.module.css';

export default function index() {
  const cvUrl = "/cv.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH&page=1";
  return (
    <div className={styles.cv}>
        <div className={styles.title}>
          <h2>My CV</h2>
          <a href={cvUrl} download className={styles.linkButton}>
            Tải CV (PDF)
          </a>
          {"  "}
          <a href={cvUrl} target="_blank" rel="noreferrer" className={styles.linkButton}>
            Mở trong tab mới
          </a>
        </div>
        <div className={styles.cvViewer}>
          <iframe
            src={cvUrl}
            title="My CV"
            width="100%"
            height="600px"
            className={styles.cvIframe}
          />
        </div>
    </div>
  )
}
