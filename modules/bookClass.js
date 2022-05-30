class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add(myBooks) {
    this.add = localStorage.setItem('books', JSON.stringify(myBooks));
  }

  remove(myBooks) {
    myBooks = myBooks.filter((element) => element !== this);
    localStorage.setItem('books', JSON.stringify(myBooks));
  }

  static emptyField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

export default Books;