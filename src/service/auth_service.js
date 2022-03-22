import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth'

class AuthService {
  constructor() {
    this.auth = getAuth()
  }

  async signIn(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      ) ///

      const user = userCredential.user.uid
      return user
    } catch (error) {
      console.log(error.code, error.message)
    }
  }

  onAuthState(onCheck) {
    onAuthStateChanged(this.auth, user => {
      onCheck(user)
    })
  }

  async login(email, password) {
    const userCredential = await signInWithEmailAndPassword(
      this.auth,
      email,
      password
    ) ///

    const userID = userCredential.user.uid
    return userID
  }
}

export default AuthService
