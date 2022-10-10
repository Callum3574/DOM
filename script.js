const redButton = document
  .querySelector(".red")
  .addEventListener("click", function () {
    document.querySelector("#colorchanger").style.backgroundColor = "red";
  });

const greenButton = document
  .querySelector(".green")
  .addEventListener("click", function () {
    document.querySelector("#colorchanger").style.backgroundColor = "green";
  });

const yellowButton = document
  .querySelector(".yellow")
  .addEventListener("click", function () {
    document.querySelector("#colorchanger").style.backgroundColor = "yellow";
  });

const blueButton = document
  .querySelector(".blue")
  .addEventListener("click", function () {
    document.querySelector("#colorchanger").style.backgroundColor = "blue";
  });

const orangeButton = document
  .querySelector(".orange")
  .addEventListener("click", function () {
    document.querySelector("#colorchanger").style.backgroundColor = "orange";
  });

const enterTextButton = document
  .querySelector(".inputButton")
  .addEventListener("click", send);

let textBox = document.querySelector("#textbox");

function send() {
  document.querySelector(".changeme").innerHTML = textBox.value;
}
