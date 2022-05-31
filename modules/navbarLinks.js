const navbarLinks = () => {
  const addSection = document.querySelector('.add-book');
  const containerOfAddedBooks = document.querySelector('.container');
  const contact = document.querySelector('.contact');

  const navList = document.querySelector('#navList');
  navList.addEventListener('click', (e) => {
    e.preventDefault();
    addSection.style.display = 'none';
    contact.style.display = 'none';
    containerOfAddedBooks.style.display = 'flex';
  });

  const navAdd = document.querySelector('#navAdd');

  navAdd.addEventListener('click', (e) => {
    e.preventDefault();
    containerOfAddedBooks.style.display = 'none';
    contact.style.display = 'none';
    addSection.style.display = 'flex';
  });

  const navContact = document.querySelector('#navContact');
  navContact.addEventListener('click', (e) => {
    e.preventDefault();
    containerOfAddedBooks.style.display = 'none';
    addSection.style.display = 'none';
    contact.style.display = 'flex';
  });
};

export default navbarLinks;