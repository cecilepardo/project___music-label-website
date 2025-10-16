document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".ProductsCard").forEach((card) => {
    const sizes = card.querySelectorAll(".shop-size");
    sizes.forEach((size) => {
      size.addEventListener("click", (e) => {
        e.preventDefault();
        if (size.classList.contains("active")) {
          size.classList.remove("active");
          card.classList.remove("selected");
        } else {
          sizes.forEach((s) => s.classList.remove("active"));
          size.classList.add("active");
          card.classList.add("selected");
        }
      });
    });
  });

  document.querySelectorAll(".slider").forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");
    const prev = slider.querySelector(".prev");
    const next = slider.querySelector(".next");
    let index = 0;

    function showSlide(i) {
      slides.forEach((slide, idx) => {
        slide.classList.toggle("active", idx === i);
      });
    }

    showSlide(index);

    if (slides.length > 1) {
      prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
      });

      next.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
      });
    } else {
      if (prev) prev.style.display = "none";
      if (next) next.style.display = "none";
    }
  });
});
