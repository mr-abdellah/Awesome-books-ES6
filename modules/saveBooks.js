import Books from './bookClass.js';
import { myBooks, addBook } from './addBookFunction.js';

const title = document.querySelector('#title');
const author = document.querySelector('#author');

const addBtn = document.querySelector('#add');

function addingBook() {
  addBtn.addEventListener('click', () => {
    const book = new Books();
    myBooks.push(book);
    addBook(book, title.value, author.value);
    book.add(myBooks);
    Books.emptyField();
  });
}

export default addingBook;