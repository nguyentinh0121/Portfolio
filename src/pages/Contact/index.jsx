import React from 'react'
import styles from './contact.module.css';

export default function index() {
  return (
    <div className={styles.contactInfo}>
      <h1>Thông tin liên hệ</h1>
      <div className={styles.contactDetails}>
        <table>
          <tbody>
            <tr>
              <td>Email:</td>
              <td><a href="mailto:nguyenductinh070@gmail.com">nguyenductinh070@gmail.com</a></td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td><a href="tel:+84357547653">0357547653</a></td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>1336 Nguyen Cuu Phu, Ho Chi Minh City</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
