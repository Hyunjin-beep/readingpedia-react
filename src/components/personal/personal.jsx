import React from 'react'
import styles from './personal.module.css'

const Personal = props => {
  return (
    <>
      <section className={styles.top_container}>
        <span className={styles.name}>HV</span>
        <span className={styles.height}>Your Knowledge Height is 148cm.</span>
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
