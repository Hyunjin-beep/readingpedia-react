import React, { useState, useEffect } from 'react'
import Book from '../book/book'
import styles from './books.module.css'

const Books = ({ isbns }) => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}></h3>
      <ul className={styles.books}>
        {isbns.map(isbn => (
          <Book key={isbn} isbn={isbn}></Book>
        ))}
      </ul>
    </section>
  )
}

export default Books
