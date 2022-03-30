import React, { useEffect, useState } from 'react'
import styles from './account.module.css'
const Account = ({ goToSetting, userID, authService, realtimeDatabase }) => {
  const [userDetail, setUserDetail] = useState({})
  useEffect(() => {
    if (!userID) {
      return
    }
    realtimeDatabase ///
      .getData(`users/${userID}`, user => {
        setUserDetail(user)
      })
    console.log(userDetail)
  }, [realtimeDatabase, userID])

  return (
    <section className={styles.container}>
      <ul className={styles.information}>
        <li className={styles.item}>
          Nickname :{' '}
          <span className={styles.nickname}> {userDetail.nickName}</span>
        </li>
        <li className={styles.item}>
          Email : <span className={styles.email}>{userDetail.email}</span>
        </li>
        <li className={styles.item}>
          <a href="" className={styles.link}>
            Change My Information
          </a>
        </li>
        <li className={styles.item}>
          <a
            href=""
            className={styles.link}
            onClick={() => {
              authService.signOut()
              goToSetting('', null)
            }}
          >
            LogOut
          </a>
        </li>
        <li className={styles.item}>
          <a href="" className={styles.link}>
            Reset My Review
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Account
