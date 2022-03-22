import React, { useEffect, useState, useRef } from 'react'
import styles from './login.module.css'

const Login = ({ authService, realtimeDatabase, goToSetting }) => {
  //   const [userState, setUserState] = useState(false)
  //   const [userID, setUserID] = useState('')
  const email = useRef()
  const password = useRef()

  const onLogin = event => {
    event.preventDefault()
    const emailInput = email.current.value
    const passwordInput = password.current.value
    authService ///
      .login(emailInput, passwordInput) ///
      .then(userID => {
        setTimeout(() => {
          goToSetting('', userID)
        }, 3000)
      })
  }

  return (
    <section className={styles.form_container}>
      <div className={styles.information}>
        <div className={styles.box}>
          <div className={styles.forLabel}>
            <label htmlFor="">Email: </label>
          </div>
          <div className={styles.forInput}>
            <input
              ref={email}
              type="text"
              name="email"
              className={styles.input}
            />
            <br />
            <br />
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.forLabel}>
            <label htmlFor="">Password: </label>
          </div>
          <div className={styles.forInput}>
            <input
              ref={password}
              type="password"
              name="password"
              className={styles.input}
            />
            <br />
            <br />
          </div>
        </div>

        <div className={styles.bottom}>
          <button className={styles.button} onClick={onLogin}>
            Sign In
          </button>
          <span className={styles.message}>
            If you don't have an account,
            <a
              href="#"
              className={styles.signUp}
              onClick={() => {
                goToSetting('signUp')
              }}
            >
              Click Here.
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Login
