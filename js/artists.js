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
  }, 30);
  setTimeout(() => {
    el.innerHTML = `<span aria-hidden="true">${el.innerText}</span><span aria-hidden="true">${el.innerText}</span>${el.innerText}`;
  },5000)
  
  intervals.set(el, id);
}

function artistUpdate(firstname) {
  const artist = artists[firstname];
  const nameToUpdate = document.getElementById("artistName");
  // nameToUpdate.innerHTML = `<span aria-hidden="true">${artist.name}</span><span aria-hidden="true">${artist.name}</span>${artist.name}`;
  nameToUpdate.innerHTML = artist.name;
  const track1ToUpdate = document.getElementById("track1");
  track1ToUpdate.innerHTML = artist.track1;
  const album1ToUpdate = document.getElementById("album1");
  album1ToUpdate.innerHTML = artist.album1;
  const release1ToUpdate = document.getElementById("release1");
  release1ToUpdate.innerHTML = artist.release1;

  const track2ToUpdate = document.getElementById("track2");
  track2ToUpdate.innerHTML = artist.track2;
  const album2ToUpdate = document.getElementById("album2");
  album2ToUpdate.innerHTML = artist.album2;
  const release2ToUpdate = document.getElementById("release2");
  release2ToUpdate.innerHTML = artist.release2;

  const track3ToUpdate = document.getElementById("track3");
  track3ToUpdate.innerHTML = artist.track3;
  const album3ToUpdate = document.getElementById("album3");
  album3ToUpdate.innerHTML = artist.album3;
  const release3ToUpdate = document.getElementById("release3");
  release3ToUpdate.innerHTML = artist.release3;

  const imgToUpdate = document.getElementById("profileimg");
  imgToUpdate.src = artist.image;
}

const cardJuliette = document.getElementById("card-juliette");
cardJuliette.addEventListener("click", () => {
  // title.setAttribute("data-value", artists.juliette.name);
  track.setAttribute("data-value", artists.juliette.track1);
  track_2.setAttribute("data-value", artists.juliette.track2);
  track_3.setAttribute("data-value", artists.juliette.track3);
  album_1.setAttribute("data-value", artists.juliette.album1);
  album_2.setAttribute("data-value", artists.juliette.album2);
  album_3.setAttribute("data-value", artists.juliette.album3);
  release_1.setAttribute("data-value", artists.juliette.release1);
  release_2.setAttribute("data-value", artists.juliette.release2);
  release_3.setAttribute("data-value", artists.juliette.release3);
  artistUpdate("juliette");
  animateTitle(title);
  animateTitle(track);
  animateTitle(track_2);
  animateTitle(track_3);
  animateTitle(album_1);
  animateTitle(album_2);
  animateTitle(album_3);
  animateTitle(release_1);
  animateTitle(release_2);
  animateTitle(release_3);
});

const cardThomas = document.getElementById("card-thomas");
cardThomas.addEventListener("click", () => {
  // title.setAttribute("data-value", artists.thomas.name);
  track.setAttribute("data-value", artists.thomas.track1);
  track_2.setAttribute("data-value", artists.thomas.track2);
  track_3.setAttribute("data-value", artists.thomas.track3);
  album_1.setAttribute("data-value", artists.thomas.album1);
  album_2.setAttribute("data-value", artists.thomas.album2);
  album_3.setAttribute("data-value", artists.thomas.album3);
  release_1.setAttribute("data-value", artists.thomas.release1);
  release_2.setAttribute("data-value", artists.thomas.release2);
  release_3.setAttribute("data-value", artists.thomas.release3);
  artistUpdate("thomas");
  animateTitle(title);
  animateTitle(track);
  animateTitle(track_2);
  animateTitle(track_3);
  animateTitle(album_1);
  animateTitle(album_2);
  animateTitle(album_3);
  animateTitle(release_1);
  animateTitle(release_2);
  animateTitle(release_3);
});

const cardTeddy = document.getElementById("card-teddy");
cardTeddy.addEventListener("click", () => {
  title.setAttribute("data-value", "TEDDY");
  track.setAttribute("data-value", artists.teddy.track1);
  track_2.setAttribute("data-value", artists.teddy.track2);
  track_3.setAttribute("data-value", artists.teddy.track3);
  album_1.setAttribute("data-value", artists.teddy.album1);
  album_2.setAttribute("data-value", artists.teddy.album2);
  album_3.setAttribute("data-value", artists.teddy.album3);
  release_1.setAttribute("data-value", artists.teddy.release1);
  release_2.setAttribute("data-value", artists.teddy.release2);
  release_3.setAttribute("data-value", artists.teddy.release3);
  artistUpdate("teddy");
  animateTitle(title);
  animateTitle(track);
  animateTitle(track_2);
  animateTitle(track_3);
  animateTitle(album_1);
  animateTitle(album_2);
  animateTitle(album_3);
  animateTitle(release_1);
  animateTitle(release_2);
  animateTitle(release_3);
});

