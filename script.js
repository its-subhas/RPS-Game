let randomnumber;
let computerchoice;
let result;
let score;
let data;
data = localStorage.getItem("score");
if (data === undefined || data === null) {
  score = {
    won: 0,
    draw: 0,
    lost: 0,
  };
  document.querySelector(
    ".score"
  ).innerHTML = `Score - [  Won : ${score.won} ,  Draw : ${score.draw} ,  Lost : ${score.lost}  ] <button class="reset" onclick="reset();">Reset</button>`;
} else {
  score = JSON.parse(localStorage.getItem("score"));
  document.querySelector(
    ".score"
  ).innerHTML = `Score - [  Won : ${score.won} ,  Draw : ${score.draw} ,  Lost : ${score.lost}  ] <button class="reset" onclick="reset();">Reset</button>`;
}
function computerPlay() {
  randomnumber = Math.random() * 3;
  if (randomnumber > 0 && randomnumber <= 1) {
    computerchoice = "Rock";
  } else if (randomnumber > 1 && randomnumber <= 2) {
    computerchoice = "Paper";
  } else {
    computerchoice = "Scissor";
  }
}
score = {
  won: 0,
  draw: 0,
  lost: 0,
};
function computerimage() {
  if (computerchoice === "Rock") {
    document.querySelector(
      ".computer"
    ).innerHTML = `CPU has selected -<div class="Rock"></div>`;
  } else if (computerchoice === "Paper") {
    document.querySelector(
      ".computer"
    ).innerHTML = `CPU has selected -<div class="Paper"></div>`;
  } else {
    document.querySelector(
      ".computer"
    ).innerHTML = `CPU has selected -<div class="Scissor"></div>`;
  }
}
function rock() {
  computerPlay();
  if (computerchoice === "Rock") {
    result = "Match Draw !";
    score.draw++;
  } else if (computerchoice === "Paper") {
    result = "You Lose !";
    score.lost++;
  } else {
    result = "You Win !";
    score.won++;
  }
  document.querySelector(
    ".userchoice"
  ).innerHTML = `You have selected -<div class="Rock"></div>`;
  computerimage();
  document.querySelector(".result").innerHTML = `Result - ${result}`;
  document.querySelector(
    ".score"
  ).innerHTML = `Score - [  Won : ${score.won} ,  Draw : ${score.draw} ,  Lost : ${score.lost}  ] <button class="reset" onclick="reset();">Reset</button>`;
  localStorage.setItem("score", JSON.stringify(score));
}
function paper() {
  computerPlay();
  if (computerchoice === "Paper") {
    result = "Match Draw !";
    score.draw++;
  } else if (computerchoice === "Rock") {
    result = "You Win !";
    score.won++;
  } else {
    result = "You Lose !";
    score.lost++;
  }
  document.querySelector(
    ".userchoice"
  ).innerHTML = `You have selected -<div class="Paper"></div>`;
  computerimage();
  document.querySelector(".result").innerHTML = `Result - ${result}`;
  document.querySelector(
    ".score"
  ).innerHTML = `Score - [  Won : ${score.won} ,  Draw : ${score.draw} ,  Lost : ${score.lost}  ] <button class="reset" onclick="reset();">Reset</button>`;
  localStorage.setItem("score", JSON.stringify(score));
}
function scissor() {
  computerPlay();
  if (computerchoice === "Scissor") {
    result = "Match Draw !";
    score.draw++;
  } else if (computerchoice === "Paper") {
    result = "You Win !";
    score.won++;
  } else {
    result = "You Lose !";
    score.lost++;
  }
  document.querySelector(
    ".userchoice"
  ).innerHTML = `You have selected -<div class="Scissor"></div>`;
  computerimage();
  document.querySelector(".result").innerHTML = `Result - ${result}`;
  document.querySelector(
    ".score"
  ).innerHTML = `Score - [  Won : ${score.won} ,  Draw : ${score.draw} ,  Lost : ${score.lost}  ] <button class="reset" onclick="reset();">Reset</button>`;
  localStorage.setItem("score", JSON.stringify(score));
}
function reset() {
  score.won = 0;
  score.draw = 0;
  score.lost = 0;
  localStorage.clear();
  document.querySelector(".userchoice").innerHTML = "";
  document.querySelector(".computer").innerHTML = "";
  document.querySelector(".result").innerHTML = "";
  document.querySelector(
    ".score"
  ).innerHTML = `Score - [  Won : ${score.won} ,  Draw : ${score.draw} ,  Lost : ${score.lost}  ] <button class="reset" onclick="reset();">Reset</button>`;
}
