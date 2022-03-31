import React from 'react'
import styles from './buttons.module.css'

const Buttons = ({
  addBook,
  goToSetting,
  onClickReview,
  detail,
  saleInfor,
}) => {
  return (
    <section className={styles.buttons_container}>
      <button
        className={styles.review_btn}
        onClick={() => {
          onClickReview(true)
        }}
      >
        Write My Thoughts
      </button>
      <button className={styles.review_btn} onClick={addBook}>
        Add to My List
      </button>
      <button
        className={styles.review_btn}
        onClick={() => {
          goToSetting(
            'privacy-policy',
            undefined,
            undefined,
            saleInfor.buyLink ? saleInfor.buyLink : detail.previewLink
          )
        }}
      >
        Go to buy this book
      </button>
    </section>
  )
}

export default Buttons
