import { myBooks, addBook } from './modules/addBookFunction.js';
import navbarLinks from './modules/navbarLinks.js';
import Books from './modules/bookClass.js';
import addingBook from './modules/saveBooks.js';
import showTime from './modules/time.js';

navbarLinks();

showTime();

let storage = [];
storage = JSON.parse(localStorage.getItem('books')) || [];

for (let i = 0; i < storage.length; i += 1) {
  const book = new Books();
  book.title = storage[i].title;
  book.author = storage[i].author;
  myBooks.push(book);
  addBook(myBooks[i], myBooks[i].title, myBooks[i].author);
}

addingBook();