import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './app'

import '@fortawesome/fontawesome-free/js/all.js'
import BooksAPI from './service/booksAPI'
import AuthService from './service/auth_service'
import RealtimeDatabase from './service/realtime_database'
import firebaseapp from './service/firebase'

// const APIKEY = 'a5bvxgKcuKEGoqTrnDOYoon74EqWIJAz'

const booksAPI = new BooksAPI()
const authService = new AuthService(firebaseapp)
const realtimeDatabase = new RealtimeDatabase(firebaseapp)

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App
        booksAPI={booksAPI}
        authService={authService}
        realtimeDatabase={realtimeDatabase}
      />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)
