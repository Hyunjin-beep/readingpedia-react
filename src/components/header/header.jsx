import React, { useRef } from 'react'

import styles from './header.module.css'

const Header = ({ goToSetting, authService }) => {
  const searchInput = useRef()

  return (
    <nav className={styles.navBar}>
      <div className={styles.navLeft}>
        <a className={styles.homeLink} onClick={() => goToSetting('')}>
          ReaidngPedia
        </a>

        <form action="#">
          <input
            type="search"
            placeholder="Enter keywords"
            className={styles.search}
            ref={searchInput}
          />
          <button type="submit" className={styles.submitBtn}>
            <i className={`fas fa-search ${styles.icon}`}></i>
          </button>
        </form>
      </div>

      <div className={styles.navRight}>
        <button className={styles.navRightBtn}>
          <a href="#" className={styles.personal}>
            <i className="fas fa-user"></i>
          </a>
        </button>

        <button
          className={styles.navRightBtn}
          onClick={() => goToSetting('login')}
        >
          <a href="#" className={styles.account}>
            <i className="fas fa-cog"></i>
          </a>
        </button>
      </div>
    </nav>
  )
}

export default Header
