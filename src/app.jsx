import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './app.css'
import Books from './components/books/books'
import Header from './components/header/header'

function App({ booksAPI }) {
  const [bestsellersISBN, setBestsellers] = useState([])
  const detail = []

  useEffect(() => {
    booksAPI.nyBooks().then(isbns => {
      setBestsellers(isbns)
    })
  })

  return (
    <>
      <Header></Header>
      {/* <Books isbns={bestsellersISBN}></Books> */}
    </>
  )
}

export default App
