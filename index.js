/* eslint-disable no-use-before-define */
import Navbar from './modules/navbar.js';
import BookLibrary from './modules/bookShelf.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const bookForm = document.getElementById('book-entry');
const bookStore = document.getElementById('bookStore');
const dateBox = document.querySelector('#dates');
const currentDate = DateTime.now();

const lastBook = new BookLibrary();

const removeBook = (index) => {
  lastBook.removeBook(index);
  generateBooks();
};

const generateBooks = () => {
  bookStore.innerHTML = '';
  for (let i = 0; i < lastBook.theShelf().length; i += 1) {
    const divElement = document.createElement('div');
    divElement.className = 'reader';
    const book = lastBook.theShelf()[i];
    divElement.innerHTML = `
          <p class='book-title'>${book.name} by ${book.author}</p>
          <button class='btn' data-index="${i}">Remove</button>
      `;
    bookStore.appendChild(divElement);
  }
  const rmvBtns = document.querySelectorAll('.btn');
  rmvBtns.forEach((rmvBtn) => {
    rmvBtn.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      if (index !== null) {
        removeBook(index);
      }
    });
  });
};

dateBox.innerHTML = `
  <p>${currentDate}</p>
`;

const addBook = () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#Author').value;
  lastBook.addBook(title, author);
  generateBooks();
};

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addBook();
});

window.addEventListener('load', generateBooks);
Navbar();