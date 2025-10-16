const artists = {
  thomas: {
    name: "THOMAS",
    track1: "YOUNG, WILD & FREE",
    album1: "Mac and Devin",
    release1: "2011",
    track2: "BLACK AND YELLOW",
    album2: "Rolling Papers",
    release2: "2011",
    track3: "STILL D.R.E",
    album3: "'2001'",
    release3: "1999",
    image: "assets/images/portrait-thomas.png",
  },
  juliette: {
    name: "JULIETTE",
    track1: "LE TEMPS",
    album1: "Liens du 100",
    release1: "2022",
    track2: "BOLIDE ALLEMAND",
    album2: "Liens du 100",
    release2: "2022",
    track3: "POUR ELLE",
    album3: "A la vie a la mort",
    release3: "2024",
    image: "assets/images/portrait-juliette.png",
  },
  maxime: {
    name: "MAXIME",
    track1: "NO FLOCKIN''",
    album1: "Institution",
    release1: "2015",
    track2: "RIC FLAIR DRIP",
    album2: "Without Warning",
    release2: "2017",
    track3: "BROTHER STONE",
    album3: "Love Sick",
    release3: "2024",
    image: "assets/images/portrait-maxime.png",
  },
  romain: {
    name: "ROMAIN",
    track1: "SYNTHETIC HORIZONS",
    album1: "Void Transmissions",
    release1: "2018",
    track2: "APEX",
    album2: "Fractal Patterns",
    release2: "2019",
    track3: "NEXØ",
    album3: "Fractal Patterns",
    release3: "2019",
    image: "assets/images/portrait-romain.png",
  },

  joel: {
    name: "JOEL",
    track1: "NINAO",
    album1: "Le Nord Se Souvient",
    release1: "2024",
    track2: "CIEL",
    album2: "Le Nord Se Souvient",
    release2: "2024",
    track3: "C'EST QUOI L'DEL",
    album3: "Les Vestiges Du Fléau",
    release3: "2021",
    image: "assets/images/portrait-joel.png",
  },

  teddy: {
    name: "TEDDY",
    track1: "ARUARIAN DANCE",
    album1: "Samurai Champloo",
    release1: "2004",
    track2: "MATRIX",
    album2: "Matrix",
    release2: "2016",
    track3: "DARK BEACH",
    album3: "Abyss",
    release3: "2015",
    image: "assets/images/portrait-teddy.png",
  },
  cecile: {
    name: "CECILE",
    track1: "LIMINAL DECAY",
    album1: "No Gods Only Noise",
    release1: "2022",
    track2: "COLLAPSE",
    album2: "No Gods Only Noise",
    release2: "2022",
    track3: "ZERO SIGNAL SOCIETY",
    album3: "No Gods Only Noise",
    release3: "2022",
    image: "assets/images/portrait-cecile.png",
  },
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const intervals = new WeakMap();
const title = document.querySelector("h1");
const track = document.querySelector("h2");
const track_2 = document.getElementById("track2");
const track_3 = document.getElementById("track3");
const album_1 = document.getElementById("album1");
const album_2 = document.getElementById("album2");
const album_3 = document.getElementById("album3");
const release_1 = document.getElementById("release1");
const release_2 = document.getElementById("release2");
const release_3 = document.getElementById("release3");

const elements = [
  title,
  track,
  track_2,
  track_3,
  album_1,
  album_2,
  album_3,
  release_1,
  release_2,
  release_3,
];

function animateTitle(el) {
  let iterations = 0;
  clearInterval(intervals.get(el));
  const id = setInterval(() => {
    el.innerText = el.dataset.value
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return el.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= el.dataset.value.length) {
      clearInterval(id);
      intervals.delete(el);
    }
    iterations += 1 / 3;

    if (el.tagName == "H1") {
      const span1 = document.createElement("span");
      span1.ariaHidden = true ;
      const span2 = document.createElement("span");
      span2.ariaHidden = true ;
      span1.innerText = el.innerText;
      span2.innerText = el.innerText;
      el.appendChild(span1);
      el.appendChild(span2);
    }
  }, 30);

  intervals.set(el, id);
}

function artistUpdate(firstname) {
  const artist = artists[firstname];
  title.setAttribute("data-value", artist.name);

  track.innerHTML = artist.track1;
  track.setAttribute("data-value", artist.track1);
  album_1.innerHTML = artist.album1;
  album_1.setAttribute("data-value", artist.album1);
  release_1.innerHTML = artist.release1;
  release_1.setAttribute("data-value", artist.release1);

  track_2.innerHTML = artist.track2;
  track_2.setAttribute("data-value", artist.track2);
  album_2.innerHTML = artist.album2;
  album_2.setAttribute("data-value", artist.album2);
  release_2.innerHTML = artist.release2;
  release_2.setAttribute("data-value", artist.release2);

  track_3.innerHTML = artist.track3;
  track_3.setAttribute("data-value", artist.track3);
  album_3.innerHTML = artist.album3;
  album_3.setAttribute("data-value", artist.album3);
  release_3.innerHTML = artist.release3;
  release_3.setAttribute("data-value", artist.release3);

  const imgToUpdate = document.getElementById("profileimg");
  imgToUpdate.src = artist.image;
}

const cardJuliette = document.getElementById("card-juliette");
cardJuliette.addEventListener("click", () => {
  artistUpdate("juliette");
  for (const element of elements) {
    animateTitle(element);
  }
});

const cardThomas = document.getElementById("card-thomas");
cardThomas.addEventListener("click", () => {
  artistUpdate("thomas");
  for (const element of elements) {
    animateTitle(element);
  }
});

const cardTeddy = document.getElementById("card-teddy");
cardTeddy.addEventListener("click", () => {
  artistUpdate("teddy");
  for (const element of elements) {
    animateTitle(element);
  }
});

const cardCecile = document.getElementById("card-cecile");
cardCecile.addEventListener("click", () => {
  artistUpdate("cecile");
  for (const element of elements) {
    animateTitle(element);
  }
});

const cardRomain = document.getElementById("card-romain");
cardRomain.addEventListener("click", () => {
  artistUpdate("romain");
  for (const element of elements) {
    animateTitle(element);
  }
});

const cardMaxime = document.getElementById("card-maxime");
cardMaxime.addEventListener("click", () => {
  artistUpdate("maxime");
  for (const element of elements) {
    animateTitle(element);
  }
});

const cardJoel = document.getElementById("card-joel");
cardJoel.addEventListener("click", () => {
  artistUpdate("joel");
  for (const element of elements) {
    animateTitle(element);
  }
});
