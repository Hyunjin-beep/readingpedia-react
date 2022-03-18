import React from 'react'

import styles from './book.module.css'

const Book = ({ book }) => {
  return (
    <li className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.cover}>
          <img
            src={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.smallThumbnail
                : null
            }
            alt=""
            className={styles.img}
          />
        </a>
        <span className={styles.title}>{book.volumeInfo.title}</span>
      </div>
    </li>
  )
}

export default Book
