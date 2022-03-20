import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

class AuthService {
  constructor() {
    this.auth = getAuth()
  }

  logIn(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password) ///
      .then(userCredential => {
        const user = userCredential.user.uid
        return user
      }) ///
      .catch(error => {
        console.log(error.code, error.message)
      })
  }
}

export default AuthService
