document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.shop-size.active').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.ProductsCard.selected').forEach(c => c.classList.remove('selected'));
  
  const productsGrid = document.querySelector('.Products');
  if (!productsGrid) return;

  productsGrid.addEventListener('click', (event) => {
    const clicked = event.target.closest('.shop-size');
    if (!clicked) return;

    event.preventDefault();
    const card = clicked.closest('.ProductsCard');
    if (!card) return;

    const siblings = card.querySelectorAll('.shop-size');

    if (clicked.classList.contains('active')) {
      clicked.classList.remove('active');
      card.classList.remove('selected');
      console.log('🔹 Désélection:', clicked.textContent.trim());
      return;
    }

    siblings.forEach(s => s.classList.remove('active'));
    clicked.classList.add('active');
    card.classList.add('selected');
    console.log('✅ Sélection:', clicked.textContent.trim());
  });
});









document.querySelectorAll('.slider').forEach(slider => {
  const slides = slider.querySelectorAll('.slide');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === i);
    });
  }

  prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });
});
