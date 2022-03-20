import React, { useRef } from 'react'
import styles from './form.module.css'

const Form = ({ authService, realtimeDatabase }) => {
  const fullName = useRef()
  const email = useRef()
  const nickName = useRef()
  const password = useRef()
  const confirmPassword = useRef()

  const onSubmit = event => {
    event.preventDefault()
    const passwordCheck =
      password.current.value === confirmPassword.current.value &&
      password.current.value.length > 0

    if (passwordCheck) {
      authService ///
        .logIn(email.current.value, password.current.value)
        .then(userID => {
          const user = {
            id: userID,
            fullName: fullName.current.value || '',
            email: email.current.value || '',
            nickName: nickName.current.value || '',
          }

          realtimeDatabase.saveData(`users/${userID}`, user)
        })
    } else {
      alert('Password is not correct')
    }
  }

  return (
    <section className={styles.form_container}>
      <div className={styles.information}>
        <div className={styles.box}>
          <div className={styles.forLabel}>
            <label htmlFor="">Full Name: </label>
          </div>
          <div className={styles.forInput}>
            <input
              ref={fullName}
              type="text"
              name="FullName"
              className={styles.input}
            />
            <br />
            <br />
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.forLabel}>
            <label htmlFor="">Email: </label>
          </div>
          <div className={styles.forInput}>
            <input
              ref={email}
              type="email"
              name="Email"
              className={styles.input}
            />
            <br />
            <br />
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.forLabel}>
            <label htmlFor="">Nickname: </label>
          </div>
          <div className={styles.forInput}>
            <input
              ref={nickName}
              type="text"
              name="Nickname"
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

        <div className={styles.box}>
          <div className={styles.forLabel}>
            <label htmlFor="">Confirm Password: </label>
          </div>
          <div className={styles.forInput}>
            <input
              ref={confirmPassword}
              type="password"
              name="confirmPassword"
              className={styles.input}
            />
            <br />
            <br />
          </div>
        </div>

        <button className={styles.button} onClick={onSubmit}>
          Sign Up
        </button>
      </div>
    </section>
  )
}

export default Form
