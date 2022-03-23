import { getDatabase, ref, set, get, onValue } from 'firebase/database'

class RealtimeDatabase {
  constructor(app) {
    this.database = getDatabase(app)
  }

  saveData(root, data) {
    console.log(root, data)
    set(ref(this.database, root), data)
  }

  getData(root, onGet) {
    console.log(root)
    onValue(ref(this.database, root), snapshot => {
      const value = snapshot.val()
      value && onGet(value)
    })
  }
}

export default RealtimeDatabase
