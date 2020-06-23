import "./styles.css";

var counter = 0;
var myVar;
var id;

var elems = document.querySelectorAll(".col");

for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", function() {
    fillCell(this);
  });
}

function fillCell(td) {
  move();
  ClearTime();
  if (counter % 2 === 0) {
    if (td.innerHTML === "") {
      counter++;
      td.innerHTML = "X";
      td.style.backgroundColor = "rgb(124, 252, 0)";
      timer();
      Whowon();
      checkDraw();
    } else {
      alert("This cell has already marking in it");
    }
  } else {
    if (td.innerHTML === "") {
      counter++;
      td.innerHTML = "O";
      td.style.backgroundColor = "rgb(250, 128, 114)";
      timer();
      Whowon();
      checkDraw();
    } else {
      alert("This cell has already a marking in it");
    }
  }
}

function clearTBL() {
  for (var i = 0; i < elems.length; i++) {
    elems[i].style.backgroundColor = "rgb(255, 255, 255)";
    elems[i].innerHTML = "";
  }
  ClearTime();
  clearInterval(id);
  clearWidth();
}

function checkDraw() {
  var count = 0;
  for (var i = 0; i < elems.length; i++) {
    if (elems[i].innerHTML === "X" || elems[i].innerHTML === "O") {
      count++;
    }
  }
  if (count === 25) {
    alert("It's a draw! Let's restart.");
    ClearTime();
    clearTBL();
  }
}

function Whowon() {
  var xo = ["X", "O"];

  for (var i = 0; i < 2; i++) {
    var row1 = 0;
    var row2 = 0;
    var row3 = 0;
    var row4 = 0;
    var row5 = 0;
    var col1 = 0;
    var col2 = 0;
    var col3 = 0;
    var col4 = 0;
    var col5 = 0;
    var diag1 = 0;
    var diag2 = 0;

    var round = 0;

    for (var j = 0; j < 5; j++) {
      round++;
      if (elems[j].innerHTML === xo[i]) {
        row1++;
        if (round === 1) {
          col1++;
          diag1++;
        }
        if (round === 2) {
          col2++;
        }
        if (round === 3) {
          col3++;
        }
        if (round === 4) {
          col4++;
        }
        if (round === 5) {
          col5++;
          diag2++;
        }
      }
      if (elems[j + 5].innerHTML === xo[i]) {
        row2++;
        if (round === 1) {
          col1++;
        }
        if (round === 2) {
          col2++;
          diag1++;
        }
        if (round === 3) {
          col3++;
        }
        if (round === 4) {
          col4++;
          diag2++;
        }
        if (round === 5) {
          col5++;
        }
      }
      if (elems[j + 10].innerHTML === xo[i]) {
        row3++;
        if (round === 1) {
          col1++;
        }
        if (round === 2) {
          col2++;
        }
        if (round === 3) {
          col3++;
          diag1++;
          diag2++;
        }
        if (round === 4) {
          col4++;
        }
        if (round === 5) {
          col5++;
        }
      }
      if (elems[j + 15].innerHTML === xo[i]) {
        row4++;
        if (round === 1) {
          col1++;
        }
        if (round === 2) {
          col2++;
          diag2++;
        }
        if (round === 3) {
          col3++;
        }
        if (round === 4) {
          col4++;
          diag1++;
        }
        if (round === 5) {
          col5++;
        }
      }
      if (elems[j + 20].innerHTML === xo[i]) {
        row5++;
        if (round === 1) {
          col1++;
          diag2++;
        }
        if (round === 2) {
          col2++;
        }
        if (round === 3) {
          col3++;
        }
        if (round === 4) {
          col4++;
        }
        if (round === 5) {
          col5++;
          diag1++;
        }
      }
    }
    if (
      row1 === 5 ||
      row2 === 5 ||
      row3 === 5 ||
      row4 === 5 ||
      row5 === 5 ||
      col1 === 5 ||
      col2 === 5 ||
      col3 === 5 ||
      col4 === 5 ||
      col5 === 5 ||
      diag1 === 5 ||
      diag2 === 5
    ) {
      if (xo[i] === "X") {
        alert("Player 1 won!");
        ClearTime();
        clearTBL();
        row1 = 0;
        row2 = 0;
        row3 = 0;
        row4 = 0;
        row5 = 0;
        col1 = 0;
        col2 = 0;
        col3 = 0;
        col4 = 0;
        col5 = 0;
        diag1 = 0;
        diag2 = 0;
        break;
      }

      if (xo[i] === "O") {
        alert("Player 2 won!");
        ClearTime();
        clearTBL();
        row1 = 0;
        row2 = 0;
        row3 = 0;
        row4 = 0;
        row5 = 0;
        col1 = 0;
        col2 = 0;
        col3 = 0;
        col4 = 0;
        col5 = 0;
        diag1 = 0;
        diag2 = 0;
        break;
      }
    }
  }
}

function timer() {
  myVar = setTimeout(timeoutAlert, 10000);
}

function timeoutAlert() {
  counter++;
  alert("Time is up!");
}

function ClearTime() {
  clearTimeout(myVar);
}

function move() {
  clearInterval(id);
  var bar = document.querySelector(".determinate");
  var width = 0;
  id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      bar.style.width = width + "%";
    }
  }
}

function clearWidth() {
  var bar = document.querySelector(".determinate");
  var width = 0;
  bar.style.width = width + "%";
}
