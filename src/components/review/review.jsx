import React, { useRef } from 'react'
import styles from './review.module.css'

const Review = ({ saveReview, review }) => {
  const reviewRef = useRef()

  return (
    <section className={styles.container}>
      <textarea
        className={styles.form}
        name="book-review"
        cols="100"
        rows="20"
        ref={reviewRef}
        defaultValue={review.review}
        placeholder="Write your review here.&#13;&#10;Ex) P.12&#13;&#10;Your thoughts... "
      ></textarea>

      <button
        className={styles.button}
        onClick={() => {
          const review = reviewRef.current.value
          saveReview(review)
          reviewRef.current.value = ''
        }}
      >
        SAVE
      </button>
    </section>
  )
}

export default Review
