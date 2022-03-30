import React, { useEffect, memo, useState } from 'react'
import styles from './detail.module.css'

const Detail = ({ detail }) => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.information}>
          <div className={styles.cover}>
            <img
              className={styles.coverImg}
              src={detail.imageLinks ? detail.imageLinks.thumbnail : ''}
            ></img>
          </div>
          <div className={styles.description}>
            <div className={styles.top}>
              <span className={styles.title}>
                {detail.title ? detail.title : 'No Title'}
              </span>
              <span className={styles.author}>
                {detail.authors ? detail.authors[0] : 'No Author'}
              </span>
            </div>
            <p className={styles.overview}>
              {detail.description ? detail.description : 'No Description'}
            </p>
          </div>
        </div>
      </section>

      {/* <section className={styles.buttons_container}>
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
      </section> */}
    </>
  )
}

export default Detail
