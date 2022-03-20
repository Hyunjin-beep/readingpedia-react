import React, { useRef, memo } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './header.module.css'

const Header = ({ goToSetting }) => {
  const searchInput = useRef()

  return (
    <nav className={styles.navBar}>
      <div className={styles.navLeft}>
        <a href="#" className={styles.homeLink}>
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

        <button className={styles.navRightBtn} onClick={goToSetting}>
          <a href="#" className={styles.account}>
            <i className="fas fa-cog"></i>
          </a>
        </button>
      </div>
    </nav>
  )
}

export default Header
