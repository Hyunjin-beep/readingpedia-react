import React, { useState, useEffect } from 'react'
import Book from '../book/book'
import styles from './books.module.css'

const Books = ({ detail }) => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>BestSellers</h3>
      <ul className={styles.books}>
        {detail[0].map(detail => (
          <Book key={detail[0].id} book={detail[0]}></Book>
        ))}
      </ul>
    </section>
  )
}

export default Books
