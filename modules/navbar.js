const Navbar = () => {
  const bookForm = document.getElementById('book-entry');
  const bookStore = document.getElementById('bookStore');
  const listClick = document.querySelector('#list');
  const addClick = document.querySelector('#add-book');
  const contactClick = document.querySelector('#contact-details');
  const storeTitle = document.querySelector('#store-title');
  const contacts = document.querySelector('#contact-box');

  const showForm = () => {
    if (bookStore.style.display === 'block') {
      bookStore.style.display = 'none';
      storeTitle.style.display = 'none';
      contacts.style.display = 'none';
    } else if (contacts.style.display) {
      contacts.style.display = 'none';
    }
    bookForm.style.display = 'flex';
  };

  const showShelf = () => {
    if (bookForm.style.display === 'flex') {
      bookForm.style.display = 'none';
    }
    contacts.style.display = 'none';
    bookStore.style.display = 'block';
    storeTitle.style.display = 'block';
  };

  const contactUs = () => {
    if (bookStore.style.display === 'block') {
      bookStore.style.display = 'none';
      storeTitle.style.display = 'none';
    }
    bookForm.style.display = 'none';
    contacts.style.display = 'block';
  };

  contactClick.addEventListener('click', contactUs);
  addClick.addEventListener('click', showForm);
  listClick.addEventListener('click', showShelf);
};

export default Navbar;