const burgerToggle = document.getElementById('burgerToggle');
const navBurger = document.querySelector('.burgerMenu');
burgerToggle.addEventListener('click', () => {
  navBurger.classList.toggle('openBurger');
  burgerToggle.classList.toggle('open');
})