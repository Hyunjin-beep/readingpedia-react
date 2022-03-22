import React, { useState, useEffect } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom'

import Books from './components/books/books'
import Form from './components/form/form'
import Header from './components/header/header'
import Login from './components/login/login'

function App({ booksAPI, authService, realtimeDatabase }) {
  const navigateState = useLocation().state
  const navigate = useNavigate()
  const [bestsellersISBN, setBestsellers] = useState([])
  const [detail, setDetail] = useState([])
  const [genres, setGenre] = useState([])
  const [userID, setUserID] = useState(navigateState && navigateState.id)
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
  }, [booksAPI])

  const goToSetting = (path, userID) => {
    navigate(`/${path}`, { state: { id: userID } })
    userID && setUserID(userID)
  }

  return (
    <>
      <Header goToSetting={goToSetting} authService={authService}></Header>
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
                    ></Books>
                  ))}
                </div>
              ))}
            </div>
          }
        ></Route>
      </Routes>
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
