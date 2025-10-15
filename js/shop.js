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
