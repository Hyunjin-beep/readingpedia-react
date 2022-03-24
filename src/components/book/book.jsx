import React, { memo } from 'react'

import styles from './book.module.css'

const Book = memo(({ book, goToSetting }) => {
  return (
    <li className={styles.container}>
      <div className={styles.wrapper}>
        <a
          href=""
          className={styles.cover}
          onClick={() => {
            goToSetting('detail', undefined, book.id)
          }}
        >
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
})

export default Book
