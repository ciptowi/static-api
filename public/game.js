//----- deklarasi variabel yang dibutuhkan assignment DOM
const result = document.getElementById("result");
const pScore = document.getElementById("p-score");
const cScore = document.getElementById("c-score");
const computer = document.getElementsByClassName("img-com");
let scoreP = 0;
let scoreC = 0;

//---------- fungsi login
const login = function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "" || password === "") {
    alert("Anda harus login!\nMasukkan username dan password");
  } else {
    window.location = "./game.html";
  }
};

//----- computer memilih random
let boot = getCom();
function getCom() {
  const nilai = Math.random();
  if (nilai <= 0.33) return "batu";
  if (nilai <= 0.67) return "kertas";
  return "gunting";
}

//---- aturan game dengam menerapkan konsep OOP
class Game {
  constructor(name, choice, computer) {
    this.name = name;
    this.choice = choice;
    this.computer = computer;
  }
  terminal() {
    console.log(`player pilih : ${this.choice}`);
    console.log(`computer pilih : ${this.computer}`);
  }
  result() {
    if (`${this.choice.length}` === `${this.computer.length}`) return "DRAW";
    if (
      `${this.choice.length}` - `${this.computer.length}` === -3 ||
      `${this.choice.length}` - `${this.computer.length}` === 2 ||
      `${this.choice.length}` - `${this.computer.length}` === 1
    )
      return "YOU WIN";
    else return "YOU LOST";
  }
  guiResult() {
    if (`${this.choice.length}` === `${this.computer.length}`) {
      result.style.color = "white";
      result.style.backgroundColor = "#44fa1b";
    }
    if (
      `${this.choice.length}` - `${this.computer.length}` === -3 ||
      `${this.choice.length}` - `${this.computer.length}` === 2 ||
      `${this.choice.length}` - `${this.computer.length}` === 1
    ) {
      result.style.color = "white";
      result.style.backgroundColor = "#44fa1b";
      scoreP++;
      pScore.innerHTML = scoreP;
    }
    if (
      `${this.choice.length}` - `${this.computer.length}` === 3 ||
      `${this.choice.length}` - `${this.computer.length}` === -2 ||
      `${this.choice.length}` - `${this.computer.length}` === -1
    ) {
      result.style.color = "white";
      result.style.backgroundColor = "#44fa1b";
      scoreC++;
      cScore.innerHTML = scoreC;
    }
  }
  guiCom() {
    if (`${this.computer}` === "batu") {
      computer[0].style.backgroundColor = "#fde9b6";
    } else if (`${this.computer}` === "kertas") {
      computer[1].style.backgroundColor = "#fde9b6";
    } else {
      computer[2].style.backgroundColor = "#fde9b6";
    }
  }
}

//---- animasi pilihan computer
function timerRun() {
  let timer0 = setTimeout(function () {
    computer[0].style.backgroundColor = "#fde9b6";
    setTimeout(function () {
      computer[0].style.backgroundColor = "unset";
    }, 400);
  }, 300);
  let timer1 = setTimeout(function () {
    computer[1].style.backgroundColor = "#fde9b6";
    setTimeout(function () {
      computer[1].style.backgroundColor = "unset";
    }, 600);
  }, 500);
  let timer2 = setTimeout(function () {
    computer[2].style.backgroundColor = "#fde9b6";
    setTimeout(function () {
      computer[2].style.backgroundColor = "unset";
    }, 800);
  }, 700);
}

//----- ketika user click jalankan fungsi
let running = document.querySelectorAll("span img");
running.forEach(function (i) {
  i.addEventListener("click", function () {
    const x = i.id;
    const main = new Game(player, x, boot);
    timerRun();
    setTimeout(function () {
      getCom();
      main.terminal();
      main.guiCom();
      main.guiResult();
      console.log("hasil : " + main.result());
      result.innerHTML = main.result();
      // clearTimeout(timerRun());
    }, 2000);
  });
});
