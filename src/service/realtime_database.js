import { getDatabase, ref, set } from 'firebase/database'

class RealtimeDatabase {
  constructor(app) {
    this.database = getDatabase(app)
  }

  saveData(root, data) {
    console.log(root, data)
    set(ref(this.database, root), data)
  }
}

export default RealtimeDatabase
