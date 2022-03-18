import React, { useState, useEffect } from 'react'

import styles from './app.module.css'
import Books from './components/books/books'
import Header from './components/header/header'

function App({ booksAPI }) {
  const [bestsellersISBN, setBestsellers] = useState([])
  const [detail, setDetail] = useState([])
  const detailArray = []

  useEffect(() => {
    booksAPI ///
      .getBestsellers() ///
      .then(result => {
        setBestsellers(result)
        return result
      })
      .then(isbns => {
        isbns.map(isbn => {
          booksAPI
            .googleBooksISBN(isbn) ///
            .then(result => {
              detailArray.push(result)
              return detailArray
            }) ///
            .then(resultDetail => {
              setDetail([...detail, resultDetail])
            }) ///

            .catch(error => console.log('error:', error))
        })
      })
  }, [booksAPI])

  return (
    <>
      <Header></Header>
      <div>{detail !== undefined ? <Books detail={detail}></Books> : null}</div>
    </>
  )
}

export default App
