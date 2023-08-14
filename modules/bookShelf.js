/* eslint-disable class-methods-use-this */
import BookObj from './books.js';

export default class BookLibrary {
  constructor() {
    this.bookShelf = this.theShelf();
  }

  addBook(title, author) {
    const newBook = new BookObj(title, author);
    this.bookShelf.push(newBook);
    this.saveBooksToLocalStorage();
  }

  removeBook(index) {
    this.bookShelf.splice(index, 1);
    this.saveBooksToLocalStorage();
  }

  saveBooksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.bookShelf));
  }

  theShelf() {
    const shelfBook = JSON.parse(localStorage.getItem('books')) || [];
    return shelfBook;
  }
}