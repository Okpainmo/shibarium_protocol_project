// variables

const openBtn = document.querySelector('.mobile-menu-open-btn');
const closeBtn = document.querySelector('.mobile-menu-close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const formDOM = document.querySelector('.contact-form');

// handling mobile menu toggle

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open-mobile-menu');
  mobileMenu.classList.add('close-mobile-menu');
});

openBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('close-mobile-menu');
  mobileMenu.classList.add('open-mobile-menu');
});

// preventing default form submission
formDOM.addEventListener('submit', (e) => {
  e.preventDefault();
  //   alert('default prevented');
});
