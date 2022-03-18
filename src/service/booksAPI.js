class BooksAPI {
  constructor() {
    this.getRequestOptions = {
      method: 'GET',
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
}

export default BooksAPI
