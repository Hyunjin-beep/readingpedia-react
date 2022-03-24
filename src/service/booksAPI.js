class BooksAPI {
  constructor() {
    this.getRequestOptions = {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    this.googleBooks = `https://www.googleapis.com/books/v1/volumes`

    this.nylink =
      'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=a5bvxgKcuKEGoqTrnDOYoon74EqWIJAz'
  }

  async getBestsellers() {
    const response = await fetch(`${this.nylink}`, this.getRequestOptions)

    const json = await response.json()

    return json.results.map(result => {
      return result.isbns[0].isbn13
    })
  }

  async googleBooksISBN(isbn) {
    const response = await fetch(
      `${this.googleBooks}?q=isbn:${isbn}`,
      this.getRequestOptions
    )
    const json = await response.json()

    return json.items
  }

  async googleBooksGenre(category) {
    const start = Math.floor(Math.random() * 160)
    const response = await fetch(
      `${this.googleBooks}?q=subject:${category}&startIndex=${start}&maxResults=25`,
      this.getRequestOptions
    )

    const json = await response.json()

    return json.items
  }

  async googleBooksID(id) {
    const response = await fetch(
      `${this.googleBooks}/${id}`,
      this.getRequestOptions
    )
    const json = await response.json()
    return json
  }
}

export default BooksAPI
