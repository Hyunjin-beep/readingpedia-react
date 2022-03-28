import React, { useState, useEffect, useCallback } from 'react'

import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import Account from './components/account/account'

import Books from './components/books/books'
import Detail from './components/detail/detail'
import Form from './components/form/form'
import Header from './components/header/header'
import Login from './components/login/login'
import Personal from './components/personal/personal'
import Redirect from './components/redirect'

function App({ booksAPI, authService, realtimeDatabase }) {
  const navigateState = useLocation().state
  const navigate = useNavigate()
  const [bestsellersISBN, setBestsellers] = useState([])
  const [detail, setDetail] = useState([])
  const [genres, setGenre] = useState([])
  const [userID, setUserID] = useState(navigateState && navigateState.id)
  const [bookID, setBookID] = useState(navigateState && navigateState.bookId)

  const detailArray = []
  let id = 0

  const controller = new AbortController()

  useEffect(() => {
    setTimeout(() => {
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
    }, 2000)

    return () => controller.abort()
  }, [booksAPI])

  useEffect(() => {
    setTimeout(() => {
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
    }, 2000)

    return () => controller.abort()
  }, [booksAPI])

  const goToSetting = useCallback(
    (path, userID = '', bookID = '', link = '') => {
      navigate(`/${path}`, {
        state: { id: userID, bookId: bookID, link: link },
      })
      userID && setUserID(userID)
      bookID && setBookID(bookID)
    }
  )

  return (
    <div>
      <Header goToSetting={goToSetting} userID={userID}></Header>
      <Routes>
        <Route
          path="/signUp"
          exact
          element={
            <Form
              goToSetting={goToSetting}
              authService={authService}
              realtimeDatabase={realtimeDatabase}
            ></Form>
          }
        ></Route>

        <Route
          path="/login"
          exact
          element={
            <Login
              goToSetting={goToSetting}
              authService={authService}
              realtimeDatabase={realtimeDatabase}
            ></Login>
          }
        ></Route>

        <Route
          path="/account"
          exact
          element={
            <Account
              userID={userID}
              goToSetting={goToSetting}
              authService={authService}
              realtimeDatabase={realtimeDatabase}
            ></Account>
          }
        ></Route>

        <Route path="/personal" exact element={<Personal></Personal>}></Route>

        <Route
          path="/"
          exact
          element={
            <div>
              {genres.map(items => (
                <div key={id++}>
                  {items.map(item => (
                    <Books
                      key={item[0][0].id}
                      detail2={item[0]}
                      title={item[1]}
                      goToSetting={goToSetting}
                    ></Books>
                  ))}
                </div>
              ))}
            </div>
          }
        ></Route>

        <Route
          path="/detail"
          exact
          element={
            <Detail
              bookID={bookID}
              booksAPI={booksAPI}
              goToSetting={goToSetting}
            ></Detail>
          }
        ></Route>

        <Route
          path="/privacy-policy"
          exact
          element={<Redirect></Redirect>}
        ></Route>
      </Routes>
    </div>
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
