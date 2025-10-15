const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
    }
  });
}, {
  threshold: 0.4 
});

document.querySelectorAll('.disk').forEach(disk => {
  observer.observe(disk);
});
if (entry.isIntersecting) {
  entry.target.classList.add('visible');
  entry.target.classList.remove('init');
}
document.querySelectorAll('.disk').forEach(disk => {
  disk.addEventListener('mousemove', e => {
    const rect = disk.getBoundingClientRect();
    disk.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    disk.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });
});

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', (e) => {
    const cover = e.target.closest('.disk').querySelector('.disk-cover');
    const originalFilter = cover.style.filter;

    cover.style.filter = `
      drop-shadow(-3px 0 red)
      drop-shadow(3px 0 cyan)
    `;

    cover.style.transform = 'translateX(-2px)';
    setTimeout(() => {
      cover.style.transform = 'translateX(2px)';
    }, 50);
    setTimeout(() => {
      cover.style.transform = 'translateX(0)';
      cover.style.filter = originalFilter || 'none';
    }, 100);
  });
});
const card = document.querySelector('.card');
card.addEventListener('mouseenter', () => {
  card.classList.add('glitch');
  setTimeout(() => card.classList.remove('glitch'), 600); // 0.3s × 2
});