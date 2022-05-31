const booksContainer = document.querySelector('.books-container');

const myBooks = [];

const addBook = (book, title, author) => {
  book.title = title;
  book.author = author;

  const bookContainer = document.createElement('div');
  const bookInfo = document.createElement('h2');
  const deleteButton = document.createElement('button');

  bookContainer.classList.add('bookContainer');
  bookInfo.classList.add('bookTitle');
  deleteButton.classList.add('delete');

  booksContainer.appendChild(bookContainer);
  bookContainer.appendChild(bookInfo);
  bookContainer.appendChild(deleteButton);

  bookInfo.textContent = ` ${title} by ${author}`;
  deleteButton.textContent = 'Delete';

  deleteButton.addEventListener('click', (event) => {
    event.target.parentNode.remove();
    book.remove(myBooks);
  });

  const ul = booksContainer.style;
  const li = bookContainer.style;
  bookInfo.style.marginLeft = '2%';
  bookInfo.style.whiteSpace = 'nowrap';
  ul.width = '75%';
  ul.display = 'flex';
  ul.flexDirection = 'column';
  li.width = '100%';
  li.display = 'flex';
  li.justifyContent = 'space-between';
  li.alignItems = 'center';
  li.marginTop = '2%';
  li.marginBottom = '2%';
  li.border = '2px solid black';
  deleteButton.style.marginRight = '2%';
};

export { myBooks, booksContainer, addBook };