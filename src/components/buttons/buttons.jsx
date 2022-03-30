import React from 'react'
import styles from './buttons.module.css'

const Buttons = ({
  bookID,
  saveData,
  userID,
  saleInfor,
  goToSetting,
  detail,
}) => {
  const onAddClicked = event => {
    const curr = new Date()
    const date = `${curr.getFullYear()} ${
      curr.getMonth() + 1
    } ${curr.getDate()}`

    const book = {
      id: bookID,
      cover_img: detail.imageLinks ? detail.imageLinks.thumbnail : '',
      date,
      pageCount: detail.pageCount ? detail.pageCount : 0,
    }
    saveData(`lists/${userID}/${bookID}`, book)
    setTimeout(() => {
      alert('Successfully Added')
    }, 1500)
  }

  return (
    <section className={styles.buttons_container}>
      <button className={styles.review_btn}>Write My Thoughts</button>
      <button className={styles.review_btn} onClick={onAddClicked}>
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
