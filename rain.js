// rain.js

let box = document.getElementById("box");
let canvas1 = document.getElementById("canvas1");
let context1 = canvas1.getContext("2d");

let drops,
    maxSpeed = 50,
    spacing = 5,
    xPosition,
    n;

function init() {
  canvas1.width = box.clientWidth * 1.3;
  canvas1.height = box.clientHeight * 1.3;

  drops = [];
  xPosition = 0;
  n = canvas1.width / spacing;

  for (let i = 0; i < n; i++) {
    xPosition += spacing;
    drops.push({
      x: xPosition,
      y: Math.round(Math.random() * canvas1.height),
      width: 1.2,
      height: Math.round(Math.random() * canvas1.height),
      speed: Math.round(Math.random() * maxSpeed + 10),
    });
  }
}

function rain() {
  context1.clearRect(0, 0, canvas1.width, canvas1.height);
  for (let i = 0; i < n; i++) {
    context1.fillStyle = "#2e2f1d";
    context1.fillRect(drops[i].x, drops[i].y, drops[i].width, drops[i].height);
    drops[i].y += drops[i].speed;

    if (drops[i].y > canvas1.height) {
      drops[i].y = 0 - drops[i].height;
    }
  }
  requestAnimationFrame(rain);
}

function main() {
  init();
  rain();
}

window.addEventListener('load', main, false);
window.addEventListener('resize', init, false);
