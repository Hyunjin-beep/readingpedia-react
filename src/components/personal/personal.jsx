import React, { useEffect, useState } from 'react'

import styles from './personal.module.css'

const Personal = ({ userID, realtimeDatabase, goToSetting }) => {
  const [user, setUser] = useState({})
  const [review, setReview] = useState({})
  const [list, setList] = useState({})
  const [count, setCount] = useState(0)
  useEffect(() => {
    realtimeDatabase ///
      .getData(`users/${userID}`, user => {
        setUser(user)
      })

    realtimeDatabase ///
      .getData(`review/${userID}`, review => {
        setReview(review)
      })

    realtimeDatabase ///
      .getData(`lists/${userID}`, lists => {
        setList(lists)
      })
  }, [])

  useEffect(() => {
    let page_count = 0
    for (let item in review) {
      console.log(review[item].pageCount)
      page_count += review[item].pageCount
    }

    page_count = page_count > 100 ? page_count / 100 : page_count
    setCount(page_count)
  }, [])
  return (
    <>
      <section className={styles.top_container}>
        <span className={styles.name}>{user.nickName}</span>
        <span className={styles.height}>
          Your Knowledge Height is {count}M.
        </span>
      </section>

      <section className={styles.container}>
        <div className={styles.my_books}>
          <div className={styles.divider}>
            <span>DONE!</span>
          </div>
          <div className={styles.book_container}>
            <ul className={styles.books}>
              <li className={styles.book}>
                <a className={styles.link} href="#">
                  <img
                    className={styles.cover}
                    src="http://books.google.com/books/content?id=DcEqNgAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE704BOwJANv9eMoBiquXhIe1bONJAFntSu7AVuIM-6_W2Ddgc7bRtPCjwStAWO_9bb3oqP5ZEMg194VHgbV8qAxunxGenKh4WkXWGlWeLZwRiniQrsdmgSjwDoreXABNb_Na1xbY&source=gbs_api"
                    alt=""
                  />
                </a>
              </li>
              <li className={styles.book}>
                <a className={styles.link} href="#">
                  <img
                    className={styles.cover}
                    src="http://books.google.com/books/content?id=DcEqNgAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE704BOwJANv9eMoBiquXhIe1bONJAFntSu7AVuIM-6_W2Ddgc7bRtPCjwStAWO_9bb3oqP5ZEMg194VHgbV8qAxunxGenKh4WkXWGlWeLZwRiniQrsdmgSjwDoreXABNb_Na1xbY&source=gbs_api"
                    alt=""
                  />
                </a>
              </li>
              <li className={styles.book}>
                <a className={styles.link} href="#">
                  <img
                    className={styles.cover}
                    src="http://books.google.com/books/content?id=DcEqNgAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE704BOwJANv9eMoBiquXhIe1bONJAFntSu7AVuIM-6_W2Ddgc7bRtPCjwStAWO_9bb3oqP5ZEMg194VHgbV8qAxunxGenKh4WkXWGlWeLZwRiniQrsdmgSjwDoreXABNb_Na1xbY&source=gbs_api"
                    alt=""
                  />
                </a>
              </li>
              <li className={styles.book}>
                <a className={styles.link} href="#">
                  <img
                    className={styles.cover}
                    src="http://books.google.com/books/content?id=DcEqNgAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE704BOwJANv9eMoBiquXhIe1bONJAFntSu7AVuIM-6_W2Ddgc7bRtPCjwStAWO_9bb3oqP5ZEMg194VHgbV8qAxunxGenKh4WkXWGlWeLZwRiniQrsdmgSjwDoreXABNb_Na1xbY&source=gbs_api"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.my_books}>
          <div className={styles.divider}>
            <span>WAITING!</span>
          </div>
          <div className={styles.book_container}>
            <ul className={styles.books}>
              <li className={styles.book}>
                <a className={styles.link} href="#">
                  <img
                    className={styles.cover}
                    src="http://books.google.com/books/content?id=DcEqNgAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE704BOwJANv9eMoBiquXhIe1bONJAFntSu7AVuIM-6_W2Ddgc7bRtPCjwStAWO_9bb3oqP5ZEMg194VHgbV8qAxunxGenKh4WkXWGlWeLZwRiniQrsdmgSjwDoreXABNb_Na1xbY&source=gbs_api"
                    alt=""
                  />
                </a>
              </li>
              <li className={styles.book}>
                <a className={styles.link} href="#">
                  <img
                    className={styles.cover}
                    src="http://books.google.com/books/content?id=DcEqNgAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE704BOwJANv9eMoBiquXhIe1bONJAFntSu7AVuIM-6_W2Ddgc7bRtPCjwStAWO_9bb3oqP5ZEMg194VHgbV8qAxunxGenKh4WkXWGlWeLZwRiniQrsdmgSjwDoreXABNb_Na1xbY&source=gbs_api"
                    alt=""
                  />
                </a>
              </li>
              <li className={styles.book}>
                <a className={styles.link} href="#">
                  <img
                    className={styles.cover}
                    src="http://books.google.com/books/content?id=DcEqNgAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE704BOwJANv9eMoBiquXhIe1bONJAFntSu7AVuIM-6_W2Ddgc7bRtPCjwStAWO_9bb3oqP5ZEMg194VHgbV8qAxunxGenKh4WkXWGlWeLZwRiniQrsdmgSjwDoreXABNb_Na1xbY&source=gbs_api"
                    alt=""
                  />
                </a>
              </li>
              <li className={styles.book}>
                <a className={styles.link} href="#">
                  <img
                    className={styles.cover}
                    src="http://books.google.com/books/content?id=DcEqNgAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE704BOwJANv9eMoBiquXhIe1bONJAFntSu7AVuIM-6_W2Ddgc7bRtPCjwStAWO_9bb3oqP5ZEMg194VHgbV8qAxunxGenKh4WkXWGlWeLZwRiniQrsdmgSjwDoreXABNb_Na1xbY&source=gbs_api"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
export default Personal
