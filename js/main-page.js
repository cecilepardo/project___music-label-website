const selector = ".goCrazy";

const startAnimations = () => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    const max = +element.dataset.max;
    const min = +element.dataset.min;
    const duration = +element.dataset.duration;
    const unit = element.dataset.unit;
    let counter = min;

    const interval = setInterval(() => {
      counter++;
      element.textContent = counter + unit;
      if (counter === max) {
        clearInterval(interval);
      }
    }, duration / (max - min));
  });
}

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startAnimations()
    }
  });
}, {
  threshold: 0.7
});

const counters = document.querySelectorAll(".goCrazy");
counters.forEach((el) => counterObs.observe(el));




const scrollObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("newsAnim");
    }     else {
      entry.target.classList.remove("newsAnim");
    }
  });
}, {
  threshold: 0.7
});

const scrollAnim = document.querySelectorAll(".newsAllContainer");
scrollAnim.forEach((el) => scrollObs.observe(el));


const sectionSnap = document.querySelectorAll(".scrollSnap");

const observerCallback = (entries) => {
  entries.forEach(entry => {

    const scrollItem = document.querySelector(`.${entry.target.dataset.scroll}`)

    if (entry.isIntersecting) {
      scrollItem.classList.add('scrollIndicatorToggle');
    } else {
      scrollItem.classList.remove('scrollIndicatorToggle');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, {
  threshold: 0.7
});


sectionSnap.forEach((el) => observer.observe(el));

