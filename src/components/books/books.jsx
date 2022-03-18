import React, { useState, useEffect } from 'react'
import Book from '../book/book'
import styles from './books.module.css'

const Books = ({ detail1, detail2, title }) => {
  const details = detail1 ? detail1[0] : detail2

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.books}>
        {details.map(detail => (
          <Book
            key={detail[0] ? detail[0].id : detail.id}
            book={detail[0] ? detail[0] : detail}
          ></Book>
        ))}
      </ul>
    </section>
  )
}

export default Books
