import React, { useEffect, useState } from 'react'

import styles from './book.module.css'

const Book = ({ isbn }) => {
  //   const fetchDetail = () => {
  //     booksAPI ///
  //       .googleBooksISBN(isbn) ///
  //       .then(item => {

  //       })
  //   }

  return (
    <li className={styles.container}>
      <div className={styles.wrapper}>
        <a href="#" className={styles.cover}></a>
        <span className={styles.title}>{}</span>
      </div>
    </li>
  )
}

export default Book
