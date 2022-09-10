const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const progress = $(".progress");
const play = $(".play");
const pause = $(".pause");
const prev = $(".btn-prev");
const next = $(".btn-next");
const repeat = $(".repeat");
const random = $(".random");
const openList = $(".icon-up");
const closeList = $(".icon-down");
const audio = document.createElement("audio");
const disc = $(".disc");
const nameSong = $(".name-song");
const authorSong = $(".author-song");

let isPlaying = false;
let isRandom = false;
let songIndex = 0;
let updateTime;

const Musics = [
  {
    name: "Thích Thích",
    author: "Phương Ly",
    image: "./source/images/phuongly.jpg",
    music: "./source/audio/THICHTHICH.mp3",
  },
  {
    name: "2 Phút Hơn",
    author: "Pháo",
    image: "./source/images/image.jpg",
    music: "./source/audio/2 Phut Hon.mp3",
  },
  {
    name: "ANAK Remix 2021",
    author: "",
    image: "./source/images/image1.jpg",
    music: "./source/audio/ANAK Remix 2021.mp3",
  },
  {
    name: "Boom Cha La Ka",
    author: "",
    image: "./source/images/image2.jpg",
    music: "./source/audio/Boom Cha La Ka.mp3",
  },
  {
    name: "Dunn Remix",
    author: "",
    image: "./source/images/image3.jpg",
    music: "./source/audio/Dunn Remix.mp3",
  },
];
// render
const html = Musics.map((song) => {
  return `
    <div class="song">
        <div class="song-action" style="background-image: url(${song.image})"></div>
        <div class="song-desc">
            <p class="desc-name">${song.name}</p>
            <p class="desc-author">${song.author}</p>
        </div>
        <div class="time"></div>
    </div>
    `;
});
$(".songs").innerHTML = html.join("");
// load song
loadSong(songIndex);
function loadSong(songIndex) {
  progress.value = 0;

  audio.src = Musics[songIndex].music;
  audio.load();

  disc.style.backgroundImage = `url(${Musics[songIndex].image})`;
  nameSong.textContent = Musics[songIndex].name;
  authorSong.textContent = Musics[songIndex].author;
  updateTime = setInterval(setUpdate, 1000);
}

function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(audio.duration)) {
    seekPosition = audio.currentTime * (100 / audio.duration);
    progress.value = seekPosition;
  }
}
// random
random.addEventListener("click", () => {
  isRandom ? pauseRandom() : playRandom();
});
function playRandom() {
  isRandom = true;
  random.classList.add("active");
}
function pauseRandom() {
  isRandom = false;
  random.classList.remove("active");
}
// repeat song
repeat.addEventListener("click", () => {
  repeat.classList.toggle("active");
  let currIndex = songIndex;
  loadSong(currIndex);
  playSong();
});
// play | pause
$$(".action").forEach((action) => {
  action.addEventListener("click", () => {
    let check = action.classList.contains("play");
    if (check) {
      playSong();
    } else {
      pauseSong();
    }
  });
});
function playSong() {
  audio.play();
  isPlaying = true;
  disc.classList.add("rotate");
  pause.classList.add("active");
  play.classList.remove("active");
}
function pauseSong() {
  audio.pause();
  isPlaying = false;
  disc.classList.remove("rotate");
  play.classList.add("active");
  pause.classList.remove("active");
}
// next song
next.addEventListener("click", () => {
  if (songIndex < Musics.length - 1 && isRandom === false) {
    songIndex += 1;
  } else if (songIndex < Musics.length - 1 && isRandom === true) {
    let randomIndex = Number.parseInt(Math.random() * Musics.length);
    songIndex = randomIndex;
  } else {
    songIndex = 0;
  }
  loadSong(songIndex);
  playSong();
});
// prev song
prev.addEventListener("click", () => {
  if (songIndex > 0) {
    songIndex -= 1;
  } else {
    songIndex = Musics.length - 1;
  }
  loadSong(songIndex);
  playSong();
});
// seek
progress.addEventListener("change", () => {
  let seekTo = audio.duration * (progress.value / 100);
  audio.currentTime = seekTo;
});

// show/hide playlist
openList.addEventListener("click", listUp);
closeList.addEventListener("click", listDown);
function listUp() {
  Object.assign($(".playlist").style, {
    height: "80%",
    "border-top": "2px solid var(--icon-color)",
  });
  $(".icon-up").classList.remove("active");
  $(".icon-down").classList.add("active");
}
function listDown() {
  Object.assign($(".playlist").style, {
    height: "12%",
    "border-top": "none",
  });
  $(".icon-down").classList.remove("active");
  $(".icon-up").classList.add("active");
}
