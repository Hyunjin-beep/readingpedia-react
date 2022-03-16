import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'

import '@fortawesome/fontawesome-free/js/all.js'
import BooksAPI from './service/booksAPI'

// const APIKEY = 'a5bvxgKcuKEGoqTrnDOYoon74EqWIJAz'

const booksAPI = new BooksAPI()

ReactDOM.render(
  <React.StrictMode>
    <App booksAPI={booksAPI} />
  </React.StrictMode>,
  document.getElementById('root')
)
