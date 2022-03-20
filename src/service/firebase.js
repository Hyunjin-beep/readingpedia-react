import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_APAUTH_DOMAIN,
  // projectId: process.env.REACT_APP_API_PROJECT_ID,
  // databaseURL: process.env.REACT_APP_DB_URL,

  apiKey: 'AIzaSyBolLkIoMnpSNXy3_mGw3pvfIrymKAASVQ',
  authDomain: 'readingpedia-react.firebaseapp.com',
  projectId: 'readingpedia-react',
  databaseURL: 'https://readingpedia-react-default-rtdb.firebaseio.com/',
}

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig)
export default firebaseapp