const cardCecile = document.getElementById("card-cecile");
cardCecile.addEventListener("click", () => {
  title.setAttribute("data-value", "CECILE");
  track.setAttribute("data-value", artists.cecile.track1);
  track_2.setAttribute("data-value", artists.cecile.track2);
  track_3.setAttribute("data-value", artists.cecile.track3);
  album_1.setAttribute("data-value", artists.cecile.album1);
  album_2.setAttribute("data-value", artists.cecile.album2);
  album_3.setAttribute("data-value", artists.cecile.album3);
  release_1.setAttribute("data-value", artists.cecile.release1);
  release_2.setAttribute("data-value", artists.cecile.release2);
  release_3.setAttribute("data-value", artists.cecile.release3);
  artistUpdate("cecile");
  animateTitle(title);
  animateTitle(track);
  animateTitle(track_2);
  animateTitle(track_3);
  animateTitle(album_1);
  animateTitle(album_2);
  animateTitle(album_3);
  animateTitle(release_1);
  animateTitle(release_2);
  animateTitle(release_3);
});

const cardRomain = document.getElementById("card-romain");
cardRomain.addEventListener("click", () => {
  title.setAttribute("data-value", "ROMAIN");
  track.setAttribute("data-value", artists.romain.track1);
  track_2.setAttribute("data-value", artists.romain.track2);
  track_3.setAttribute("data-value", artists.romain.track3);
  album_1.setAttribute("data-value", artists.romain.album1);
  album_2.setAttribute("data-value", artists.romain.album2);
  album_3.setAttribute("data-value", artists.romain.album3);
  release_1.setAttribute("data-value", artists.romain.release1);
  release_2.setAttribute("data-value", artists.romain.release2);
  release_3.setAttribute("data-value", artists.romain.release3);
  artistUpdate("romain");
  animateTitle(title);
  animateTitle(track);
  animateTitle(track_2);
  animateTitle(track_3);
  animateTitle(album_1);
  animateTitle(album_2);
  animateTitle(album_3);
  animateTitle(release_1);
  animateTitle(release_2);
  animateTitle(release_3);
});

const cardMaxime = document.getElementById("card-maxime");
cardMaxime.addEventListener("click", () => {
  title.setAttribute("data-value", "MAXIME");
  track.setAttribute("data-value", artists.maxime.track1);
  track_2.setAttribute("data-value", artists.maxime.track2);
  track_3.setAttribute("data-value", artists.maxime.track3);
  album_1.setAttribute("data-value", artists.maxime.album1);
  album_2.setAttribute("data-value", artists.maxime.album2);
  album_3.setAttribute("data-value", artists.maxime.album3);
  release_1.setAttribute("data-value", artists.maxime.release1);
  release_2.setAttribute("data-value", artists.maxime.release2);
  release_3.setAttribute("data-value", artists.maxime.release3);
  artistUpdate("maxime");
  animateTitle(title);
  animateTitle(track);
  animateTitle(track_2);
  animateTitle(track_3);
  animateTitle(album_1);
  animateTitle(album_2);
  animateTitle(album_3);
  animateTitle(release_1);
  animateTitle(release_2);
  animateTitle(release_3);
});

const cardJoel = document.getElementById("card-joel");
cardJoel.addEventListener("click", () => {
  title.setAttribute("data-value", "JOEL");
  track.setAttribute("data-value", artists.joel.track1);
  track_2.setAttribute("data-value", artists.joel.track2);
  track_3.setAttribute("data-value", artists.joel.track3);
  album_1.setAttribute("data-value", artists.joel.album1);
  album_2.setAttribute("data-value", artists.joel.album2);
  album_3.setAttribute("data-value", artists.joel.album3);
  release_1.setAttribute("data-value", artists.joel.release1);
  release_2.setAttribute("data-value", artists.joel.release2);
  release_3.setAttribute("data-value", artists.joel.release3);
  artistUpdate("joel");
  animateTitle(title);
  animateTitle(track);
  animateTitle(track_2);
  animateTitle(track_3);
  animateTitle(album_1);
  animateTitle(album_2);
  animateTitle(album_3);
  animateTitle(release_1);
  animateTitle(release_2);
  animateTitle(release_3);
});


// function animateTitle(el) {
//   let iterations = 0;
//   clearInterval(intervals.get(el));
//   const id = setInterval(() => {
//     el.innerText = el.dataset.value
//       .split("")
//       .map((letter, index) => {
//         if (index < iterations) {
//           return el.dataset.value[index];
//         }
//         return letters[Math.floor(Math.random() * 26)];
//       })
//       .join("");

//     if (iterations >= el.dataset.value.length) {
//       clearInterval(id);
//       intervals.delete(el);
//     }

//     iterations += 1 / 3;
//   }, 30);
//   intervals.set(el, id);
// }