import React, { useState, useEffect } from 'react'

import styles from './app.module.css'
import Book from './components/book/book'
import Books from './components/books/books'
import Header from './components/header/header'

function App({ booksAPI }) {
  const [bestsellersISBN, setBestsellers] = useState([])
  const [detail, setDetail] = useState([])
  const [genres, setGenre] = useState([])
  const detailArray = []
  let id = 0

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
              setDetail([resultDetail])
            }) ///

            .catch(error => console.log('error:', error))
        })
      })
  }, [booksAPI])

  useEffect(() => {
    const categories = randomCategory()
    const genreDetail = []

    for (let category of categories) {
      booksAPI ///
        .googleBooksGenre(category) ///
        .then(item => {
          genreDetail.push([item, category])
          return genreDetail
        }) ///
        .then(categoryDetail => {
          setGenre([categoryDetail])
        })
        .catch(error => console.log('error:', error))
    }
  }, [])

  return (
    <>
      <Header></Header>
      <div>
        {detail !== undefined ? (
          <Books detail1={detail} title={'BestSeller'}></Books>
        ) : null}
      </div>
      {genres.map(items => (
        <div key={id++}>
          {items.map(item => (
            <Books
              key={item[0][0].id}
              detail2={item[0]}
              title={item[1]}
            ></Books>
          ))}
        </div>
      ))}
    </>
  )
}

function randomCategory() {
  const categories = [
    'Art',
    'Music',
    'Romance',
    'Fiction',
    'Poetry',
    'Drama',
    'Science',
    'History',
    'Crime',
    'Nature',
    'Mystery',
    'Horror',
    'Biography',
    'Essays',
    'Philosophy',
  ]

  const num = []
  while (num.length < 5) {
    const order = Math.floor(Math.random() * (categories.length - 1)) + 1
    if (num.indexOf(order) === -1) {
      num.push(order)
    }
  }

  const randomCate = []

  for (let index of num) {
    randomCate.push(categories[index])
  }

  return randomCate
}

export default App
