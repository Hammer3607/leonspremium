// Modal references
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const cartBtn = document.getElementById('cart-btn');
const shopNowBtn = document.getElementById('shop-now-btn');

const aboutModal = document.getElementById('about-modal');
const contactModal = document.getElementById('contact-modal');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const cartModal = document.getElementById('cart-modal');

const aboutClose = document.getElementById('about-close');
const contactClose = document.getElementById('contact-close');
const loginClose = document.getElementById('login-close');
const signupClose = document.getElementById('signup-close');
const cartClose = document.getElementById('cart-close');

// Open modals on button click
aboutBtn.addEventListener('click', () => {
  aboutModal.style.display = 'block';
});

contactBtn.addEventListener('click', () => {
  contactModal.style.display = 'block';
});

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

signupBtn.addEventListener('click', () => {
  signupModal.style.display = 'block';
});

cartBtn.addEventListener('click', () => {
  cartModal.style.display = 'block';
});

// Close modals on close button click
aboutClose.addEventListener('click', () => {
  aboutModal.style.display = 'none';
});

contactClose.addEventListener('click', () => {
  contactModal.style.display = 'none';
});

loginClose.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

signupClose.addEventListener('click', () => {
  signupModal.style.display = 'none';
});

cartClose.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

// Close modals on outside click
window.addEventListener('click', (e) => {
  if (e.target === aboutModal) aboutModal.style.display = 'none';
  if (e.target === contactModal) contactModal.style.display = 'none';
  if (e.target === loginModal) loginModal.style.display = 'none';
  if (e.target === signupModal) signupModal.style.display = 'none';
  if (e.target === cartModal) cartModal.style.display = 'none';
});

// Shop Now button click - redirect to shop.html
shopNowBtn.addEventListener('click', () => {
  window.location.href = 'shop.html';
});

