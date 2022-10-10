/*
1. start click 
    + count timer 
    + robot select random
    + event click player select
        + compare
        + visibility (timer, result)
2. reset game 
    + reset value random
    + reset timer
*/
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const start = $(".start");
const reset = $(".reset");
const timer = $(".timer");
const result = $(".result");

let x,
  player,
  robot,
  random,
  i = 10;

start.addEventListener("click", () => {
  random = Math.floor(Math.random() * 3);
  //robot pick
  $$(".robot .name").forEach((item, index) => {
    if (index === random) {
      robot = item.textContent.toLowerCase();
    }
  });
  //player pick in timer
  x = setInterval(() => {
    if (i < 0) {
      alert("Please start new game");
      timer.style.display = "none";
      clearInterval(x);
      i = 10;
    } else if (0 <= i < 10) {
      timer.style.display = "block";
      timer.innerText = i + "s";
      i--;
      $$(".person .image").forEach((element) => {
        element.addEventListener("click", () => {
          element.classList.add("active");
          $$(".robot .image")[random].classList.add("active");
          player = element.nextElementSibling.textContent.toLowerCase();
          compare(player, robot);
          timer.style.display = "none";
          clearInterval(x);
        });
      });
    }
  }, 1000);
});
reset.addEventListener("click", () => {
  i = 10;
  random = "";
  timer.innerText = "";
  result.innerText = "";
  $$(".image").forEach((item) => {
    item.classList.remove("active");
  });
  clearInterval(x);
});
function compare(player, robot) {
  if (player === robot) {
    result.innerText = "The game is drawn!";
  } else if (player == "rock") {
    if (robot == "paper") {
      result.innerText = "Robot win!";
    } else {
      result.innerText = "Player win!";
    }
  } else if (player == "paper") {
    if (robot == "scissors") {
      result.innerText = "Robot win!";
    } else {
      result.innerText = "Player win!";
    }
  } else if (player == "scissors") {
    if (robot == "rock") {
      result.innerText = "Robot win!";
    } else {
      result.innerText = "Player win!";
    }
  }
}
