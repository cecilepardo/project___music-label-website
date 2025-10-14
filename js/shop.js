const sizeButtons = document.querySelectorAll('.ProductsCard .shop-size');

sizeButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();


    const siblingButtons = button.parentElement.querySelectorAll('.shop-size');


    siblingButtons.forEach(btn => btn.classList.remove('active'));


    button.classList.add('active');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const sizeButtons = document.querySelectorAll('.ProductsCard .shop-size');

  sizeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const siblingButtons = button.parentElement.querySelectorAll('.shop-size');
      siblingButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});