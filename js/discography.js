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